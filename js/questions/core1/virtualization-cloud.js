const virtualizationCloudQuestions = [
  {
    id: "C1-VC-Q001",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Easy",
    topic: "Cloud Computing",
    question: "What is cloud computing?",
    choices: [
      "Using internet-based services instead of local resources",
      "Connecting two monitors together",
      "Installing Windows on a laptop",
      "Creating a local printer"
    ],
    answer: "Using internet-based services instead of local resources",
    explanation: "Cloud computing delivers computing resources such as storage, applications, and servers over the internet.",
    examTip: "Think 'services over the internet.'",
    memoryTrick: "The cloud lives online.",
    commonMistake: "The cloud doesn't always mean someone else's computer—it refers to remotely delivered services.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q002",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Easy",
    topic: "Virtual Machine",
    question: "What is a virtual machine (VM)?",
    choices: [
      "A software-based computer running inside another computer",
      "A wireless router",
      "A physical server rack",
      "A network switch"
    ],
    answer: "A software-based computer running inside another computer",
    explanation: "A VM behaves like a physical computer but runs as software using virtualized hardware.",
    examTip: "A VM is a computer inside another computer.",
    memoryTrick: "Virtual = not physically separate.",
    commonMistake: "A VM is not the same thing as cloud computing.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q003",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Medium",
    topic: "Hypervisor",
    question: "What is the purpose of a hypervisor?",
    choices: [
      "Manage virtual machines",
      "Assign IP addresses",
      "Encrypt Wi-Fi traffic",
      "Repair hard drives"
    ],
    answer: "Manage virtual machines",
    explanation: "A hypervisor creates and manages virtual machines on physical hardware.",
    examTip: "Hypervisors run VMs.",
    memoryTrick: "Hypervisor = VM manager.",
    commonMistake: "Windows itself is not automatically a hypervisor.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q004",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Easy",
    topic: "IaaS",
    question: "Which cloud service model provides virtual machines and networking infrastructure?",
    choices: [
      "IaaS",
      "PaaS",
      "SaaS",
      "DaaS"
    ],
    answer: "IaaS",
    explanation: "Infrastructure as a Service provides virtual servers, networking, and storage.",
    examTip: "Infrastructure = IaaS.",
    memoryTrick: "I = Infrastructure.",
    commonMistake: "Don't confuse IaaS with SaaS.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q005",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Easy",
    topic: "PaaS",
    question: "Which cloud service model provides developers with a platform to build and deploy applications?",
    choices: [
      "PaaS",
      "IaaS",
      "SaaS",
      "VPN"
    ],
    answer: "PaaS",
    explanation: "Platform as a Service provides development tools without managing the underlying infrastructure.",
    examTip: "Developers love PaaS.",
    memoryTrick: "Platform = PaaS.",
    commonMistake: "PaaS is not simply online software.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q006",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Easy",
    topic: "SaaS",
    question: "Microsoft 365 and Google Workspace are examples of:",
    choices: [
      "SaaS",
      "IaaS",
      "PaaS",
      "LAN"
    ],
    answer: "SaaS",
    explanation: "Software as a Service provides complete applications through the internet.",
    examTip: "If users simply log in and use software, think SaaS.",
    memoryTrick: "Software = SaaS.",
    commonMistake: "Users don't manage the servers in SaaS.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q007",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Medium",
    topic: "Private Cloud",
    question: "Which type of cloud is used exclusively by a single organization?",
    choices: [
      "Private Cloud",
      "Public Cloud",
      "Community Wi-Fi",
      "Hybrid Router"
    ],
    answer: "Private Cloud",
    explanation: "A private cloud is dedicated to one organization and offers greater control.",
    examTip: "One company = Private Cloud.",
    memoryTrick: "Private means exclusive.",
    commonMistake: "Private clouds can still be hosted off-site.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q008",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Medium",
    topic: "Public Cloud",
    question: "AWS, Microsoft Azure, and Google Cloud are examples of:",
    choices: [
      "Public Cloud",
      "Private Cloud",
      "Local Area Networks",
      "Hypervisors"
    ],
    answer: "Public Cloud",
    explanation: "Public cloud providers deliver computing resources to many customers over the internet.",
    examTip: "Shared provider = Public Cloud.",
    memoryTrick: "AWS = Public Cloud.",
    commonMistake: "Public doesn't mean insecure.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q009",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Medium",
    topic: "Hybrid Cloud",
    question: "A company uses both an on-premises data center and Microsoft Azure. What type of cloud deployment is this?",
    choices: [
      "Hybrid Cloud",
      "Private Cloud",
      "Public Wi-Fi",
      "Virtual Desktop"
    ],
    answer: "Hybrid Cloud",
    explanation: "Hybrid cloud combines local infrastructure with public cloud resources.",
    examTip: "On-prem + cloud = Hybrid.",
    memoryTrick: "Hybrid = Both.",
    commonMistake: "Hybrid refers to deployment, not virtualization.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },

  {
    id: "C1-VC-Q010",
    core: "Core 1",
    domain: "Virtualization & Cloud",
    difficulty: "Medium",
    topic: "Scalability",
    question: "Which cloud characteristic allows organizations to quickly increase or decrease computing resources as needed?",
    choices: [
      "Scalability",
      "POST",
      "RAID",
      "BIOS"
    ],
    answer: "Scalability",
    explanation: "Cloud scalability allows resources to grow or shrink based on demand.",
    examTip: "Need more resources? Scale up.",
    memoryTrick: "Scale = Grow.",
    commonMistake: "Scalability is different from availability.",
    references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
  },
  {
  id: "C1-VC-Q011",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Sandboxing",
  question: "A technician wants to test an unknown application without risking the host operating system. Which solution is BEST?",
  choices: [
    "Run the application in a virtual machine sandbox",
    "Disable the firewall",
    "Install it directly on the production computer",
    "Format the host drive"
  ],
  answer: "Run the application in a virtual machine sandbox",
  explanation: "A sandbox isolates the application from the main operating system, reducing the risk that testing will affect the host.",
  examTip: "Safe testing environment = sandbox.",
  memoryTrick: "Keep risky software inside the sandbox.",
  commonMistake: "Installing unknown software directly on a production system increases risk.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q012",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "VDI",
  question: "Which technology hosts user desktops on centralized servers and delivers them remotely to endpoint devices?",
  choices: [
    "Virtual Desktop Infrastructure",
    "RAID",
    "NFC",
    "DHCP"
  ],
  answer: "Virtual Desktop Infrastructure",
  explanation: "VDI hosts desktop operating systems centrally and allows users to access those desktops from remote endpoints.",
  examTip: "Centralized remote desktops = VDI.",
  memoryTrick: "VDI = Virtual Desktop Infrastructure.",
  commonMistake: "VDI is not the same as running one local virtual machine on a laptop.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q013",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Containers",
  question: "Which virtualization technology packages an application with its dependencies while sharing the host operating system kernel?",
  choices: [
    "Container",
    "Full virtual machine",
    "RAID array",
    "VPN tunnel"
  ],
  answer: "Container",
  explanation: "Containers isolate applications and their dependencies while sharing the host OS kernel, making them lighter than full virtual machines.",
  examTip: "Lightweight application isolation = container.",
  memoryTrick: "Containers carry apps, not full operating systems.",
  commonMistake: "A full VM includes its own guest operating system.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q014",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Type 1 Hypervisor",
  question: "Which type of hypervisor runs directly on physical hardware without a host operating system?",
  choices: [
    "Type 1",
    "Type 2",
    "Container",
    "SaaS"
  ],
  answer: "Type 1",
  explanation: "A Type 1 hypervisor runs directly on bare-metal hardware and is commonly used in enterprise data centers.",
  examTip: "Bare metal = Type 1.",
  memoryTrick: "Type 1 comes first, before the operating system.",
  commonMistake: "Type 2 hypervisors run on top of a host operating system.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q015",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Type 2 Hypervisor",
  question: "Which type of hypervisor runs as an application inside a host operating system?",
  choices: [
    "Type 2",
    "Type 1",
    "Community cloud",
    "Container registry"
  ],
  answer: "Type 2",
  explanation: "A Type 2 hypervisor runs on top of an existing operating system and is common on personal computers.",
  examTip: "Hosted hypervisor = Type 2.",
  memoryTrick: "Type 2 sits on top of OS number one.",
  commonMistake: "Type 1 runs directly on hardware.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q016",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Community Cloud",
  question: "Several healthcare organizations share a cloud environment designed specifically for their common regulatory needs. Which cloud model is this?",
  choices: [
    "Community cloud",
    "Public cloud",
    "Private cloud",
    "Hybrid cloud"
  ],
  answer: "Community cloud",
  explanation: "A community cloud is shared by organizations with similar requirements, goals, or compliance needs.",
  examTip: "Shared by organizations with common needs = community cloud.",
  memoryTrick: "A cloud for one community of organizations.",
  commonMistake: "A private cloud is dedicated to one organization.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q017",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Metered Utilization",
  question: "A company is charged only for the cloud storage and processing power it actually consumes. Which cloud characteristic does this describe?",
  choices: [
    "Metered utilization",
    "Multitenancy",
    "File synchronization",
    "Sandboxing"
  ],
  answer: "Metered utilization",
  explanation: "Metered utilization tracks resource use so customers can be billed based on actual consumption.",
  examTip: "Pay for what you use = metered utilization.",
  memoryTrick: "The cloud meter keeps score.",
  commonMistake: "Elasticity changes resource levels; metering measures usage.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q018",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Elasticity",
  question: "A cloud service automatically adds resources during heavy demand and removes them when demand drops. Which characteristic is being demonstrated?",
  choices: [
    "Elasticity",
    "Encryption",
    "Multitenancy",
    "File synchronization"
  ],
  answer: "Elasticity",
  explanation: "Elasticity allows cloud resources to automatically expand and contract in response to changing demand.",
  examTip: "Automatic grow and shrink = elasticity.",
  memoryTrick: "Elastic stretches and snaps back.",
  commonMistake: "Scalability is the ability to grow; elasticity emphasizes dynamic adjustment.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q019",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Availability",
  question: "A cloud provider uses redundant systems so services remain accessible even if one server fails. Which cloud characteristic is this?",
  choices: [
    "Availability",
    "Metered utilization",
    "Multitenancy",
    "Application virtualization"
  ],
  answer: "Availability",
  explanation: "Availability means services remain accessible and operational, often through redundancy and failover.",
  examTip: "Service stays online = availability.",
  memoryTrick: "Available means ready when needed.",
  commonMistake: "Availability is not the same as confidentiality or encryption.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
},

{
  id: "C1-VC-Q020",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Multitenancy",
  question: "Which cloud characteristic allows multiple customers to share the same underlying infrastructure while keeping their data logically separated?",
  choices: [
    "Multitenancy",
    "File synchronization",
    "Bare-metal virtualization",
    "Local storage"
  ],
  answer: "Multitenancy",
  explanation: "Multitenancy allows multiple customers, or tenants, to share cloud infrastructure while maintaining logical separation.",
  examTip: "Many customers sharing one platform = multitenancy.",
  memoryTrick: "Many tenants in one cloud building.",
  commonMistake: "Shared infrastructure does not mean customers can access each other's data.",
  references: ["CompTIA A+ 220-1201 Virtualization and Cloud Computing"]
}
,
{
  id: "C1-VC-Q021",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Cloud Storage",
  question: "Which cloud service is primarily used to store and synchronize files across multiple devices?",
  choices: [
    "Cloud storage",
    "Hypervisor",
    "RAID 1",
    "Bluetooth"
  ],
  answer: "Cloud storage",
  explanation: "Cloud storage services allow users to store files online and access them from multiple devices.",
  examTip: "Online file syncing = cloud storage.",
  memoryTrick: "The cloud remembers your files.",
  commonMistake: "Cloud storage is different from a complete virtual machine.",
  references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
},

{
  id: "C1-VC-Q022",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Rapid Elasticity",
  question: "Which cloud characteristic allows resources to automatically increase during heavy usage?",
  choices: [
    "Rapid elasticity",
    "Encryption",
    "RAID",
    "NAT"
  ],
  answer: "Rapid elasticity",
  explanation: "Rapid elasticity enables cloud resources to automatically scale up and down based on demand.",
  examTip: "Need more resources instantly? Think elasticity.",
  memoryTrick: "Elastic stretches.",
  commonMistake: "Elasticity is automatic; scalability may require manual planning.",
  references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
},

{
  id: "C1-VC-Q023",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Snapshots",
  question: "What is the primary purpose of a virtual machine snapshot?",
  choices: [
    "Capture the current state of the VM",
    "Increase processor speed",
    "Expand RAM",
    "Replace the operating system"
  ],
  answer: "Capture the current state of the VM",
  explanation: "Snapshots allow administrators to restore a virtual machine to an earlier point in time.",
  examTip: "Snapshot = restore point for a VM.",
  memoryTrick: "Take a picture of the VM.",
  commonMistake: "Snapshots are not a substitute for backups.",
  references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
},

{
  id: "C1-VC-Q024",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Easy",
  topic: "Public Cloud",
  question: "Which cloud deployment model is owned and operated by a third-party provider and shared among many customers?",
  choices: [
    "Public cloud",
    "Private cloud",
    "Hybrid cloud",
    "Community cloud"
  ],
  answer: "Public cloud",
  explanation: "Public cloud providers deliver shared computing resources over the internet.",
  examTip: "Shared provider = public cloud.",
  memoryTrick: "Public serves the public.",
  commonMistake: "Public cloud does not mean everyone's data is visible.",
  references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
},

{
  id: "C1-VC-Q025",
  core: "Core 1",
  domain: "Virtualization & Cloud",
  difficulty: "Medium",
  topic: "Resource Pooling",
  question: "Which cloud characteristic allows computing resources to be shared among multiple customers while remaining logically separated?",
  choices: [
    "Resource pooling",
    "Port forwarding",
    "NFC",
    "BIOS"
  ],
  answer: "Resource pooling",
  explanation: "Cloud providers dynamically assign shared computing resources to multiple customers as needed.",
  examTip: "Shared resources = resource pooling.",
  memoryTrick: "Everyone shares the pool.",
  commonMistake: "Resource pooling is different from multitenancy, although they are closely related.",
  references: ["CompTIA A+ Core 1 Virtualization & Cloud"]
}];