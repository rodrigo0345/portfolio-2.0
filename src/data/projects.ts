export interface Project {
  id: string
  title: string
  role: string
  date: string
  description: string
  link?: string
  skills: string[]
  detail?: {
    keyPoints: string[]
    diagramId?: 'inesdb' | 'picturas' | 'videostream' | 'raft'
  }
}

export const projects: Project[] = [
  {
    id: 'inesdb',
    title: 'InesDB — Indexed Node Engine Storage',
    role: 'Lead Developer',
    date: 'MAR 2026',
    description: 'InesDB is a high-performance database engine built in <strong>Go</strong> using a composable component-based architecture. Designed for efficient data writes and retrieval using <strong>LSM Trees</strong> with the Autumn strategy for improved read performance. Supports replication via <strong>Raft consensus</strong> and a SQL-like query language. Active development.',
    link: 'https://github.com/rodrigo0345/inesdb',
    skills: ['Go', 'Distributed Systems', 'LSM Trees', 'Raft', 'SQL'],
    detail: {
      diagramId: 'inesdb',
      keyPoints: [
        'LSM Tree with MemTable + SSTable hierarchy enables high-throughput sequential writes while the Autumn read strategy reduces read amplification via bloom filters and compaction hints.',
        'Raft consensus across three replicas ensures strong consistency and fault tolerance — a majority quorum survives any single node failure.',
        'Composable component architecture allows swapping the storage engine (LSM vs B-Tree) without touching the query layer.',
        'WAL (Write-Ahead Log) guarantees durability: every write is flushed to disk before the MemTable is updated.',
        'A custom SQL subset parser translates queries to execution plans over the storage engine without a full relational algebra layer.',
      ],
    },
  },
  {
    id: 'picturas',
    title: 'Picturas — Microservice SaaS Platform',
    role: 'Backend Engineer',
    date: 'SEP 2024 — JAN 2025',
    description: 'Scalable SaaS for image manipulation using a <strong>microservices architecture</strong>. Implemented an asynchronous processing pipeline with <strong>RabbitMQ</strong> for orchestration and <strong>Redis</strong> for real-time WebSocket scaling. Engineered the infrastructure using <strong>Docker</strong>, <strong>Kubernetes (Helm)</strong>, and <strong>Terraform</strong>.',
    link: 'https://github.com/rafapeixoto16/RAS',
    skills: ['Node.js', 'RabbitMQ', 'Redis', 'Kubernetes', 'Terraform', 'MongoDB'],
    detail: {
      diagramId: 'picturas',
      keyPoints: [
        'Event-driven architecture with RabbitMQ decouples the API gateway from worker microservices — each image operation (filter, resize, watermark) is an independent consumer.',
        'Redis Pub/Sub broadcasts job completion events to the WebSocket gateway, enabling real-time progress updates without polling.',
        'Kubernetes Helm charts with Horizontal Pod Autoscaling allow worker replicas to scale independently based on queue depth.',
        'Terraform provisions cloud infrastructure declaratively, making the entire stack reproducible and version-controlled.',
        'MongoDB stores image metadata and job history; no relational constraints needed — document model fits naturally.',
      ],
    },
  },
  {
    id: 'videostream',
    title: 'Video Streaming Platform',
    role: 'Systems Engineer',
    date: 'JAN 2025',
    description: 'Designed and implemented a video streaming platform using <strong>Go</strong>. The system handles concurrent streams and optimizes data packet transfer for real-time playback performance.',
    link: 'https://github.com/rodrigo0345/esr-tp2',
    skills: ['Go', 'Networking', 'Streaming Protocols', 'RTP/UDP'],
    detail: {
      diagramId: 'videostream',
      keyPoints: [
        'RTP over UDP for low-latency packet delivery — TCP retransmits would stall real-time video; dropped frames are preferable to stalls.',
        'A rendezvous server handles peer discovery and stream negotiation; actual media flows peer-to-peer to minimize server load.',
        'Goroutine-per-stream concurrency model in Go keeps the server simple — each client gets its own lightweight coroutine.',
        'Sequence numbers and timestamps in RTP headers allow the receiver to reorder packets and calculate jitter for adaptive buffering.',
      ],
    },
  },
  {
    id: 'raft',
    title: 'Raft Consensus — Fault Tolerance',
    role: 'Systems Engineer',
    date: 'APR — MAY 2025',
    description: 'Developed an implementation of the <strong>Raft consensus algorithm</strong> using the Maelstrom testing framework and <strong>Go</strong>. Analyzed resilience to Byzantine faults.',
    link: 'https://github.com/rodrigo0345/RaftSimple',
    skills: ['Go', 'Distributed Systems', 'Maelstrom', 'Consensus'],
    detail: {
      diagramId: 'raft',
      keyPoints: [
        'Three-state machine per node: Follower → Candidate → Leader. Nodes are followers by default and only become candidates when they stop hearing from a leader.',
        'Leader election uses randomized timeouts to avoid split votes — a node waits a random 150–300ms before starting an election.',
        'Log replication is append-only: the leader sends AppendEntries RPCs; a log entry is committed only after a majority acknowledges it.',
        'Maelstrom injects network partitions and node failures to validate correctness — all linearizability tests passed.',
      ],
    },
  },
  {
    id: 'vscode-db',
    title: 'VS Code DB Manager',
    role: 'Contributor',
    date: 'Open Source',
    description: 'Contributed to the <strong>vscode-db-manager</strong> extension by implementing the <strong>SQLite</strong> driver. Allows users to connect to, query, and manage SQLite databases directly within VS Code.',
    link: 'https://github.com/martimmpr/vscode-db-manager',
    skills: ['TypeScript', 'SQLite', 'VS Code API'],
  },
  {
    id: 'smart-clinic',
    title: 'Smart Clinic',
    role: 'Fullstack Developer',
    date: 'NOV 2024 — MAY 2025',
    description: 'Developed a virtual consultation platform using <strong>Strapi</strong> and <strong>Jitsi</strong>. Integrated seamless payments with IfThenPay to improve clinic accessibility.',
    skills: ['Strapi', 'Jitsi', 'React', 'IfThenPay'],
  },
  {
    id: 'keybelle',
    title: 'KeyBelle',
    role: 'Backend Developer',
    date: 'OCT 2024 — APR 2025',
    description: 'Built a property key management system using <strong>.NET 8</strong> and <strong>PostgreSQL</strong> for a real estate agency. Improved operational efficiency and reduced key misplacement.',
    skills: ['.NET 8', 'C#', 'PostgreSQL'],
  },
  {
    id: 'startpoint',
    title: "START POINT's Website",
    role: 'Wordpress Developer',
    date: 'SEP — DEC 2023',
    description: 'Project Manager of this initiative. Required custom plugins for student verification and a custom theme to match branding.',
    link: 'https://startpoint.pt/',
    skills: ['PHP', 'Management', 'Wordpress'],
  },
  {
    id: 'volleyball',
    title: 'Volleyball Management App',
    role: 'Fullstack Developer',
    date: 'MAY — JUN 2023',
    description: 'Developed a MVC system using Java and MySQL to manage players and matches. Achieved the highest grade in the class (18/20).',
    link: 'https://github.com/rodrigo0345/DAI-Projeto-Volley',
    skills: ['Java', 'TypeScript', 'React'],
  },
]
