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

// ─── Multigraft ───────────────────────────────────────────────────────────────
// Actual repo: codeberg.org/Multigraft/core
// Zig, single binary: pgserver → sqlparser+engine → mvcc → storage{LSM,B+Tree,Vector/HNSW} + WAL
// Raft (also Zig, same binary) replicates via named shards in a region-aware Shard Registry
const multigraft: DiagramData = {
  title: 'Multigraft Architecture',
  nodes: [
    { id: 'client',    label: 'Client',         type: 'client',  x: 0,    y: 2.6,  z: 0,    sublabel: 'psql / pg driver' },
    { id: 'pgserver',  label: 'PSQL Server',    type: 'gateway', x: 0,    y: 1.5,  z: 0,    sublabel: 'Postgres wire protocol · :5433' },
    { id: 'sqlparser', label: 'SQL Parser',     type: 'service', x: -1.6, y: 0.4,  z: 0,    sublabel: 'lex · parse · AST' },
    { id: 'engine',    label: 'Engine',         type: 'service', x: 0,    y: 0.4,  z: 0,    sublabel: 'open/read/write/scan facade' },
    { id: 'mvcc',      label: 'MVCC Manager',   type: 'service', x: 1.6,  y: 0.4,  z: 0,    sublabel: 'txn lifecycle · isolation' },
    { id: 'lsm',       label: 'LSM Engine',     type: 'storage', x: -2.2, y: -0.9, z: 0,    sublabel: 'MemTable + SSTable' },
    { id: 'btree',     label: 'B+Tree Engine',  type: 'storage', x: -0.6, y: -1.0, z: -0.3, sublabel: 'buffer pool + pages' },
    { id: 'vector',    label: 'Vector Engine',  type: 'storage', x: 0.9,  y: -1.0, z: -0.3, sublabel: 'HNSW k-NN index' },
    { id: 'wal',       label: 'WAL',            type: 'storage', x: 2.4,  y: -0.9, z: 0,    sublabel: 'durability log' },
    { id: 'raftcore',  label: 'Raft Core',      type: 'gateway', x: -1.6, y: -2.4, z: 0.6,  sublabel: 'election · log replication' },
    { id: 'shards',    label: 'Shard Registry', type: 'infra',   x: 0,    y: -2.4, z: 0.9,  sublabel: 'region-aware consensus groups' },
    { id: 'peer',      label: 'Peer Nodes',     type: 'infra',   x: 1.8,  y: -2.4, z: 0.6,  sublabel: 'raft wire · separate port' },
  ],
  edges: [
    { from: 'client',    to: 'pgserver'  },
    { from: 'pgserver',  to: 'sqlparser' },
    { from: 'pgserver',  to: 'engine'    },
    { from: 'sqlparser', to: 'engine'    },
    { from: 'engine',    to: 'mvcc'      },
    { from: 'mvcc',      to: 'lsm'       },
    { from: 'mvcc',      to: 'btree'     },
    { from: 'mvcc',      to: 'vector'    },
    { from: 'mvcc',      to: 'wal',      label: 'write-ahead' },
    { from: 'engine',    to: 'raftcore', label: 'propose DML', dashed: true },
    { from: 'raftcore',  to: 'shards'    },
    { from: 'shards',    to: 'peer',     label: 'region placement', dashed: true },
    { from: 'peer',      to: 'raftcore', label: 'quorum ack', dashed: true },
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
// Vue 3 SPA · api-gateway + ws-gateway · users/projects/subscriptions-ms · orchestrator-ms
// RabbitMQ carries per-filter queues + filters-exchange completion events, referencing
// file paths on a shared NFS (GCP Filestore) mount; MinIO holds durable originals/results
const picturas: DiagramData = {
  title: 'Picturas Microservices',
  nodes: [
    { id: 'web',      label: 'Vue 3 SPA',       type: 'client',  x: 0,    y: 3.2,  z: 0,    sublabel: 'picturas_web · Vite + Pinia' },
    { id: 'apigw',    label: 'API Gateway',     type: 'gateway', x: -0.9, y: 2.0,  z: 0,    sublabel: 'REST · JWT · rate limit' },
    { id: 'wsgw',     label: 'WS Gateway',      type: 'gateway', x: 0.9,  y: 2.0,  z: 0,    sublabel: 'Socket.IO push' },
    { id: 'users',    label: 'users-ms',        type: 'service', x: -2.6, y: 0.7,  z: 0,    sublabel: 'auth + profile' },
    { id: 'projects', label: 'projects-ms',     type: 'service', x: -0.9, y: 0.7,  z: 0,    sublabel: 'pipeline CRUD' },
    { id: 'subs',     label: 'subscriptions-ms',type: 'service', x: 0.6,  y: 0.7,  z: 0,    sublabel: 'Stripe billing' },
    { id: 'orch',     label: 'orchestrator-ms', type: 'service', x: 2.6,  y: 0.7,  z: -0.3, sublabel: 'pipeline coordinator' },
    { id: 'rabbitmq', label: 'RabbitMQ',        type: 'infra',   x: 3.4,  y: -0.7, z: 0.6,  sublabel: 'per-filter queues + filters-exchange' },
    { id: 'filters',  label: 'Filter Workers',  type: 'service', x: 1.9,  y: -1.4, z: -1.0, sublabel: '16+ services · sharp/OCR/etc.' },
    { id: 'nfs',      label: 'NFS (Filestore)', type: 'storage', x: 0.6,  y: -2.6, z: -0.5, sublabel: 'shared scratch mount' },
    { id: 'minio',    label: 'MinIO / S3',      type: 'storage', x: -0.9, y: -2.6, z: 0,    sublabel: 'durable originals + results' },
    { id: 'mongo',    label: 'MongoDB',         type: 'storage', x: -2.6, y: -2.6, z: 0,    sublabel: 'per-service databases' },
    { id: 'redis',    label: 'Redis',           type: 'infra',   x: -2.8, y: 3.0,  z: -0.5, sublabel: 'rate limit · ws adapter · pipeline state' },
  ],
  edges: [
    { from: 'web',      to: 'apigw'                                },
    { from: 'web',      to: 'wsgw',      label: 'socket.io',  dashed: true },
    { from: 'apigw',    to: 'users'                                },
    { from: 'apigw',    to: 'projects'                             },
    { from: 'apigw',    to: 'subs'                                 },
    { from: 'apigw',    to: 'redis',     label: 'rate limit'       },
    { from: 'wsgw',     to: 'redis',     label: 'socket adapter', dashed: true },
    { from: 'users',    to: 'mongo'                                },
    { from: 'projects', to: 'mongo'                                },
    { from: 'subs',     to: 'mongo'                                },
    { from: 'projects', to: 'minio',     label: 'store original'   },
    { from: 'projects', to: 'nfs',       label: 'stage image'      },
    { from: 'projects', to: 'rabbitmq',  label: 'first filter msg' },
    { from: 'rabbitmq', to: 'filters',   label: 'per-filter queue' },
    { from: 'filters',  to: 'nfs',       label: 'read/write file'  },
    { from: 'filters',  to: 'rabbitmq',  label: 'filters-exchange', dashed: true },
    { from: 'rabbitmq', to: 'orch',      label: 'completion event' },
    { from: 'orch',     to: 'redis',     label: 'pipeline state'   },
    { from: 'orch',     to: 'rabbitmq',  label: 'next stage',       dashed: true },
    { from: 'orch',     to: 'minio',     label: 'zipped result',    dashed: true },
    { from: 'rabbitmq', to: 'wsgw',      label: 'notification_queue', dashed: true },
  ],
}

export const diagrams: Record<string, DiagramData> = {
  multigraft: multigraft,
  videostream: videostream,
  raft: raft,
  picturas: picturas,
}
