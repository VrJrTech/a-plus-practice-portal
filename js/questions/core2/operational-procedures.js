const operationalProceduresQuestions = [
  {
    id: "C2-OP-Q001",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Easy",
    topic: "Safety",
    question: "Before opening a desktop computer to perform repairs, what should a technician do FIRST?",
    choices: [
      "Disconnect power",
      "Remove the RAM",
      "Update Windows",
      "Replace the CMOS battery"
    ],
    answer: "Disconnect power",
    explanation: "Always disconnect power before servicing hardware to reduce the risk of injury and equipment damage.",
    examTip: "Safety always comes first.",
    memoryTrick: "No power. No problem.",
    commonMistake: "Never work inside a powered computer unless specifically required and trained.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q002",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Easy",
    topic: "ESD",
    question: "Which device helps protect computer components from electrostatic discharge (ESD)?",
    choices: [
      "ESD wrist strap",
      "Phillips screwdriver",
      "Flashlight",
      "Cable tester"
    ],
    answer: "ESD wrist strap",
    explanation: "An ESD wrist strap safely grounds the technician and helps prevent static electricity from damaging sensitive components.",
    examTip: "Working inside a PC? Think ESD protection.",
    memoryTrick: "Strap before you swap.",
    commonMistake: "Touching the case alone is not a substitute for proper ESD protection.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q003",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Medium",
    topic: "Documentation",
    question: "Why is documenting completed work important?",
    choices: [
      "Creates a record for future troubleshooting",
      "Makes the computer faster",
      "Adds more storage",
      "Improves Wi-Fi speed"
    ],
    answer: "Creates a record for future troubleshooting",
    explanation: "Documentation helps future technicians understand what was changed and provides accountability.",
    examTip: "If you fix it, document it.",
    memoryTrick: "Good techs leave notes.",
    commonMistake: "Documentation isn't just paperwork—it saves time later.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q004",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Medium",
    topic: "Professionalism",
    question: "A frustrated customer begins yelling during a support call. What should the technician do?",
    choices: [
      "Remain calm and professional",
      "Hang up immediately",
      "Argue with the customer",
      "Ignore the problem"
    ],
    answer: "Remain calm and professional",
    explanation: "Professional communication helps resolve issues and maintains customer trust.",
    examTip: "Professionalism is always the correct approach.",
    memoryTrick: "Stay calm under pressure.",
    commonMistake: "Never match the customer's frustration.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q005",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Easy",
    topic: "Change Management",
    question: "Why should technicians notify users before restarting a production computer?",
    choices: [
      "To prevent unexpected loss of work",
      "To improve RAM performance",
      "To increase processor speed",
      "To update the BIOS automatically"
    ],
    answer: "To prevent unexpected loss of work",
    explanation: "Users may have unsaved work that would be lost during a restart.",
    examTip: "Communicate before making changes.",
    memoryTrick: "Warn before reboot.",
    commonMistake: "Never assume it's okay to restart immediately.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q006",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Medium",
    topic: "Backups",
    question: "Before replacing a user's hard drive, what should a technician do?",
    choices: [
      "Verify that important data has been backed up",
      "Replace the motherboard",
      "Install antivirus",
      "Format the drive immediately"
    ],
    answer: "Verify that important data has been backed up",
    explanation: "Protecting user data should always be the first priority before hardware replacement.",
    examTip: "Backup before repair.",
    memoryTrick: "Data first.",
    commonMistake: "Never assume backups already exist.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q007",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Easy",
    topic: "Privacy",
    question: "While repairing a customer's laptop, a technician notices personal photos. What is the appropriate action?",
    choices: [
      "Respect the customer's privacy and ignore them",
      "Browse through the files",
      "Copy the pictures",
      "Share them with coworkers"
    ],
    answer: "Respect the customer's privacy and ignore them",
    explanation: "Technicians must respect customer privacy and access only what is necessary to complete the repair.",
    examTip: "Respect privacy at all times.",
    memoryTrick: "Fix the computer, not the customer.",
    commonMistake: "Curiosity is never a valid reason to access personal files.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q008",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Medium",
    topic: "Tickets",
    question: "What is the primary purpose of a help desk ticketing system?",
    choices: [
      "Track incidents from start to finish",
      "Increase internet speed",
      "Manage printer toner",
      "Install operating systems"
    ],
    answer: "Track incidents from start to finish",
    explanation: "Ticketing systems organize requests, document progress, and improve accountability.",
    examTip: "Every issue should have a ticket.",
    memoryTrick: "No ticket, no history.",
    commonMistake: "Don't rely on memory to track support requests.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q009",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Medium",
    topic: "Environmental Safety",
    question: "Why should liquids be kept away from computer equipment?",
    choices: [
      "To prevent electrical damage",
      "To improve Wi-Fi",
      "To increase RAM",
      "To improve CPU speed"
    ],
    answer: "To prevent electrical damage",
    explanation: "Liquids can cause electrical shorts, corrosion, and permanent hardware damage.",
    examTip: "Food and drinks stay away from electronics.",
    memoryTrick: "Computers hate coffee.",
    commonMistake: "Even small spills can destroy components.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },

  {
    id: "C2-OP-Q010",
    core: "Core 2",
    domain: "Operational Procedures",
    difficulty: "Medium",
    topic: "Troubleshooting Methodology",
    question: "After implementing a solution, what should a technician do before closing the ticket?",
    choices: [
      "Verify full system functionality and confirm with the customer",
      "Leave immediately",
      "Reinstall Windows",
      "Replace the motherboard"
    ],
    answer: "Verify full system functionality and confirm with the customer",
    explanation: "CompTIA's troubleshooting methodology requires verifying functionality and confirming the customer agrees the issue is resolved.",
    examTip: "Verify before you close.",
    memoryTrick: "Fix → Verify → Document.",
    commonMistake: "Don't close tickets without confirming the problem is resolved.",
    references: ["CompTIA A+ Core 2 Operational Procedures"]
  },
  ,
{
  id: "C2-OP-Q011",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Easy",
  topic: "Change Management",
  question: "Why should technicians notify users before making major system changes?",
  choices: [
    "To prevent unexpected interruptions and data loss",
    "To increase CPU performance",
    "To improve Wi-Fi speed",
    "To update BIOS settings"
  ],
  answer: "To prevent unexpected interruptions and data loss",
  explanation: "Users should be informed so they can save their work before changes are made.",
  examTip: "Communicate before making changes.",
  memoryTrick: "Warn before you work.",
  commonMistake: "Never reboot a user's computer without warning when possible.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q012",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Easy",
  topic: "Documentation",
  question: "Which document records the work performed during a support request?",
  choices: [
    "Ticket",
    "Invoice",
    "Resume",
    "Spreadsheet"
  ],
  answer: "Ticket",
  explanation: "Support tickets document the issue, troubleshooting steps, and final resolution.",
  examTip: "Every issue gets a ticket.",
  memoryTrick: "Ticket tells the story.",
  commonMistake: "Documentation protects both the technician and the organization.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q013",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Disposal",
  question: "Before disposing of an old hard drive, what should be done?",
  choices: [
    "Securely erase or destroy the data",
    "Throw it away",
    "Format it once",
    "Remove Windows"
  ],
  answer: "Securely erase or destroy the data",
  explanation: "Sensitive data should be securely erased or the drive physically destroyed before disposal.",
  examTip: "Protect data before disposal.",
  memoryTrick: "Erase before you replace.",
  commonMistake: "Formatting alone may not securely remove data.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q014",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Environmental Controls",
  question: "Which device helps protect computers from sudden power outages?",
  choices: [
    "UPS",
    "Hub",
    "Switch",
    "Patch Panel"
  ],
  answer: "UPS",
  explanation: "An Uninterruptible Power Supply provides temporary battery power during outages.",
  examTip: "Power outage = UPS.",
  memoryTrick: "UPS keeps systems Up.",
  commonMistake: "A surge protector alone does not provide battery backup.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q015",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Easy",
  topic: "Safety",
  question: "What type of fire extinguisher should be used around energized electrical equipment?",
  choices: [
    "Class C",
    "Class A",
    "Class K",
    "Water"
  ],
  answer: "Class C",
  explanation: "Class C fire extinguishers are designed for energized electrical fires.",
  examTip: "Electrical fire = Class C.",
  memoryTrick: "C for Current.",
  commonMistake: "Never use water on energized electrical equipment.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q016",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Professionalism",
  question: "If a technician does not know the answer to a customer's question, what is the BEST response?",
  choices: [
    "Be honest and research the answer",
    "Guess",
    "Ignore the customer",
    "Blame another department"
  ],
  answer: "Be honest and research the answer",
  explanation: "Professional technicians admit when they don't know something and follow up with accurate information.",
  examTip: "Honesty builds trust.",
  memoryTrick: "Don't guess. Verify.",
  commonMistake: "Giving incorrect information can damage credibility.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q017",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Backup Verification",
  question: "After creating a backup, what should a technician do?",
  choices: [
    "Verify the backup completed successfully",
    "Delete the backup",
    "Restart Windows",
    "Format the drive"
  ],
  answer: "Verify the backup completed successfully",
  explanation: "A backup is only useful if it can be successfully restored.",
  examTip: "Always verify backups.",
  memoryTrick: "Trust—but verify.",
  commonMistake: "Don't assume every backup completed correctly.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q018",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Easy",
  topic: "Cable Management",
  question: "Good cable management primarily helps with:",
  choices: [
    "Safety and easier maintenance",
    "CPU performance",
    "Internet speed",
    "RAM capacity"
  ],
  answer: "Safety and easier maintenance",
  explanation: "Organized cables improve airflow, reduce hazards, and simplify troubleshooting.",
  examTip: "Neat cables save time.",
  memoryTrick: "Clean cables. Clean work.",
  commonMistake: "Cable management doesn't increase CPU speed.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q019",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Escalation",
  question: "A technician has exhausted all documented troubleshooting steps without resolving an issue. What should happen next?",
  choices: [
    "Escalate the ticket",
    "Close the ticket",
    "Reinstall Windows immediately",
    "Ignore the issue"
  ],
  answer: "Escalate the ticket",
  explanation: "Escalating unresolved issues ensures they reach technicians with the appropriate expertise.",
  examTip: "Know when to escalate.",
  memoryTrick: "Don't get stuck—step up.",
  commonMistake: "Never close an unresolved ticket.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q020",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Troubleshooting Methodology",
  question: "According to the CompTIA troubleshooting process, what should occur after verifying full system functionality?",
  choices: [
    "Document findings, actions, and outcomes",
    "Replace hardware",
    "Reboot the computer again",
    "Delete the ticket"
  ],
  answer: "Document findings, actions, and outcomes",
  explanation: "Documentation is the final step of the CompTIA troubleshooting methodology.",
  examTip: "Verify...then document.",
  memoryTrick: "Fix → Verify → Document.",
  commonMistake: "Never skip documentation.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
}
,
{
  id: "C2-OP-Q011",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Change Management",
  question: "Before installing a major software update on production computers, what should a technician do FIRST?",
  choices: [
    "Create a rollback plan and obtain approval",
    "Install the update immediately",
    "Delete all user profiles",
    "Disable every security control"
  ],
  answer: "Create a rollback plan and obtain approval",
  explanation: "Formal change management requires planning, approval, risk evaluation, scheduling, and a way to reverse the change if problems occur.",
  examTip: "Major production change = approval plus rollback plan.",
  memoryTrick: "Plan it, approve it, then change it.",
  commonMistake: "A successful lab test does not eliminate the need for production approval.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q012",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Change Management",
  question: "A software deployment causes unexpected failures across several computers. Which action should the technician take?",
  choices: [
    "Follow the rollback plan",
    "Continue deploying it",
    "Delete the support tickets",
    "Ignore the failures"
  ],
  answer: "Follow the rollback plan",
  explanation: "A rollback plan restores systems to their previous working state when a change causes unacceptable problems.",
  examTip: "Failed change = rollback.",
  memoryTrick: "Bad rollout? Roll it back.",
  commonMistake: "Do not continue deploying a change that is causing widespread failures.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q013",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Chain of Custody",
  question: "A technician collects a laptop that may contain evidence of employee misconduct. Which document should track everyone who handles the device?",
  choices: [
    "Chain-of-custody form",
    "Acceptable use policy",
    "Service-level agreement",
    "Software license"
  ],
  answer: "Chain-of-custody form",
  explanation: "Chain-of-custody documentation records who collected, transported, stored, and accessed potential evidence.",
  examTip: "Evidence handling history = chain of custody.",
  memoryTrick: "Follow the chain of hands.",
  commonMistake: "A normal help desk ticket may not provide the strict evidence tracking required.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q014",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Incident Response",
  question: "A technician discovers illegal content on a company computer. What should the technician do FIRST?",
  choices: [
    "Stop accessing the content and follow company reporting procedures",
    "Copy the files for personal review",
    "Delete everything immediately",
    "Post the discovery in a team chat"
  ],
  answer: "Stop accessing the content and follow company reporting procedures",
  explanation: "The technician should avoid unnecessary interaction, preserve potential evidence, and follow organizational and legal escalation procedures.",
  examTip: "Illegal content = stop, preserve, report.",
  memoryTrick: "Do not investigate beyond your role.",
  commonMistake: "Deleting or copying evidence can interfere with an investigation.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q015",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Easy",
  topic: "Software Licensing",
  question: "A company owns one license for an application. What must be verified before installing it on several computers?",
  choices: [
    "The software license terms",
    "The monitor resolution",
    "The DHCP lease time",
    "The CPU temperature"
  ],
  answer: "The software license terms",
  explanation: "Software licenses define how many devices or users may legally use the application.",
  examTip: "Before copying software, check the license.",
  memoryTrick: "One purchase does not always mean unlimited installs.",
  commonMistake: "Technical ability to install software does not provide legal permission.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q016",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Acceptable Use Policy",
  question: "Which document explains how employees are permitted to use company computers, networks, and internet access?",
  choices: [
    "Acceptable use policy",
    "Chain-of-custody form",
    "Inventory sheet",
    "Purchase order"
  ],
  answer: "Acceptable use policy",
  explanation: "An acceptable use policy defines permitted and prohibited behavior when using organizational technology.",
  examTip: "Rules for using company technology = AUP.",
  memoryTrick: "AUP explains acceptable use.",
  commonMistake: "A privacy policy and an acceptable use policy serve different purposes.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q017",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "SLA",
  question: "Which document defines expected response and resolution times for technical support?",
  choices: [
    "Service-level agreement",
    "End-user license agreement",
    "Chain-of-custody form",
    "Acceptable use policy"
  ],
  answer: "Service-level agreement",
  explanation: "A service-level agreement defines measurable service expectations such as response time, availability, and resolution targets.",
  examTip: "Support performance expectations = SLA.",
  memoryTrick: "SLA sets the service level.",
  commonMistake: "An EULA governs software use rather than support response times.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q018",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Easy",
  topic: "Safety Data Sheets",
  question: "Where should a technician look for handling and disposal instructions for a hazardous cleaning chemical?",
  choices: [
    "Safety Data Sheet",
    "Device Manager",
    "Event Viewer",
    "Network diagram"
  ],
  answer: "Safety Data Sheet",
  explanation: "A Safety Data Sheet provides hazard, handling, storage, protective equipment, and disposal information for chemicals.",
  examTip: "Chemical safety information = SDS.",
  memoryTrick: "SDS = Safety Details for Substances.",
  commonMistake: "Do not guess how hazardous materials should be handled.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q019",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Battery Disposal",
  question: "What is the BEST way to dispose of a swollen lithium-ion laptop battery?",
  choices: [
    "Use an approved hazardous-material or battery recycling process",
    "Place it in regular trash",
    "Puncture it before disposal",
    "Store it next to a heat source"
  ],
  answer: "Use an approved hazardous-material or battery recycling process",
  explanation: "Damaged lithium-ion batteries can ignite and must be handled through approved recycling or hazardous-waste procedures.",
  examTip: "Swollen battery = stop using it and follow approved disposal procedures.",
  memoryTrick: "Swollen means unsafe.",
  commonMistake: "Never puncture, crush, or place a swollen battery in ordinary trash.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q020",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Easy",
  topic: "Lifting Safety",
  question: "What is the safest technique for lifting a heavy printer?",
  choices: [
    "Lift with the legs and ask for help when necessary",
    "Bend at the waist and pull quickly",
    "Twist while lifting",
    "Hold it away from the body"
  ],
  answer: "Lift with the legs and ask for help when necessary",
  explanation: "Safe lifting involves keeping the load close, bending the knees, lifting with the legs, and using assistance for heavy equipment.",
  examTip: "Heavy equipment = proper lifting technique and assistance.",
  memoryTrick: "Legs lift; backs do not.",
  commonMistake: "Twisting or lifting primarily with the back increases injury risk.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q021",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Electrical Safety",
  question: "Which device should a technician avoid opening because it may retain a dangerous electrical charge even after being unplugged?",
  choices: [
    "Power supply unit",
    "Keyboard",
    "USB flash drive",
    "Ethernet patch cable"
  ],
  answer: "Power supply unit",
  explanation: "Power supplies contain capacitors that may retain dangerous electrical charges after power is disconnected.",
  examTip: "Do not open or repair a PSU unless specifically qualified.",
  memoryTrick: "Unplugged does not always mean discharged.",
  commonMistake: "Replacing a PSU is generally safer than opening and repairing it.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q022",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Electrostatic Discharge",
  question: "Where should an antistatic wrist strap be connected while servicing a desktop computer?",
  choices: [
    "To an appropriate grounded point or unpainted metal chassis",
    "To a painted plastic surface",
    "To the monitor screen",
    "To an Ethernet cable"
  ],
  answer: "To an appropriate grounded point or unpainted metal chassis",
  explanation: "The strap must connect to a suitable ground so static electricity can safely equalize.",
  examTip: "ESD strap needs a proper ground.",
  memoryTrick: "Bare metal grounds better than paint.",
  commonMistake: "Painted or plastic surfaces may not provide electrical continuity.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q023",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Ticket Documentation",
  question: "Which information should be included when closing a support ticket?",
  choices: [
    "The problem, actions taken, solution, and user confirmation",
    "Only the technician's name",
    "Only the device serial number",
    "The technician's personal opinion of the user"
  ],
  answer: "The problem, actions taken, solution, and user confirmation",
  explanation: "Complete ticket documentation records the issue, troubleshooting steps, resolution, verification, and relevant communication.",
  examTip: "A closed ticket should tell the full support story.",
  memoryTrick: "Problem, process, proof, and closure.",
  commonMistake: "A vague note such as 'fixed' does not provide useful documentation.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q024",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Professional Communication",
  question: "A technician is running late for an appointment with a customer. What should the technician do?",
  choices: [
    "Contact the customer and provide an updated arrival time",
    "Arrive late without explanation",
    "Cancel the ticket without notice",
    "Blame another technician"
  ],
  answer: "Contact the customer and provide an updated arrival time",
  explanation: "Clear, timely communication helps set expectations and demonstrates professionalism.",
  examTip: "Delays should be communicated promptly.",
  memoryTrick: "Late? Communicate.",
  commonMistake: "Avoiding the customer makes the service experience worse.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
},

{
  id: "C2-OP-Q025",
  core: "Core 2",
  domain: "Operational Procedures",
  difficulty: "Medium",
  topic: "Data Backup",
  question: "Before performing a repair that could affect user data, what should a technician verify?",
  choices: [
    "A usable backup exists and can be restored",
    "The desktop wallpaper is saved",
    "The printer is powered off",
    "The monitor uses HDMI"
  ],
  answer: "A usable backup exists and can be restored",
  explanation: "A backup must not only exist; it should also be verified so the data can be recovered if the repair fails.",
  examTip: "Back up, then verify the backup.",
  memoryTrick: "A backup is only real when it restores.",
  commonMistake: "Never assume an untested backup is usable.",
  references: ["CompTIA A+ Core 2 Operational Procedures"]
}];