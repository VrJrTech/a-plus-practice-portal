const operatingSystemsQuestions = [
  {
    id: "C2-OS-Q001",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Easy",
    topic: "Windows Editions",
    question: "Which Windows edition is MOST commonly used in business environments because it supports joining an Active Directory domain?",
    choices: [
      "Windows Home",
      "Windows Pro",
      "Windows Starter",
      "Windows S Mode"
    ],
    answer: "Windows Pro",
    explanation: "Windows Pro includes business features such as domain join, BitLocker support, and Remote Desktop hosting.",
    examTip: "Business PC? Think Windows Pro.",
    memoryTrick: "Pro = Professional features.",
    commonMistake: "Windows Home cannot join a traditional Active Directory domain.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q002",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Easy",
    topic: "File Systems",
    question: "Which file system is the default for modern Windows installations?",
    choices: [
      "FAT32",
      "NTFS",
      "ext4",
      "APFS"
    ],
    answer: "NTFS",
    explanation: "NTFS supports permissions, encryption, compression, and large file sizes.",
    examTip: "Modern Windows = NTFS.",
    memoryTrick: "New Technology File System.",
    commonMistake: "FAT32 is older and has file size limitations.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q003",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Medium",
    topic: "Command Line",
    question: "Which Windows command displays the current IP configuration?",
    choices: [
      "ipconfig",
      "ping",
      "dir",
      "tracert"
    ],
    answer: "ipconfig",
    explanation: "The ipconfig command displays IP addresses, gateways, and DNS information.",
    examTip: "Need to see network settings? Use ipconfig.",
    memoryTrick: "IP Configuration = ipconfig.",
    commonMistake: "Ping tests connectivity but doesn't display configuration.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q004",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Medium",
    topic: "Windows Tools",
    question: "Which built-in Windows utility allows technicians to manage disks, partitions, and volumes?",
    choices: [
      "Disk Management",
      "Task Manager",
      "Registry Editor",
      "Event Viewer"
    ],
    answer: "Disk Management",
    explanation: "Disk Management is used to create, delete, extend, and format partitions.",
    examTip: "Partitions = Disk Management.",
    memoryTrick: "Manage disks with Disk Management.",
    commonMistake: "Task Manager monitors running programs, not disks.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q005",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Medium",
    topic: "Task Manager",
    question: "A user's computer is running extremely slowly. Which utility should be checked FIRST to identify processes consuming CPU and memory?",
    choices: [
      "Task Manager",
      "Disk Cleanup",
      "Control Panel",
      "Paint"
    ],
    answer: "Task Manager",
    explanation: "Task Manager displays resource usage and running applications.",
    examTip: "Slow PC? Check Task Manager first.",
    memoryTrick: "Task Manager manages tasks.",
    commonMistake: "Don't reboot before checking what's using resources.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q006",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Easy",
    topic: "Linux",
    question: "Which Linux command lists the contents of the current directory?",
    choices: [
      "ls",
      "cd",
      "pwd",
      "mkdir"
    ],
    answer: "ls",
    explanation: "The ls command displays files and folders in the current directory.",
    examTip: "List = ls.",
    memoryTrick: "LS = LiSt.",
    commonMistake: "cd changes directories; it doesn't list them.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q007",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Easy",
    topic: "Linux",
    question: "Which Linux command changes the current working directory?",
    choices: [
      "cd",
      "ls",
      "pwd",
      "cp"
    ],
    answer: "cd",
    explanation: "The cd command moves between directories.",
    examTip: "Change Directory = cd.",
    memoryTrick: "cd = Change Directory.",
    commonMistake: "pwd prints the current directory instead.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q008",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Medium",
    topic: "macOS",
    question: "Which file system is used by modern versions of macOS?",
    choices: [
      "NTFS",
      "FAT32",
      "APFS",
      "ext4"
    ],
    answer: "APFS",
    explanation: "Apple File System (APFS) is optimized for SSDs and modern Apple devices.",
    examTip: "Modern Mac = APFS.",
    memoryTrick: "Apple = APFS.",
    commonMistake: "NTFS belongs to Windows.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q009",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Medium",
    topic: "Recovery",
    question: "Which Windows feature allows a technician to restore system files without affecting personal documents?",
    choices: [
      "System Restore",
      "Disk Cleanup",
      "Task Scheduler",
      "Services"
    ],
    answer: "System Restore",
    explanation: "System Restore rolls system files and settings back to an earlier restore point.",
    examTip: "Restore Windows—not documents.",
    memoryTrick: "Restore Point = System Restore.",
    commonMistake: "It is not the same as a full backup.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },

  {
    id: "C2-OS-Q010",
    core: "Core 2",
    domain: "Operating Systems",
    difficulty: "Medium",
    topic: "Safe Mode",
    question: "Why would a technician boot Windows into Safe Mode?",
    choices: [
      "To load only essential drivers and troubleshoot problems",
      "To improve gaming performance",
      "To install Microsoft Office",
      "To increase RAM capacity"
    ],
    answer: "To load only essential drivers and troubleshoot problems",
    explanation: "Safe Mode starts Windows with a minimal set of drivers and services, making troubleshooting easier.",
    examTip: "Safe Mode = Minimal Windows.",
    memoryTrick: "Safe = Simple.",
    commonMistake: "Safe Mode is for troubleshooting—not everyday use.",
    references: ["CompTIA A+ Core 2 Operating Systems"]
  },
  ,
{
  id: "C2-OS-Q011",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Easy",
  topic: "Command Prompt",
  question: "Which command displays the current working directory in Windows?",
  choices: [
    "cd",
    "pwd",
    "ls",
    "mkdir"
  ],
  answer: "cd",
  explanation: "When used without parameters, the cd command displays the current directory in Windows Command Prompt.",
  examTip: "Windows uses 'cd'; Linux commonly uses 'pwd'.",
  memoryTrick: "cd = Current Directory.",
  commonMistake: "pwd is primarily a Linux command.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q012",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Easy",
  topic: "Command Prompt",
  question: "Which Windows command displays the contents of the current directory?",
  choices: [
    "dir",
    "ls",
    "tree",
    "ipconfig"
  ],
  answer: "dir",
  explanation: "The dir command lists files and folders in the current directory.",
  examTip: "Directory listing = dir.",
  memoryTrick: "DIR = DIRectory.",
  commonMistake: "ls is the Linux equivalent.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q013",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Networking Commands",
  question: "Which command displays the route packets take to reach a destination?",
  choices: [
    "tracert",
    "ping",
    "nslookup",
    "hostname"
  ],
  answer: "tracert",
  explanation: "Tracert identifies each router a packet passes through.",
  examTip: "Path through the network = tracert.",
  memoryTrick: "Trace the route.",
  commonMistake: "Ping only verifies connectivity.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q014",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Networking Commands",
  question: "Which command is commonly used to query DNS records?",
  choices: [
    "nslookup",
    "ping",
    "netstat",
    "gpupdate"
  ],
  answer: "nslookup",
  explanation: "Nslookup queries DNS servers for hostname and IP address information.",
  examTip: "Need DNS information? Use nslookup.",
  memoryTrick: "Name Server Lookup.",
  commonMistake: "Ipconfig displays local settings, not DNS queries.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q015",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Networking Commands",
  question: "Which command displays active network connections on a Windows computer?",
  choices: [
    "netstat",
    "ping",
    "mkdir",
    "chkdsk"
  ],
  answer: "netstat",
  explanation: "Netstat displays active connections, listening ports, and protocol statistics.",
  examTip: "Need to see connections? Think netstat.",
  memoryTrick: "Network statistics.",
  commonMistake: "Ping does not display open connections.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q016",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Easy",
  topic: "Windows Utilities",
  question: "Which utility is commonly used to remove unnecessary temporary files?",
  choices: [
    "Disk Cleanup",
    "Registry Editor",
    "Task Scheduler",
    "Event Viewer"
  ],
  answer: "Disk Cleanup",
  explanation: "Disk Cleanup helps free storage space by removing temporary and unnecessary files.",
  examTip: "Need more storage? Start with Disk Cleanup.",
  memoryTrick: "Cleanup cleans disks.",
  commonMistake: "Disk Cleanup does not uninstall programs.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q017",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Windows Utilities",
  question: "Which Windows utility displays logged system events and errors?",
  choices: [
    "Event Viewer",
    "Disk Cleanup",
    "Control Panel",
    "Services"
  ],
  answer: "Event Viewer",
  explanation: "Event Viewer stores logs that help troubleshoot hardware, software, and security issues.",
  examTip: "Need logs? Open Event Viewer.",
  memoryTrick: "Events live in Event Viewer.",
  commonMistake: "Task Manager does not maintain historical system logs.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q018",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Task Scheduler",
  question: "Which Windows utility allows programs or scripts to run automatically at scheduled times?",
  choices: [
    "Task Scheduler",
    "Task Manager",
    "Disk Management",
    "Resource Monitor"
  ],
  answer: "Task Scheduler",
  explanation: "Task Scheduler automates recurring tasks and maintenance jobs.",
  examTip: "Automatic jobs = Task Scheduler.",
  memoryTrick: "Schedule tasks ahead of time.",
  commonMistake: "Task Manager monitors running programs instead.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q019",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Recovery",
  question: "Which recovery option reinstalls Windows while allowing the user to keep personal files?",
  choices: [
    "Reset this PC (Keep my files)",
    "Format drive",
    "Secure erase",
    "Disk Cleanup"
  ],
  answer: "Reset this PC (Keep my files)",
  explanation: "This recovery option reinstalls Windows while preserving user documents.",
  examTip: "Need Windows repaired without deleting personal files? Use Keep my files.",
  memoryTrick: "Reset Windows, keep documents.",
  commonMistake: "Formatting removes user data.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q020",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "File Permissions",
  question: "What is the primary purpose of NTFS permissions?",
  choices: [
    "Control access to files and folders",
    "Increase internet speed",
    "Improve CPU performance",
    "Install Windows updates"
  ],
  answer: "Control access to files and folders",
  explanation: "NTFS permissions determine which users and groups can access, modify, or delete files and folders.",
  examTip: "Permissions = security.",
  memoryTrick: "NTFS protects files.",
  commonMistake: "Sharing permissions and NTFS permissions are separate concepts.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
}
,
{
  id: "C2-OS-Q021",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Device Manager",
  question: "Which Windows utility is used to view and manage installed hardware devices and drivers?",
  choices: [
    "Device Manager",
    "Task Manager",
    "Disk Cleanup",
    "Services"
  ],
  answer: "Device Manager",
  explanation: "Device Manager displays installed hardware, driver status, and hardware errors.",
  examTip: "Hardware problems? Open Device Manager.",
  memoryTrick: "Devices live in Device Manager.",
  commonMistake: "Task Manager monitors processes, not hardware.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q022",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "CHKDSK",
  question: "Which Windows command checks a disk for file system errors?",
  choices: [
    "chkdsk",
    "ipconfig",
    "ping",
    "nslookup"
  ],
  answer: "chkdsk",
  explanation: "CHKDSK scans storage devices for file system errors and can repair certain problems.",
  examTip: "Disk errors = CHKDSK.",
  memoryTrick: "Check Disk = CHKDSK.",
  commonMistake: "SFC repairs Windows system files, not disk structures.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q023",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Easy",
  topic: "Hostname",
  question: "Which command displays the computer's hostname?",
  choices: [
    "hostname",
    "whoami",
    "dir",
    "tree"
  ],
  answer: "hostname",
  explanation: "The hostname command displays the name assigned to the computer.",
  examTip: "Need the computer name? Use hostname.",
  memoryTrick: "Host name = hostname.",
  commonMistake: "whoami displays the logged-in user instead.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q024",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Whoami",
  question: "Which Windows command displays the currently logged-in user account?",
  choices: [
    "whoami",
    "hostname",
    "ipconfig",
    "dir"
  ],
  answer: "whoami",
  explanation: "The whoami command displays the current user account.",
  examTip: "Current user = whoami.",
  memoryTrick: "Who am I?",
  commonMistake: "Hostname identifies the computer, not the user.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
},

{
  id: "C2-OS-Q025",
  core: "Core 2",
  domain: "Operating Systems",
  difficulty: "Medium",
  topic: "Permissions",
  question: "Which NTFS permission allows a user to modify a file but not change its ownership or permissions?",
  choices: [
    "Modify",
    "Full Control",
    "Read",
    "List Folder Contents"
  ],
  answer: "Modify",
  explanation: "The Modify permission allows reading, writing, and deleting files without granting full administrative control.",
  examTip: "Modify ≠ Full Control.",
  memoryTrick: "Modify means edit, not own.",
  commonMistake: "Full Control also allows changing permissions and ownership.",
  references: ["CompTIA A+ Core 2 Operating Systems"]
}];