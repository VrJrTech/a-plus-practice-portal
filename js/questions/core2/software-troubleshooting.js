const softwareTroubleshootingQuestions = [
  {
    id: "C2-SW-Q001",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Easy",
    topic: "Blue Screen",
    question: "A Windows computer repeatedly displays a Blue Screen of Death (BSOD). What should a technician investigate FIRST?",
    choices: [
      "Recent hardware or driver changes",
      "Replace the monitor",
      "Replace the keyboard",
      "Reconnect the printer"
    ],
    answer: "Recent hardware or driver changes",
    explanation: "BSODs are often caused by faulty drivers, RAM, or recently installed hardware.",
    examTip: "Think about what changed recently.",
    memoryTrick: "Recent change = first suspect.",
    commonMistake: "Don't reinstall Windows before checking drivers.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q002",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Easy",
    topic: "Application Crash",
    question: "A single application crashes every time it opens, but the rest of Windows works normally. What should be tried FIRST?",
    choices: [
      "Reinstall the application",
      "Replace the SSD",
      "Replace the motherboard",
      "Reset the BIOS"
    ],
    answer: "Reinstall the application",
    explanation: "If only one application is affected, begin by repairing or reinstalling that application.",
    examTip: "One app = troubleshoot one app.",
    memoryTrick: "Only one broken? Fix only one.",
    commonMistake: "Don't reinstall Windows for a single application issue.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q003",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Medium",
    topic: "Slow Startup",
    question: "A Windows PC takes much longer than usual to boot. Which tool should be checked FIRST?",
    choices: [
      "Task Manager Startup tab",
      "Disk Cleanup",
      "Paint",
      "Calculator"
    ],
    answer: "Task Manager Startup tab",
    explanation: "The Startup tab shows programs that automatically launch when Windows starts.",
    examTip: "Slow boot? Check startup apps.",
    memoryTrick: "Startup tab = startup problems.",
    commonMistake: "Don't assume hardware failure first.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q004",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Medium",
    topic: "Malware",
    question: "A browser constantly redirects to unfamiliar websites. What is the MOST likely cause?",
    choices: [
      "Malware infection",
      "Faulty RAM",
      "Bad monitor",
      "Loose Ethernet cable"
    ],
    answer: "Malware infection",
    explanation: "Unexpected redirects commonly indicate malware or browser hijacking.",
    examTip: "Random redirects = suspect malware.",
    memoryTrick: "Wrong websites? Wrong software.",
    commonMistake: "Don't replace networking equipment first.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q005",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Easy",
    topic: "Updates",
    question: "Why should operating systems and applications be updated regularly?",
    choices: [
      "To improve security and fix bugs",
      "To increase RAM",
      "To improve monitor resolution",
      "To replace the CPU"
    ],
    answer: "To improve security and fix bugs",
    explanation: "Updates frequently patch vulnerabilities and improve stability.",
    examTip: "Updates = security.",
    memoryTrick: "Patch early. Patch often.",
    commonMistake: "Updates don't physically upgrade hardware.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q006",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Medium",
    topic: "Safe Mode",
    question: "A PC works correctly in Safe Mode but crashes during a normal boot. What is the MOST likely cause?",
    choices: [
      "A driver or startup program",
      "Broken monitor",
      "Dead CMOS battery",
      "Loose keyboard"
    ],
    answer: "A driver or startup program",
    explanation: "Safe Mode loads only essential drivers and services.",
    examTip: "Works in Safe Mode? Think drivers.",
    memoryTrick: "Safe Mode strips Windows down.",
    commonMistake: "Don't immediately replace hardware.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q007",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Easy",
    topic: "Browser Cache",
    question: "Clearing a browser's cache is MOST likely to resolve which issue?",
    choices: [
      "Website display problems",
      "Failed power supply",
      "Broken keyboard",
      "Bad RAM"
    ],
    answer: "Website display problems",
    explanation: "Corrupted cached files can cause pages to load incorrectly.",
    examTip: "Browser issue? Clear cache.",
    memoryTrick: "Old files = old problems.",
    commonMistake: "Cache doesn't fix hardware.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q008",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Medium",
    topic: "System Restore",
    question: "When is System Restore most useful?",
    choices: [
      "After a bad driver or software installation",
      "Replacing a CPU",
      "Adding RAM",
      "Replacing a monitor"
    ],
    answer: "After a bad driver or software installation",
    explanation: "System Restore can revert Windows settings to a previous restore point.",
    examTip: "Restore after bad changes.",
    memoryTrick: "Undo yesterday.",
    commonMistake: "System Restore is not a backup.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q009",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Medium",
    topic: "Performance",
    question: "A computer's disk usage stays at 100% even while idle. Which utility should be checked FIRST?",
    choices: [
      "Task Manager",
      "Paint",
      "Notepad",
      "Registry Editor"
    ],
    answer: "Task Manager",
    explanation: "Task Manager can identify which process is consuming excessive disk resources.",
    examTip: "High resource usage = Task Manager.",
    memoryTrick: "Manage tasks before replacing parts.",
    commonMistake: "Don't assume the drive is failing immediately.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },

  {
    id: "C2-SW-Q010",
    core: "Core 2",
    domain: "Software Troubleshooting",
    difficulty: "Easy",
    topic: "Troubleshooting",
    question: "Before making major software changes, what should a technician do?",
    choices: [
      "Create a backup",
      "Replace the motherboard",
      "Delete Windows",
      "Format every drive"
    ],
    answer: "Create a backup",
    explanation: "Always protect user data before performing significant software repairs.",
    examTip: "Backup first.",
    memoryTrick: "No backup. No bravery.",
    commonMistake: "Never risk user data unnecessarily.",
    references: ["CompTIA A+ Core 2 Software Troubleshooting"]
  },
  ,
{
  id: "C2-SW-Q011",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "High CPU Usage",
  question: "A computer is running very slowly because one process is using 99% of the CPU. Which Windows utility should a technician use to identify the process?",
  choices: [
    "Task Manager",
    "Device Manager",
    "Disk Cleanup",
    "Control Panel"
  ],
  answer: "Task Manager",
  explanation: "Task Manager displays CPU utilization by running processes.",
  examTip: "High CPU? Open Task Manager first.",
  memoryTrick: "Tasks use CPU.",
  commonMistake: "Device Manager is for hardware devices, not running applications.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q012",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Easy",
  topic: "Application Compatibility",
  question: "An older application no longer works after upgrading Windows. Which feature should be tried FIRST?",
  choices: [
    "Compatibility Mode",
    "Disk Cleanup",
    "Reset this PC",
    "BIOS Update"
  ],
  answer: "Compatibility Mode",
  explanation: "Compatibility Mode allows older software to run using settings from previous Windows versions.",
  examTip: "Old software? Try Compatibility Mode.",
  memoryTrick: "Compatible with the past.",
  commonMistake: "Don't reinstall Windows before testing compatibility settings.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q013",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Driver Issues",
  question: "A newly installed printer no longer functions after a driver update. What should be attempted FIRST?",
  choices: [
    "Roll back the driver",
    "Replace the printer",
    "Replace the motherboard",
    "Reinstall Windows"
  ],
  answer: "Roll back the driver",
  explanation: "Rolling back restores the previous working driver version.",
  examTip: "New driver broke it? Roll it back.",
  memoryTrick: "Bad update? Go backward.",
  commonMistake: "Don't replace hardware before testing the previous driver.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q014",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Disk Space",
  question: "Windows displays a 'Low Disk Space' warning. Which action should be taken FIRST?",
  choices: [
    "Run Disk Cleanup",
    "Replace the SSD",
    "Update BIOS",
    "Reset Windows"
  ],
  answer: "Run Disk Cleanup",
  explanation: "Disk Cleanup removes temporary files and other unnecessary data.",
  examTip: "Low disk? Clean before replacing.",
  memoryTrick: "Cleanup first.",
  commonMistake: "Don't assume the drive is failing.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q015",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Easy",
  topic: "Frozen Application",
  question: "A program stops responding. What is the BEST first action?",
  choices: [
    "End the task in Task Manager",
    "Replace the RAM",
    "Reset BIOS",
    "Replace Windows"
  ],
  answer: "End the task in Task Manager",
  explanation: "Ending the frozen application allows it to be restarted.",
  examTip: "Frozen app? End task.",
  memoryTrick: "Task Manager manages stuck tasks.",
  commonMistake: "Don't immediately reboot the entire PC.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q016",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Startup Programs",
  question: "Too many applications launch automatically during startup. What is the BEST solution?",
  choices: [
    "Disable unnecessary startup programs",
    "Replace RAM",
    "Replace SSD",
    "Install Linux"
  ],
  answer: "Disable unnecessary startup programs",
  explanation: "Reducing startup applications improves boot performance.",
  examTip: "Slow startup? Check Startup apps.",
  memoryTrick: "Less starts = faster starts.",
  commonMistake: "Don't disable critical system services.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q017",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Browser Issues",
  question: "A browser homepage keeps changing without the user's permission. What is the MOST likely cause?",
  choices: [
    "Browser hijacker",
    "Bad RAM",
    "Loose cable",
    "Dead battery"
  ],
  answer: "Browser hijacker",
  explanation: "Browser hijackers modify browser settings without user approval.",
  examTip: "Homepage changes = browser hijacker.",
  memoryTrick: "Someone hijacked your browser.",
  commonMistake: "Don't blame the browser itself first.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q018",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Windows Updates",
  question: "A Windows update repeatedly fails to install. Which built-in troubleshooter may help?",
  choices: [
    "Windows Update Troubleshooter",
    "Disk Cleanup",
    "Paint",
    "Registry Editor"
  ],
  answer: "Windows Update Troubleshooter",
  explanation: "Windows includes a troubleshooter specifically for update problems.",
  examTip: "Update problems? Use the Update Troubleshooter.",
  memoryTrick: "Updates fix updates.",
  commonMistake: "Don't reinstall Windows first.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q019",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Recovery",
  question: "A technician wants to repair corrupted Windows system files without reinstalling Windows. Which command should be used?",
  choices: [
    "sfc /scannow",
    "ping",
    "dir",
    "tree"
  ],
  answer: "sfc /scannow",
  explanation: "System File Checker scans and repairs protected Windows system files.",
  examTip: "Corrupt system files? Think SFC.",
  memoryTrick: "System File Checker.",
  commonMistake: "SFC repairs Windows files—not user documents.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q020",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Troubleshooting Process",
  question: "After solving a software issue, what should a technician do LAST?",
  choices: [
    "Document the resolution",
    "Restart Windows again",
    "Replace the hard drive",
    "Delete temporary files"
  ],
  answer: "Document the resolution",
  explanation: "Documenting the solution completes the CompTIA troubleshooting methodology.",
  examTip: "Always document your work.",
  memoryTrick: "Fix. Verify. Document.",
  commonMistake: "Don't close a ticket without documentation.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
}
,
{
  id: "C2-SW-Q021",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Memory Usage",
  question: "A computer becomes very slow when several applications are open at the same time. Which hardware upgrade is MOST likely to improve performance?",
  choices: [
    "Increase the amount of RAM",
    "Replace the monitor",
    "Install a new keyboard",
    "Replace the network cable"
  ],
  answer: "Increase the amount of RAM",
  explanation: "When multiple applications are competing for memory, adding RAM can significantly improve performance.",
  examTip: "Slow with many apps? Think RAM.",
  memoryTrick: "More memory = more multitasking.",
  commonMistake: "Don't blame the CPU before checking memory usage.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q022",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Easy",
  topic: "Task Manager",
  question: "Which Windows utility can be used to force a frozen application to close?",
  choices: [
    "Task Manager",
    "Registry Editor",
    "Disk Management",
    "System Configuration"
  ],
  answer: "Task Manager",
  explanation: "Task Manager allows technicians to end unresponsive applications and monitor system resources.",
  examTip: "Frozen program? Open Task Manager.",
  memoryTrick: "Manage the stuck task.",
  commonMistake: "Rebooting should not always be the first option.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q023",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Disk Space",
  question: "A Windows computer displays 'Low Disk Space' messages even though no large files were recently added. Which action should be performed FIRST?",
  choices: [
    "Run Disk Cleanup",
    "Replace the motherboard",
    "Reset the BIOS",
    "Replace the monitor"
  ],
  answer: "Run Disk Cleanup",
  explanation: "Temporary files, update caches, and recycle bin contents often consume significant storage space.",
  examTip: "Low storage? Clean before replacing.",
  memoryTrick: "Cleanup first.",
  commonMistake: "Low disk space does not automatically mean the drive is failing.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q024",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Recovery",
  question: "Which Windows feature allows a technician to return system files and settings to an earlier working state without affecting personal documents?",
  choices: [
    "System Restore",
    "Disk Cleanup",
    "CHKDSK",
    "Task Scheduler"
  ],
  answer: "System Restore",
  explanation: "System Restore uses restore points to recover system files and configuration after software or driver issues.",
  examTip: "Bad update? Try System Restore.",
  memoryTrick: "Restore yesterday's Windows.",
  commonMistake: "System Restore is not a replacement for file backups.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
},

{
  id: "C2-SW-Q025",
  core: "Core 2",
  domain: "Software Troubleshooting",
  difficulty: "Medium",
  topic: "Troubleshooting Methodology",
  question: "According to the CompTIA troubleshooting process, what should a technician do after implementing a solution?",
  choices: [
    "Verify full system functionality and implement preventive measures if appropriate",
    "Immediately close the ticket",
    "Reinstall Windows",
    "Replace the storage drive"
  ],
  answer: "Verify full system functionality and implement preventive measures if appropriate",
  explanation: "CompTIA recommends verifying the solution, ensuring functionality is restored, implementing preventive measures when appropriate, and then documenting findings.",
  examTip: "Never assume a fix worked—verify it.",
  memoryTrick: "Fix → Verify → Prevent → Document.",
  commonMistake: "Closing the ticket before verifying the repair can leave unresolved issues.",
  references: ["CompTIA A+ Core 2 Software Troubleshooting"]
}];