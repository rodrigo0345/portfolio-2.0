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
    diagramId?: 'multigraft' | 'picturas' | 'videostream' | 'raft'
  }
}

export const projects: Project[] = [
  {
    id: 'edge-ml-inference',
    title: 'Edge ML Inference: NVIDIA Triton on Jetson',
    role: 'Embedded Software Developer Intern',
    date: 'SEP 2025 — Present',
    description: 'Migrated a production computer-vision inference engine to <strong>NVIDIA Triton Inference Server</strong> on Jetson Orin Nano edge devices, cutting end-to-end latency by <strong>34%</strong> and raising defect-detection throughput by <strong>13.5%</strong>. Built a custom <strong>C++ Triton Repository Agent</strong> that decouples TensorRT engine compilation from the inference loop, enabling zero-downtime deployment of <strong>ONNX</strong> models directly to devices in the field.',
    link: 'https://smartex.ai/',
    skills: ['C++', 'NVIDIA Triton', 'TensorRT', 'ONNX', 'NVIDIA Jetson'],
  },
  {
    id: 'blind-spot-detection',
    title: 'Motorcycle Blind-Spot Detection',
    role: 'Machine Learning Research Intern',
    date: 'JUN — SEP 2025',
    description: 'Designed a <strong>camera-radar sensor fusion</strong> system for motorcycle blind-spot detection at INESC TEC. Built a synthetic-data pipeline from scratch with the <strong>CARLA Simulator</strong>, then trained and evaluated a <strong>PyTorch</strong> deep learning perception model on it.',
    link: 'https://www.inesctec.pt/',
    skills: ['PyTorch', 'Computer Vision', 'Sensor Fusion', 'CARLA'],
  },
  {
    id: 'keep-rag-chatbot',
    title: 'KEEP: Specialized RAG Chatbot',
    role: 'ML Engineer',
    date: 'OCT 2024 — JAN 2025',
    description: 'Built a <strong>RAG</strong> support chatbot for a Braga-based software company: <strong>Pinecone</strong> vector search over product docs, with specialized LLM agents integrated with Redmine (issue history) and Koha so answers were grounded in real tickets and live data.',
    link: 'https://github.com/rodrigo0345/rag-chatbot',
    skills: ['Python', 'RAG', 'Pinecone', 'LLM Agents'],
  },
  {
    id: 'multigraft',
    title: 'Multigraft: Distributed Database with Vector Search',
    role: 'Lead Developer',
    date: 'FEB 2026 — Present',
    description: 'Multigraft is a from-scratch, on-disk OLTP database engine written entirely in <strong>Zig</strong>, with a hand-built <strong>Raft</strong> replication layer, exposed through a real <strong>PostgreSQL wire-protocol</strong> interface. Tables can pick between <strong>LSM Tree</strong>, <strong>B+Tree</strong>, or <strong>HNSW-indexed vector</strong> storage backends, with <strong>MVCC</strong> and a <strong>WAL</strong> guaranteeing ACID transactions. Currently extending Raft with geo-partitioned, multi-shard consensus groups for horizontal scaling. Active development.',
    link: 'https://codeberg.org/Multigraft/core',
    skills: ['Zig', 'Distributed Systems', 'Raft', 'MVCC', 'Vector Search', 'SQL'],
    detail: {
      diagramId: 'multigraft',
      keyPoints: [
        'Tables choose their storage backend at creation time: LSM Tree for write-heavy workloads, B+Tree for read-heavy range scans, or an HNSW-indexed vector store for approximate k-NN similarity search.',
        'A hand-written Raft implementation runs as named shards via a Shard Registry, each an independent consensus group with region-aware placement of voting and non-voting learner nodes.',
        'MVCC and a write-ahead log sit beneath every backend, giving SERIALIZABLE and READ COMMITTED transactions with standard SQLSTATE error codes, matching real Postgres semantics.',
        'The SQL and Raft wire protocols listen on separate ports; writes routed to a follower fail with a normal SQL error, so the client or connection pooler is responsible for retrying against the current leader.',
        'A live web dashboard visualizes elections, log replication, and geo-placement across shards independently of the SQL layer.',
      ],
    },
  },
  {
    id: 'picturas',
    title: 'Picturas: Microservice SaaS Platform',
    role: 'Backend Engineer',
    date: 'SEP 2024 — JAN 2025',
    description: 'Scalable SaaS for image manipulation, with a <strong>Vue 3</strong> frontend and a <strong>microservices</strong> backend. Built an asynchronous filter pipeline where <strong>RabbitMQ</strong> passes lightweight messages between 16+ filter workers that read and write images on a shared <strong>NFS</strong> mount, with <strong>MinIO</strong> for durable storage and a Socket.IO gateway for real-time progress. Engineered the infrastructure using <strong>Docker</strong>, <strong>Kubernetes (Helm)</strong>, and <strong>Terraform</strong>.',
    link: 'https://github.com/rafapeixoto16/RAS',
    skills: ['Node.js', 'Vue', 'RabbitMQ', 'NFS', 'MinIO', 'Kubernetes', 'Terraform', 'MongoDB'],
    detail: {
      diagramId: 'picturas',
      keyPoints: [
        'Event-driven filter pipeline: RabbitMQ messages carry file paths, not image bytes, pointing filter workers to files staged on a shared NFS (GCP Filestore) mount, so each filter reads, processes, and writes back to the same location.',
        'A dedicated orchestrator-ms service consumes filter completion events off a RabbitMQ exchange, chains the next stage, and tracks per-project pipeline state in Redis.',
        'MinIO provides durable object storage for uploaded originals and finished results, decoupled from the NFS scratch space used only while a pipeline is running.',
        'A separate WS Gateway bridges RabbitMQ notification events to Socket.IO, pushing real-time progress updates to the Vue frontend without polling.',
        'Kubernetes Helm charts with Horizontal Pod Autoscaling allow the 16+ filter workers to scale independently based on queue depth; Terraform provisions the underlying GKE cluster and NFS instance.',
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
        'RTP over UDP for low-latency packet delivery: TCP retransmits would stall real-time video, and dropped frames are preferable to stalls.',
        'A rendezvous server handles peer discovery and stream negotiation; actual media flows peer-to-peer to minimize server load.',
        'Goroutine-per-stream concurrency model in Go keeps the server simple: each client gets its own lightweight coroutine.',
        'Sequence numbers and timestamps in RTP headers allow the receiver to reorder packets and calculate jitter for adaptive buffering.',
      ],
    },
  },
  {
    id: 'raft',
    title: 'Raft Consensus: Fault Tolerance',
    role: 'Systems Engineer',
    date: 'APR — MAY 2025',
    description: 'Developed an implementation of the <strong>Raft consensus algorithm</strong> using the Maelstrom testing framework and <strong>Go</strong>. Analyzed resilience to Byzantine faults.',
    link: 'https://github.com/rodrigo0345/RaftSimple',
    skills: ['Go', 'Distributed Systems', 'Maelstrom', 'Consensus'],
    detail: {
      diagramId: 'raft',
      keyPoints: [
        'Three-state machine per node: Follower → Candidate → Leader. Nodes are followers by default and only become candidates when they stop hearing from a leader.',
        'Leader election uses randomized timeouts to avoid split votes: a node waits a random 150 to 300ms before starting an election.',
        'Log replication is append-only: the leader sends AppendEntries RPCs; a log entry is committed only after a majority acknowledges it.',
        'Maelstrom injects network partitions and node failures to validate correctness, and all linearizability tests passed.',
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
