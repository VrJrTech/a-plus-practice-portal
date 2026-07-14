const hardwareNetworkTroubleshootingQuestions = [
  {
    id: "C1-TRB-Q001",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Easy",
    topic: "No Power",
    question: "A desktop does not power on and no lights or fans activate. What should the technician check FIRST?",
    choices: [
      "Power cable and wall outlet",
      "Operating system updates",
      "Display resolution",
      "Printer drivers"
    ],
    answer: "Power cable and wall outlet",
    explanation: "The technician should begin with the simplest physical power checks before opening the computer or replacing components.",
    examTip: "Always check the obvious and least invasive cause first.",
    memoryTrick: "No power? Start at the wall.",
    commonMistake: "Do not replace the power supply before confirming that the outlet and cable work.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q002",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "POST",
    question: "A computer powers on but produces several beep codes and displays no image. What do the beep codes MOST likely indicate?",
    choices: [
      "A hardware problem detected during POST",
      "A successful operating system update",
      "A DNS configuration issue",
      "A printer communication error"
    ],
    answer: "A hardware problem detected during POST",
    explanation: "Beep codes are generated during the Power-On Self-Test and commonly indicate hardware faults such as memory, video, or motherboard problems.",
    examTip: "Beep codes before the OS loads point to POST hardware diagnostics.",
    memoryTrick: "POST beeps speak hardware.",
    commonMistake: "Do not troubleshoot Windows when the failure occurs before the operating system loads.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q003",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "RAM",
    question: "A technician installs new RAM, but the computer repeatedly restarts and fails to boot. What should be checked FIRST?",
    choices: [
      "RAM seating and compatibility",
      "DNS settings",
      "Monitor brightness",
      "Printer toner"
    ],
    answer: "RAM seating and compatibility",
    explanation: "Improperly seated or incompatible memory can prevent POST, cause restart loops, or produce memory errors.",
    examTip: "Problems immediately after an upgrade usually point to the newly installed component.",
    memoryTrick: "New RAM problem? Reseat and recheck.",
    commonMistake: "Do not assume the motherboard failed before verifying the new RAM.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q004",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "Overheating",
    question: "A gaming computer shuts down after several minutes of heavy use. Which issue is MOST likely?",
    choices: [
      "Overheating",
      "Incorrect DNS server",
      "Expired DHCP lease",
      "Low printer ink"
    ],
    answer: "Overheating",
    explanation: "Shutdowns during heavy workloads commonly occur when the CPU or GPU exceeds safe temperature limits.",
    examTip: "Failure under load often points to heat or power.",
    memoryTrick: "Works cold, fails hot.",
    commonMistake: "Do not focus on networking when the entire computer powers off under load.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q005",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "Storage",
    question: "A hard drive makes repeated clicking noises and files are becoming corrupted. What should be done FIRST?",
    choices: [
      "Back up important data",
      "Defragment the drive",
      "Change the desktop wallpaper",
      "Update the monitor driver"
    ],
    answer: "Back up important data",
    explanation: "Clicking and data corruption can indicate imminent mechanical drive failure. Important data should be protected before further testing.",
    examTip: "Signs of drive failure mean protect the data first.",
    memoryTrick: "Clicking drive? Copy before it dies.",
    commonMistake: "Running intensive repair tools first may place additional stress on a failing drive.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q006",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "Display",
    question: "A desktop powers on normally, but the monitor displays 'No Signal.' What should the technician check FIRST?",
    choices: [
      "Monitor input and video cable",
      "DHCP scope",
      "Email settings",
      "Printer queue"
    ],
    answer: "Monitor input and video cable",
    explanation: "The technician should confirm the monitor is powered on, set to the correct input, and securely connected to the correct video output.",
    examTip: "No display does not always mean no computer power.",
    memoryTrick: "No signal? Follow the video path.",
    commonMistake: "Do not replace the graphics card before checking the cable and input selection.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q007",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "APIPA",
    question: "A computer receives the address 169.254.42.8 and cannot access the internet. What is the MOST likely cause?",
    choices: [
      "The DHCP server could not be reached",
      "The DNS server successfully resolved the address",
      "The computer received a valid public IP address",
      "The default gateway is working correctly"
    ],
    answer: "The DHCP server could not be reached",
    explanation: "A 169.254.x.x APIPA address is assigned when a Windows client cannot obtain an IPv4 address from DHCP.",
    examTip: "169.254 means troubleshoot DHCP connectivity.",
    memoryTrick: "APIPA appears when DHCP disappears.",
    commonMistake: "Changing DNS will not correct the missing DHCP lease.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q008",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "DNS",
    question: "A user can successfully ping 8.8.8.8 but cannot open websites by name. Which service is MOST likely failing?",
    choices: [
      "DNS",
      "DHCP",
      "PoE",
      "Bluetooth"
    ],
    answer: "DNS",
    explanation: "Successful communication with an IP address confirms basic connectivity. Failure only when using names points to DNS resolution.",
    examTip: "IP works but names fail = DNS.",
    memoryTrick: "Numbers work, names do not.",
    commonMistake: "The internet connection is not completely down if direct IP communication works.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q009",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "Wi-Fi",
    question: "A laptop has a weak Wi-Fi signal only when it is several rooms away from the router. What is the MOST likely cause?",
    choices: [
      "Distance and physical interference",
      "Incorrect CPU socket",
      "Failed CMOS battery",
      "Low toner"
    ],
    answer: "Distance and physical interference",
    explanation: "Walls, distance, appliances, and building materials can weaken wireless signals.",
    examTip: "Wireless performance changes by location usually point to signal strength or interference.",
    memoryTrick: "More walls, fewer bars.",
    commonMistake: "Do not immediately replace the laptop wireless adapter when the issue only occurs far from the access point.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },

  {
    id: "C1-TRB-Q010",
    core: "Core 1",
    domain: "Hardware & Network Troubleshooting",
    difficulty: "Medium",
    topic: "Ethernet",
    question: "A workstation has no network connection and the Ethernet port shows no link light. What should be checked FIRST?",
    choices: [
      "Ethernet cable and switch port",
      "DNS cache",
      "Browser history",
      "Screen resolution"
    ],
    answer: "Ethernet cable and switch port",
    explanation: "No link light usually indicates a Layer 1 physical connectivity problem involving the cable, network adapter, or switch port.",
    examTip: "No link light = start with physical connections.",
    memoryTrick: "No light, check the wire.",
    commonMistake: "DNS problems do not normally remove the physical link light.",
    references: ["CompTIA A+ Core 1 Hardware and Network Troubleshooting"]
  },
  ,
{
  id: "C1-TRB-Q011",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Slow Computer",
  question: "A user reports that a computer has become significantly slower over the past several weeks. Which task should a technician perform FIRST?",
  choices: [
    "Open Task Manager and identify resource usage",
    "Replace the motherboard",
    "Replace the monitor",
    "Reinstall Windows immediately"
  ],
  answer: "Open Task Manager and identify resource usage",
  explanation: "Always gather information before replacing hardware. Task Manager can identify processes consuming CPU, memory, or disk resources.",
  examTip: "Investigate before replacing.",
  memoryTrick: "Observe first. Repair second.",
  commonMistake: "Jumping straight to reinstalling Windows.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q012",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Boot Failure",
  question: "A PC displays 'No Boot Device Found.' What should the technician verify FIRST?",
  choices: [
    "That the storage device is detected in BIOS/UEFI",
    "The printer queue",
    "The DNS server",
    "The browser cache"
  ],
  answer: "That the storage device is detected in BIOS/UEFI",
  explanation: "If the BIOS cannot detect the drive, the operating system cannot boot from it.",
  examTip: "No boot = check BIOS detection.",
  memoryTrick: "No drive. No boot.",
  commonMistake: "Assuming Windows is corrupt before checking hardware.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q013",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Printer",
  question: "A laser printer repeatedly produces faded pages. Which component should be checked FIRST?",
  choices: [
    "Toner cartridge",
    "Motherboard",
    "RAM",
    "Power Supply"
  ],
  answer: "Toner cartridge",
  explanation: "Low toner commonly causes faded printouts.",
  examTip: "Laser = Toner.",
  memoryTrick: "Light print? Low toner.",
  commonMistake: "Replacing the printer before checking consumables.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q014",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Wi-Fi",
  question: "A user can connect to Wi-Fi but cannot access websites. Other users are browsing normally. What should be checked FIRST?",
  choices: [
    "The user's IP configuration",
    "Replace the router",
    "Replace the access point",
    "Replace the NIC"
  ],
  answer: "The user's IP configuration",
  explanation: "The issue is isolated to one device, so begin with that device's network settings.",
  examTip: "One device = troubleshoot one device.",
  memoryTrick: "If everyone else works, start local.",
  commonMistake: "Replacing network equipment affecting everyone.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q015",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Network Cable",
  question: "What is the first troubleshooting step when an Ethernet connection suddenly stops working?",
  choices: [
    "Inspect the cable and link lights",
    "Replace Windows",
    "Replace the switch",
    "Reset the BIOS"
  ],
  answer: "Inspect the cable and link lights",
  explanation: "Always begin with the physical layer before moving to software.",
  examTip: "Layer 1 first.",
  memoryTrick: "No lights? Check the wire.",
  commonMistake: "Skipping physical inspection.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q016",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "CPU",
  question: "A computer immediately powers off after a few seconds every time it starts. Which hardware issue is MOST likely?",
  choices: [
    "CPU overheating",
    "Bad wallpaper",
    "Expired DHCP lease",
    "Wrong printer driver"
  ],
  answer: "CPU overheating",
  explanation: "Systems commonly shut down automatically to protect the processor from thermal damage.",
  examTip: "Instant shutdowns often indicate heat.",
  memoryTrick: "Too hot = power off.",
  commonMistake: "Confusing overheating with operating system issues.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q017",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Memory",
  question: "Which symptom commonly indicates failing RAM?",
  choices: [
    "Random blue screens",
    "Paper jams",
    "Weak Wi-Fi signal",
    "Monitor flickering"
  ],
  answer: "Random blue screens",
  explanation: "Faulty RAM commonly causes system instability and unexpected crashes.",
  examTip: "Random crashes? Think RAM.",
  memoryTrick: "Bad memory = bad stability.",
  commonMistake: "Assuming Windows itself is always the cause.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q018",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Fans",
  question: "Dust buildup inside a computer MOST commonly affects which component?",
  choices: [
    "Cooling fans",
    "Monitor",
    "Keyboard",
    "Ethernet cable"
  ],
  answer: "Cooling fans",
  explanation: "Dust restricts airflow and can reduce cooling efficiency.",
  examTip: "Dust = Heat.",
  memoryTrick: "Clean computers stay cool.",
  commonMistake: "Ignoring preventative maintenance.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q019",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "POST",
  question: "POST stands for:",
  choices: [
    "Power-On Self-Test",
    "Primary Operating System Test",
    "Power Output System Tool",
    "Peripheral Output Startup Test"
  ],
  answer: "Power-On Self-Test",
  explanation: "POST checks hardware before the operating system begins loading.",
  examTip: "POST happens before Windows.",
  memoryTrick: "Power On Self Test.",
  commonMistake: "Thinking POST is part of Windows.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q020",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Troubleshooting Methodology",
  question: "According to CompTIA troubleshooting methodology, what should a technician do AFTER identifying the problem?",
  choices: [
    "Establish a theory of probable cause",
    "Replace hardware immediately",
    "Close the ticket",
    "Document the solution"
  ],
  answer: "Establish a theory of probable cause",
  explanation: "CompTIA emphasizes following a structured troubleshooting process rather than jumping straight to replacement.",
  examTip: "Know the six troubleshooting steps.",
  memoryTrick: "Identify → Theory → Test → Plan → Verify → Document.",
  commonMistake: "Skipping directly to replacing parts.",
  references: ["CompTIA A+ Core 1"]
},
,
{
  id: "C1-TRB-Q021",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Internet",
  question: "A user can browse websites using IP addresses but not hostnames. Which service should be checked first?",
  choices: ["DNS", "DHCP", "SMTP", "FTP"],
  answer: "DNS",
  explanation: "If IP addresses work but names do not, DNS resolution is the likely issue.",
  examTip: "Names fail, numbers work = DNS.",
  memoryTrick: "DNS translates names into numbers.",
  commonMistake: "Don't blame the internet connection if IP addresses still work.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q022",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Monitor",
  question: "A monitor displays 'No Signal' even though the PC is powered on. What should be checked FIRST?",
  choices: [
    "Video cable and monitor input",
    "Replace the motherboard",
    "Update Windows",
    "Install printer drivers"
  ],
  answer: "Video cable and monitor input",
  explanation: "Verify the monitor is using the correct input and the cable is securely connected before troubleshooting internal hardware.",
  examTip: "Always check external connections first.",
  memoryTrick: "No Signal? Follow the cable.",
  commonMistake: "Replacing components before checking cables.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q023",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Blue Screen",
  question: "Random blue screen crashes after installing new RAM MOST likely indicate:",
  choices: [
    "Improperly seated or incompatible RAM",
    "Printer failure",
    "Monitor failure",
    "Bad DNS server"
  ],
  answer: "Improperly seated or incompatible RAM",
  explanation: "Memory problems commonly appear immediately after RAM upgrades.",
  examTip: "Recent hardware change? Start there.",
  memoryTrick: "New RAM? Check the RAM.",
  commonMistake: "Assuming Windows is corrupt first.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q024",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Wi-Fi",
  question: "Which issue MOST commonly causes intermittent wireless connectivity?",
  choices: [
    "Interference",
    "SSD failure",
    "CMOS battery",
    "Printer toner"
  ],
  answer: "Interference",
  explanation: "Microwaves, neighboring Wi-Fi networks, and physical barriers commonly interfere with wireless signals.",
  examTip: "Wireless issues often equal interference.",
  memoryTrick: "More interference, less internet.",
  commonMistake: "Replacing the router before checking the environment.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q025",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Ethernet",
  question: "A network cable tests bad. Which tool is used to repair the end of the cable after replacing the connector?",
  choices: [
    "Crimper",
    "Cable tester",
    "Punchdown tool",
    "Loopback plug"
  ],
  answer: "Crimper",
  explanation: "A crimper secures a new RJ45 connector onto an Ethernet cable.",
  examTip: "Crimp before you test.",
  memoryTrick: "Crimper crushes the connector.",
  commonMistake: "A cable tester verifies the cable but does not install connectors.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q026",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Printer",
  question: "A laser printer produces streaks down every page. Which component is MOST likely failing?",
  choices: [
    "Drum",
    "Power Supply",
    "CPU",
    "NIC"
  ],
  answer: "Drum",
  explanation: "A worn imaging drum commonly produces repeating streaks or marks on printed pages.",
  examTip: "Repeating streaks often point to the drum.",
  memoryTrick: "The drum paints the page.",
  commonMistake: "Replacing toner first when the pattern indicates drum wear.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q027",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Boot Order",
  question: "After installing a second SSD, a PC will not boot into Windows. What should be checked FIRST?",
  choices: [
    "Boot order in BIOS/UEFI",
    "Printer drivers",
    "DNS cache",
    "Browser history"
  ],
  answer: "Boot order in BIOS/UEFI",
  explanation: "Adding storage devices can change the detected boot device order.",
  examTip: "New drive? Check boot order.",
  memoryTrick: "Wrong first drive = no boot.",
  commonMistake: "Reinstalling Windows before checking BIOS.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q028",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Laptop Battery",
  question: "A laptop only powers on while connected to AC power. Which component is MOST likely faulty?",
  choices: [
    "Battery",
    "RAM",
    "CPU",
    "SSD"
  ],
  answer: "Battery",
  explanation: "If the laptop works on AC power but immediately shuts off when unplugged, the battery is the likely cause.",
  examTip: "Works plugged in only = battery.",
  memoryTrick: "No unplug, no battery.",
  commonMistake: "Replacing the charger before testing the battery.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q029",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Ping",
  question: "Which command is commonly used to verify basic network connectivity?",
  choices: [
    "ping",
    "copy",
    "format",
    "mkdir"
  ],
  answer: "ping",
  explanation: "The ping command tests communication with another network device using ICMP.",
  examTip: "Connectivity test = ping.",
  memoryTrick: "Ping before panic.",
  commonMistake: "DNS failures can still allow successful pings to IP addresses.",
  references: ["CompTIA A+ Core 1"]
},

{
  id: "C1-TRB-Q030",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Troubleshooting Methodology",
  question: "What is the FINAL step of the CompTIA troubleshooting process?",
  choices: [
    "Document findings and outcomes",
    "Replace hardware",
    "Restart the computer",
    "Identify the problem"
  ],
  answer: "Document findings and outcomes",
  explanation: "CompTIA's methodology ends by documenting findings, actions, and outcomes after confirming the solution.",
  examTip: "Always document your work.",
  memoryTrick: "Fix it. Verify it. Write it.",
  commonMistake: "Stopping after the repair without documenting it.",
  references: ["CompTIA A+ Core 1"]
}
];