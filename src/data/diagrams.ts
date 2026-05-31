export type NodeType = 'client' | 'gateway' | 'service' | 'storage' | 'infra'

export interface DiagramNode {
  id: string
  label: string
  type: NodeType
  x: number
  y: number
  z: number
  sublabel?: string
}

export interface DiagramEdge {
  from: string
  to: string
  label?: string
  dashed?: boolean
}

export interface DiagramData {
  nodes: DiagramNode[]
  edges: DiagramEdge[]
  title: string
}

// ─── InesDB ─────────────────────────────────────────────────────────────────
// Actual repo: github.com/rodrigo0345/inesdb
// Layered DB engine: pgserver → sqlparser → txn+concurrency → storage{LSM,B+tree} + WAL
const inesdb: DiagramData = {
  title: 'InesDB Architecture',
  nodes: [
    { id: 'client',      label: 'Client',        type: 'client',  x: 0,    y: 2.5,  z: 0,    sublabel: 'psql / CLI / bench' },
    { id: 'pgserver',    label: 'pg server',      type: 'gateway', x: 0,    y: 1.4,  z: 0,    sublabel: 'PostgreSQL wire protocol' },
    { id: 'sqlparser',   label: 'SQL Parser',     type: 'service', x: -1.4, y: 0.3,  z: 0,    sublabel: 'query interpretation' },
    { id: 'txn',         label: 'Txn Manager',    type: 'service', x: 0,    y: 0.3,  z: 0,    sublabel: 'ACID, isolation levels' },
    { id: 'concurrency', label: 'Concurrency',    type: 'service', x: 1.4,  y: 0.3,  z: 0,    sublabel: 'MVCC · OCC · 2PL' },
    { id: 'lsm',         label: 'LSM Tree',       type: 'storage', x: -1.0, y: -0.9, z: 0,    sublabel: 'MemTable + SSTable' },
    { id: 'btree',       label: 'B+ Tree',        type: 'storage', x: 0.8,  y: -0.9, z: 0,    sublabel: 'pluggable backend' },
    { id: 'wal',         label: 'WAL',            type: 'storage', x: 2.2,  y: -0.9, z: 0,    sublabel: 'durability log' },
    { id: 'bench',       label: 'Maelstrom',      type: 'infra',   x: -2.5, y: 1.4,  z: 0,    sublabel: 'distributed test' },
  ],
  edges: [
    { from: 'client',    to: 'pgserver'    },
    { from: 'bench',     to: 'pgserver',   label: 'inject faults', dashed: true },
    { from: 'pgserver',  to: 'sqlparser'   },
    { from: 'pgserver',  to: 'txn'         },
    { from: 'sqlparser', to: 'txn'         },
    { from: 'txn',       to: 'concurrency' },
    { from: 'txn',       to: 'lsm'         },
    { from: 'txn',       to: 'btree'       },
    { from: 'concurrency', to: 'lsm'       },
    { from: 'lsm',       to: 'wal'         },
    { from: 'btree',     to: 'wal'         },
  ],
}

// ─── ESR-TP2 (Video Streaming) ───────────────────────────────────────────────
// Actual repo: github.com/rodrigo0345/esr-tp2
// P2P overlay: Client → Bootstrap → Presence mesh (distance-vector routing) → Server
// QUIC + Protocol Buffers
const videostream: DiagramData = {
  title: 'P2P Video Streaming',
  nodes: [
    { id: 'client1',  label: 'Client A',      type: 'client',  x: -2.5, y: 1.2,  z: 0.5,  sublabel: 'jitter buffer' },
    { id: 'client2',  label: 'Client B',      type: 'client',  x: -2.5, y: -0.4, z: 0.5,  sublabel: 'jitter buffer' },
    { id: 'bs',       label: 'Bootstrapper',  type: 'gateway', x: 0,    y: 2.0,  z: 0,    sublabel: 'peer discovery' },
    { id: 'pn1',      label: 'Presence N1',   type: 'service', x: -1.2, y: 0.4,  z: -0.5, sublabel: 'routing table' },
    { id: 'pn2',      label: 'Presence N2',   type: 'service', x: 0.4,  y: 0.4,  z: -0.5, sublabel: 'routing table' },
    { id: 'pn3',      label: 'Presence N3',   type: 'service', x: 1.8,  y: 0.4,  z: -0.5, sublabel: 'routing table' },
    { id: 'router',   label: 'Dist. Vector',  type: 'service', x: 0.4,  y: -0.8, z: -0.5, sublabel: 'Bellman-Ford' },
    { id: 'server',   label: 'Video Server',  type: 'storage', x: 0.4,  y: -2.0, z: 0,    sublabel: 'stream source' },
  ],
  edges: [
    { from: 'client1', to: 'bs',     label: 'join',       dashed: true },
    { from: 'client2', to: 'bs',     label: 'join',       dashed: true },
    { from: 'bs',      to: 'pn1',    label: 'assign node' },
    { from: 'bs',      to: 'pn2'    },
    { from: 'bs',      to: 'pn3'    },
    { from: 'pn1',     to: 'pn2',    label: 'QUIC' },
    { from: 'pn2',     to: 'pn3',    label: 'QUIC' },
    { from: 'pn1',     to: 'router' },
    { from: 'pn2',     to: 'router' },
    { from: 'pn3',     to: 'router' },
    { from: 'router',  to: 'server', label: 'RTP/UDP' },
    { from: 'client1', to: 'pn1',    label: 'stream', dashed: true },
    { from: 'client2', to: 'pn2',    label: 'stream', dashed: true },
  ],
}

// ─── RaftSimple ──────────────────────────────────────────────────────────────
// Actual repo: github.com/rodrigo0345/RaftSimple
// Files: node.go, follower.go, candidate.go, leader.go, main.go, maelstrom.go
// State machine + KV store + Maelstrom test harness
const raft: DiagramData = {
  title: 'Raft Consensus',
  nodes: [
    { id: 'maelstrom', label: 'Maelstrom',   type: 'infra',   x: -2.8, y: 0,    z: 0,    sublabel: 'fault injection' },
    { id: 'main',      label: 'main.go',     type: 'gateway', x: -1.2, y: 0,    z: 0,    sublabel: 'msg dispatcher' },
    { id: 'follower',  label: 'Follower',    type: 'service', x: 0.6,  y: 1.4,  z: 0.6,  sublabel: 'heartbeat + vote' },
    { id: 'candidate', label: 'Candidate',   type: 'service', x: 0.6,  y: 0,    z: 0.6,  sublabel: 'RequestVote RPCs' },
    { id: 'leader',    label: 'Leader',      type: 'gateway', x: 0.6,  y: -1.4, z: 0.6,  sublabel: 'AppendEntries' },
    { id: 'node',      label: 'node.go',     type: 'service', x: 2.2,  y: 0,    z: 0,    sublabel: 'persistent state' },
    { id: 'kvstore',   label: 'KV Store',    type: 'storage', x: 3.5,  y: 0.8,  z: 0,    sublabel: 'read/write/CAS' },
    { id: 'log',       label: 'Raft Log',    type: 'storage', x: 3.5,  y: -0.8, z: 0,    sublabel: 'append-only' },
  ],
  edges: [
    { from: 'maelstrom', to: 'main',      label: 'STDIN',   },
    { from: 'main',      to: 'follower',  label: 'dispatch' },
    { from: 'main',      to: 'candidate', label: 'dispatch' },
    { from: 'main',      to: 'leader',    label: 'dispatch' },
    { from: 'follower',  to: 'candidate', label: 'timeout',  dashed: true },
    { from: 'candidate', to: 'leader',    label: 'majority', dashed: true },
    { from: 'candidate', to: 'follower',  label: 'split',    dashed: true },
    { from: 'leader',    to: 'follower',  label: 'crash',    dashed: true },
    { from: 'follower',  to: 'node'  },
    { from: 'candidate', to: 'node'  },
    { from: 'leader',    to: 'node'  },
    { from: 'node',      to: 'kvstore' },
    { from: 'node',      to: 'log'    },
    { from: 'leader',    to: 'log',    label: 'append' },
  ],
}

// ─── Picturas (RAS) ──────────────────────────────────────────────────────────
// Actual repo: github.com/rafapeixoto16/RAS
// 14+ filter microservices, orchestrator hub, K8s/Terraform infra
const picturas: DiagramData = {
  title: 'Picturas Microservices',
  nodes: [
    { id: 'web',      label: 'React SPA',      type: 'client',  x: 0,    y: 3.0,  z: 0,    sublabel: 'picturas_web' },
    { id: 'apigw',    label: 'API Gateway',    type: 'gateway', x: -0.8, y: 1.8,  z: 0,    sublabel: 'REST HTTP' },
    { id: 'wsgw',     label: 'WS Gateway',     type: 'gateway', x: 0.8,  y: 1.8,  z: 0,    sublabel: 'real-time events' },
    { id: 'orch',     label: 'Orchestrator',   type: 'gateway', x: 0,    y: 0.6,  z: 0,    sublabel: 'workflow coord.' },
    { id: 'users',    label: 'users-ms',       type: 'service', x: -2.4, y: -0.6, z: 0,    sublabel: 'auth + users' },
    { id: 'projects', label: 'projects-ms',    type: 'service', x: -0.8, y: -0.6, z: 0,    sublabel: 'project lifecycle' },
    { id: 'subs',     label: 'subscriptions',  type: 'service', x: 0.8,  y: -0.6, z: 0,    sublabel: 'billing tiers' },
    { id: 'filters',  label: 'Filter Workers', type: 'service', x: 2.4,  y: -0.6, z: -0.8, sublabel: 'brightness·resize·ocr\nremove-bg·watermark+9' },
    { id: 'mongo',    label: 'MongoDB',        type: 'storage', x: -1.2, y: -1.8, z: 0,    sublabel: 'documents + jobs' },
    { id: 'redis',    label: 'Redis',          type: 'storage', x: 0.4,  y: -1.8, z: 0,    sublabel: 'pub/sub + cache' },
    { id: 'k8s',      label: 'K8s / Helm',    type: 'infra',   x: 2.2,  y: -1.8, z: 0,    sublabel: 'HPA auto-scaling' },
    { id: 'tf',       label: 'Terraform',     type: 'infra',   x: 3.2,  y: -1.8, z: 0,    sublabel: 'IaC provisioning' },
  ],
  edges: [
    { from: 'web',      to: 'apigw'                },
    { from: 'web',      to: 'wsgw'                 },
    { from: 'apigw',    to: 'orch'                 },
    { from: 'wsgw',     to: 'orch',   dashed: true },
    { from: 'orch',     to: 'users'                },
    { from: 'orch',     to: 'projects'             },
    { from: 'orch',     to: 'subs'                 },
    { from: 'orch',     to: 'filters', label: 'RabbitMQ queue' },
    { from: 'users',    to: 'mongo'                },
    { from: 'projects', to: 'mongo'                },
    { from: 'filters',  to: 'mongo'                },
    { from: 'filters',  to: 'redis',  label: 'job done' },
    { from: 'redis',    to: 'wsgw',   label: 'pub/sub',   dashed: true },
    { from: 'k8s',      to: 'filters', label: 'scales',   dashed: true },
    { from: 'tf',       to: 'k8s',    label: 'provisions', dashed: true },
  ],
}

export const diagrams: Record<string, DiagramData> = {
  inesdb: inesdb,
  videostream: videostream,
  raft: raft,
  picturas: picturas,
}
