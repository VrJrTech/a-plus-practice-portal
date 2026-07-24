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
},

{
  id: "C1-TRB-Q031",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Power Supply Under Load",
  question: "A desktop works during light use but abruptly restarts whenever a demanding game launches. Temperatures are normal. Which component should be tested NEXT?",
  choices: ["Power supply", "CMOS battery", "Wireless adapter", "Sound card"],
  answer: "Power supply",
  explanation: "A weak or undersized power supply may operate at low load but become unstable when the CPU and GPU demand more power.",
  examTip: "Failure under load can indicate either heat or insufficient power; normal temperatures make the PSU the stronger suspect.",
  memoryTrick: "More load needs more power.",
  commonMistake: "Do not assume every shutdown under load is caused by overheating.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q032",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "CPU Cooling",
  question: "A CPU runs unusually hot immediately after its cooler was replaced. The fan spins normally. What should the technician check FIRST?",
  choices: ["Cooler seating and thermal paste application", "DNS configuration", "SSD partition style", "Printer calibration"],
  answer: "Cooler seating and thermal paste application",
  explanation: "Poor cooler contact or incorrectly applied thermal compound prevents efficient heat transfer even when the fan is operating.",
  examTip: "A problem that begins after service usually points to the component or connection that was changed.",
  memoryTrick: "Fan spins but heat stays? Check the contact.",
  commonMistake: "Do not replace a spinning fan before verifying that the heatsink is mounted correctly.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q033",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Swollen Battery",
  question: "A laptop case is separating near the touchpad, and the touchpad is difficult to click. What should the technician do FIRST?",
  choices: ["Power down the laptop and remove it from service", "Press the case back together", "Run disk cleanup", "Update the touchpad sensitivity"],
  answer: "Power down the laptop and remove it from service",
  explanation: "Case separation near the touchpad can indicate a swollen lithium-ion battery, which is a safety hazard.",
  examTip: "Treat swelling, heat, smoke, or unusual battery odor as an immediate safety issue.",
  memoryTrick: "Battery bulge? Stop and unplug.",
  commonMistake: "Do not continue charging or apply pressure to a swollen battery.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q034",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Drive Health",
  question: "A computer intermittently freezes while opening files, and a drive-health utility reports increasing read errors. What is the BEST next action?",
  choices: ["Back up the data and replace the drive", "Increase monitor brightness", "Flush the DNS cache", "Replace the keyboard"],
  answer: "Back up the data and replace the drive",
  explanation: "Increasing storage read errors and freezes indicate a degrading drive. Protecting the data takes priority.",
  examTip: "When storage failure is likely, preserve data before performing stressful diagnostics.",
  memoryTrick: "Errors rising? Start backing up.",
  commonMistake: "Do not repeatedly benchmark a drive that may be failing.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q035",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Hard",
  topic: "RAID Degradation",
  question: "A RAID 1 management utility reports that the array is degraded, but the computer is still operating. What should the technician do?",
  choices: ["Replace the failed drive and rebuild the array", "Format both drives", "Disable the network adapter", "Clear the browser cache"],
  answer: "Replace the failed drive and rebuild the array",
  explanation: "RAID 1 can remain available after one drive fails, but redundancy is lost until the failed drive is replaced and the mirror is rebuilt.",
  examTip: "Degraded does not mean safe; the array has lost fault tolerance.",
  memoryTrick: "One mirror broke—replace and rebuild.",
  commonMistake: "Do not format the healthy member of a degraded mirror.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q036",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "USB Detection",
  question: "A USB device is not detected in one front-panel port but works in a rear USB port. What is the MOST likely cause?",
  choices: ["A faulty or disconnected front-panel USB connection", "A failed internet connection", "An incorrect default gateway", "A depleted CMOS battery"],
  answer: "A faulty or disconnected front-panel USB connection",
  explanation: "Because the device works in another port, the device and its driver are less likely to be the problem. The front port or its internal cable is the likely fault.",
  examTip: "Move a known-good device between ports to isolate the failing component.",
  memoryTrick: "Works in back, check the front jack.",
  commonMistake: "Do not replace a working USB device when only one port fails.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q037",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "USB Power",
  question: "An external USB hard drive repeatedly disconnects when connected through an unpowered hub but works directly from the computer. What is the BEST solution?",
  choices: ["Use a powered USB hub", "Change the DNS server", "Defragment the external drive", "Disable Bluetooth"],
  answer: "Use a powered USB hub",
  explanation: "The unpowered hub may not provide enough electrical power for the drive. A powered hub supplies additional current.",
  examTip: "Intermittent USB devices can be caused by insufficient bus power.",
  memoryTrick: "Hungry USB drive? Feed the hub.",
  commonMistake: "Do not treat a power-delivery problem as a file-system problem.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q038",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Laptop Backlight",
  question: "A laptop screen appears black, but a faint desktop image is visible when a flashlight is aimed at it. Which component is MOST likely failing?",
  choices: ["Display backlight", "Wireless antenna", "Storage drive", "Keyboard"],
  answer: "Display backlight",
  explanation: "A faint image shows that the LCD is producing video, but the backlight is not illuminating it.",
  examTip: "The flashlight test separates a backlight problem from a complete display-signal failure.",
  memoryTrick: "Faint picture means missing light.",
  commonMistake: "Do not assume the graphics adapter failed when a faint image is present.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q039",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Graphics Artifacts",
  question: "Colored blocks and distorted lines appear during 3D applications, but ordinary desktop use looks normal. What should be checked FIRST?",
  choices: ["GPU temperature and cooling", "DHCP lease duration", "Printer fuser", "Microphone level"],
  answer: "GPU temperature and cooling",
  explanation: "Visual artifacts under graphics load commonly result from GPU overheating or failing video memory.",
  examTip: "Artifacts that appear under graphical load point toward the GPU.",
  memoryTrick: "Broken pixels under load—check graphics heat.",
  commonMistake: "Do not troubleshoot the monitor first when the issue appears only during GPU-intensive work.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q040",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Projector Connection",
  question: "A conference-room projector loses its image whenever the video cable is moved. What is the MOST likely cause?",
  choices: ["A loose or damaged video cable", "An expired DHCP lease", "A full print queue", "Insufficient RAM"],
  answer: "A loose or damaged video cable",
  explanation: "A display failure that reacts directly to cable movement strongly indicates a physical connection problem.",
  examTip: "Changes caused by touching a cable usually point to the cable or connector.",
  memoryTrick: "Wiggle changes video? Follow the wire.",
  commonMistake: "Do not reinstall display software before checking the physical connection.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q041",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Laser Printer Ghosting",
  question: "A laser printer produces faint copies of previous images farther down each page. Which component is MOST likely responsible?",
  choices: ["Fuser assembly", "Pickup roller", "Paper tray", "Network card"],
  answer: "Fuser assembly",
  explanation: "Ghost images can occur when toner is not properly fused or the fuser retains an image from an earlier rotation.",
  examTip: "Ghosting points to the laser imaging or fusing process, not the paper tray.",
  memoryTrick: "Old images return like ghosts—check the fuser.",
  commonMistake: "Do not confuse ghosting with a failure to pick up paper.",
  references: ["CompTIA A+ Core 1 Printer Troubleshooting"]
},

{
  id: "C1-TRB-Q042",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Paper Pickup",
  question: "A printer attempts to print but repeatedly fails to pull paper from a full tray. Which component should be inspected FIRST?",
  choices: ["Pickup rollers", "Fuser", "Toner cartridge", "Network switch"],
  answer: "Pickup rollers",
  explanation: "Worn or dirty pickup rollers commonly prevent paper from feeding out of the tray.",
  examTip: "A feed problem begins where the printer grabs the paper.",
  memoryTrick: "No pickup? Check the pickup roller.",
  commonMistake: "The fuser affects toner bonding after the paper has already entered the printer.",
  references: ["CompTIA A+ Core 1 Printer Troubleshooting"]
},

{
  id: "C1-TRB-Q043",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Printer Driver",
  question: "A newly installed printer outputs pages filled with unreadable symbols. The printer completes its built-in test page correctly. What should be checked FIRST?",
  choices: ["The selected printer driver", "The pickup rollers", "The wall outlet voltage", "The user's DNS suffix"],
  answer: "The selected printer driver",
  explanation: "A good internal test page confirms the printer mechanism works. Garbled computer-generated output commonly indicates an incorrect driver or print language.",
  examTip: "If the printer's own test works, look at the computer, driver, or connection.",
  memoryTrick: "Test page clean, computer page strange—check the driver.",
  commonMistake: "Do not replace printer hardware that passes its internal test.",
  references: ["CompTIA A+ Core 1 Printer Troubleshooting"]
},

{
  id: "C1-TRB-Q044",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Inkjet Printhead",
  question: "An inkjet printer has full cartridges but produces pages with missing colors and horizontal gaps. What maintenance action should be performed FIRST?",
  choices: ["Run the printhead cleaning utility", "Replace the fuser", "Rebuild the RAID array", "Flush the DNS cache"],
  answer: "Run the printhead cleaning utility",
  explanation: "Clogged inkjet nozzles commonly cause missing colors or banding. The built-in cleaning cycle is the appropriate first step.",
  examTip: "Inkjet gaps and missing colors often mean clogged nozzles.",
  memoryTrick: "Missing ink lines? Clean the printhead.",
  commonMistake: "Inkjet printers do not use laser-printer fusers.",
  references: ["CompTIA A+ Core 1 Printer Troubleshooting"]
},

{
  id: "C1-TRB-Q045",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Print Spooler",
  question: "Several print jobs remain stuck in the queue even though the network printer is online and reachable. What should the technician try FIRST?",
  choices: ["Clear the queue and restart the print spooler", "Replace the printer drum", "Reset the wireless router", "Install additional RAM in the printer"],
  answer: "Clear the queue and restart the print spooler",
  explanation: "A stalled or corrupted print job can block the queue. Clearing it and restarting the spooler restores the software printing pipeline.",
  examTip: "Reachable printer plus stuck queue points to the spooler or a bad job.",
  memoryTrick: "Queue will not move? Restart the spool.",
  commonMistake: "Do not replace mechanical printer parts for a software queue problem.",
  references: ["CompTIA A+ Core 1 Printer Troubleshooting"]
},

{
  id: "C1-TRB-Q046",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Duplex Printing",
  question: "A printer works normally for single-sided pages but jams whenever duplex printing is selected. Which area should be inspected?",
  choices: ["Duplexing assembly and paper path", "DNS server", "Toner level only", "USB keyboard"],
  answer: "Duplexing assembly and paper path",
  explanation: "Duplex printing routes paper through an additional reversing path. A jam limited to duplex jobs points to that mechanism.",
  examTip: "When one print mode fails, inspect the components unique to that mode.",
  memoryTrick: "Two-sided jam? Check the return trip.",
  commonMistake: "Do not blame the main tray when single-sided feeding works.",
  references: ["CompTIA A+ Core 1 Printer Troubleshooting"]
},

{
  id: "C1-TRB-Q047",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Duplicate IP Address",
  question: "A workstation displays a duplicate IP address warning and experiences intermittent connectivity. What should the technician do FIRST?",
  choices: ["Identify the other device using the same address", "Replace the monitor", "Reinstall the web browser", "Increase the Wi-Fi transmit power"],
  answer: "Identify the other device using the same address",
  explanation: "Two devices using the same IPv4 address cause an address conflict. The technician must identify and correct the duplicate assignment.",
  examTip: "Duplicate IP warnings point to overlapping static addresses or a DHCP configuration problem.",
  memoryTrick: "One address, two devices, no peace.",
  commonMistake: "Changing DNS does not resolve an IP address conflict.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q048",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Default Gateway",
  question: "A PC can communicate with devices on its local subnet but cannot reach any remote networks. Which setting is MOST likely incorrect?",
  choices: ["Default gateway", "Monitor refresh rate", "Printer orientation", "Bluetooth name"],
  answer: "Default gateway",
  explanation: "Local-subnet communication does not require a router, but traffic to remote networks must be sent to the default gateway.",
  examTip: "Local works, remote fails—verify the gateway.",
  memoryTrick: "The gateway is the door out.",
  commonMistake: "DNS is not required to reach a remote host by IP address.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q049",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Intermittent Ethernet",
  question: "A wired workstation loses connectivity whenever its Ethernet cable is bumped. What is the BEST next step?",
  choices: ["Replace the patch cable with a known-good cable", "Change the DNS server", "Update the monitor firmware", "Reset the print spooler"],
  answer: "Replace the patch cable with a known-good cable",
  explanation: "Connectivity that changes when the cable moves indicates a damaged cable, plug, or port. Substitution with a known-good cable is a quick isolation test.",
  examTip: "Use known-good components to isolate intermittent physical faults.",
  memoryTrick: "Bump causes drop? Swap the cable.",
  commonMistake: "Do not begin with logical network settings when movement triggers the failure.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q050",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Hard",
  topic: "Duplex Mismatch",
  question: "A wired user has connectivity, but transfers are extremely slow and the switch reports many late collisions. What is the MOST likely cause?",
  choices: ["A speed or duplex mismatch", "A missing DNS record", "A depleted laptop battery", "An incorrect display resolution"],
  answer: "A speed or duplex mismatch",
  explanation: "Mismatched Ethernet speed or duplex settings can create collisions, retransmissions, and very poor performance while preserving basic connectivity.",
  examTip: "Late collisions on modern switched Ethernet suggest a duplex mismatch.",
  memoryTrick: "Link is up but collisions climb—match the duplex.",
  commonMistake: "Do not blame DNS for slow raw data transfers and collision counters.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q051",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Wi-Fi Channel Congestion",
  question: "Users in a crowded office report slow 2.4 GHz Wi-Fi, especially at midday. Signal strength remains high. What should be investigated FIRST?",
  choices: ["Channel congestion from nearby networks", "The desktop power supplies", "Printer toner levels", "The file-system format"],
  answer: "Channel congestion from nearby networks",
  explanation: "Strong signal with poor performance in a crowded environment can result from overlapping channels and radio contention.",
  examTip: "Signal strength and signal quality are not the same thing.",
  memoryTrick: "Strong bars, slow traffic—check channel traffic.",
  commonMistake: "Do not add transmit power before checking for congestion and interference.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q052",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Wi-Fi Frequency Range",
  question: "A laptop connects reliably to 2.4 GHz Wi-Fi but loses its 5 GHz connection in distant rooms. What BEST explains the difference?",
  choices: ["Higher-frequency 5 GHz signals generally have shorter range", "The laptop needs a new CMOS battery", "5 GHz requires a wired gateway", "The DNS server blocks 5 GHz traffic"],
  answer: "Higher-frequency 5 GHz signals generally have shorter range",
  explanation: "Compared with 2.4 GHz, 5 GHz typically offers more bandwidth but experiences greater attenuation through distance and obstacles.",
  examTip: "2.4 GHz generally reaches farther; 5 GHz often provides faster, cleaner channels.",
  memoryTrick: "Five is fast; two-four travels farther.",
  commonMistake: "Do not confuse wireless frequency coverage with DNS behavior.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q053",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Bluetooth Pairing",
  question: "A Bluetooth headset does not appear in a laptop's list of available devices. What should the user verify FIRST?",
  choices: ["The headset is charged and in pairing mode", "The laptop has a public IP address", "The printer queue is empty", "The SSD uses GPT"],
  answer: "The headset is charged and in pairing mode",
  explanation: "A Bluetooth accessory must have power and be discoverable before the laptop can find and pair with it.",
  examTip: "For short-range wireless accessories, verify power, range, and pairing mode first.",
  memoryTrick: "No pairing without pairing mode.",
  commonMistake: "Do not reinstall drivers before confirming the accessory is discoverable.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q054",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Hard",
  topic: "VPN Access",
  question: "A remote employee can browse the internet but cannot reach company resources after the VPN reports a failed sign-in. What should be checked FIRST?",
  choices: ["VPN credentials and authentication requirements", "The home monitor cable", "The printer pickup rollers", "The computer's thermal paste"],
  answer: "VPN credentials and authentication requirements",
  explanation: "Working internet access confirms general connectivity. A failed VPN sign-in points to credentials, multifactor authentication, certificates, or account access.",
  examTip: "Separate internet connectivity from authenticated access to a private network.",
  memoryTrick: "Internet works, tunnel fails—check the login.",
  commonMistake: "Do not reset the home router when the VPN explicitly reports authentication failure.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q055",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Hard",
  topic: "Cable Interference",
  question: "A new Ethernet run experiences errors only where it travels beside fluorescent-light ballasts and power cables. What is the BEST corrective action?",
  choices: ["Reroute the cable away from electromagnetic interference", "Change the browser homepage", "Replace the CPU", "Enable printer duplexing"],
  answer: "Reroute the cable away from electromagnetic interference",
  explanation: "Electrical equipment and parallel power runs can introduce electromagnetic interference into copper network cabling.",
  examTip: "Cable placement matters; keep copper data cabling away from strong electrical interference.",
  memoryTrick: "Power beside data can create chatter.",
  commonMistake: "Software configuration will not eliminate interference induced along the cable path.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q056",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Hard",
  topic: "Switching Loop",
  question: "After two unused switch ports are connected together, the entire local network becomes extremely slow and switch activity lights flash continuously. What is the MOST likely cause?",
  choices: ["A switching loop causing a broadcast storm", "A DNS cache entry", "A failed laptop battery", "A clogged printhead"],
  answer: "A switching loop causing a broadcast storm",
  explanation: "A physical Layer 2 loop can circulate frames repeatedly and create a broadcast storm that overwhelms the LAN.",
  examTip: "Sudden network-wide slowdown after adding a redundant switch link suggests a loop.",
  memoryTrick: "A cable loop makes traffic loop.",
  commonMistake: "Do not troubleshoot individual workstations when the entire LAN failed immediately after a switch change.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q057",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Power over Ethernet",
  question: "A new IP camera receives no power when connected to a switch, but the same cable passes a continuity test. What should be verified NEXT?",
  choices: ["The switch port supports and has available PoE", "The DNS suffix is correct", "The camera has enough storage", "The monitor input is selected"],
  answer: "The switch port supports and has available PoE",
  explanation: "A good data cable does not guarantee power delivery. The port must support the camera's PoE standard and have sufficient power budget.",
  examTip: "For a dead PoE device, verify the port, PoE standard, and power budget.",
  memoryTrick: "Good cable, no camera power—check PoE.",
  commonMistake: "Do not assume every Ethernet switch supplies power.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q058",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "DNS Cache",
  question: "A website recently moved to a new server. One computer still opens the old address while other computers reach the new one. What should be tried FIRST on the affected computer?",
  choices: ["Flush its DNS resolver cache", "Replace its network cable", "Reinstall the operating system", "Change the monitor resolution"],
  answer: "Flush its DNS resolver cache",
  explanation: "The single computer may be using a stale cached DNS response after the website's address changed.",
  examTip: "When only one device resolves a name incorrectly, investigate its local DNS cache.",
  memoryTrick: "Old name result? Flush the cache.",
  commonMistake: "Do not change organization-wide DNS settings for a problem isolated to one cached client.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q059",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "System Time",
  question: "A laptop can reach websites by IP address but receives certificate warnings on many secure websites. Its clock is several years incorrect. What should be corrected FIRST?",
  choices: ["The system date and time", "The display driver", "The printer spooler", "The Wi-Fi channel width"],
  answer: "The system date and time",
  explanation: "TLS certificates are valid only for specific date ranges. A severely incorrect system clock can make valid certificates appear expired or not yet valid.",
  examTip: "Widespread certificate date errors often point to the device clock.",
  memoryTrick: "Wrong time makes certificates look wrong.",
  commonMistake: "Do not dismiss repeated certificate warnings without checking the system clock.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q060",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Hard",
  topic: "DHCP Scope Exhaustion",
  question: "New devices receive APIPA addresses, while devices that connected earlier still work normally. What is the MOST likely cause?",
  choices: ["The DHCP address pool is exhausted", "The DNS zone is missing", "The switch has a duplex mismatch", "The printer is out of paper"],
  answer: "The DHCP address pool is exhausted",
  explanation: "Existing clients may retain valid leases while new clients fail when no unused DHCP addresses remain.",
  examTip: "Only new clients failing to obtain leases suggests scope exhaustion.",
  memoryTrick: "Old clients connected, new clients rejected—the address pool may be empty.",
  commonMistake: "Do not assume the DHCP server is completely offline when existing leases still function.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q061",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Disabled Network Adapter",
  question: "A laptop shows no available Wi-Fi networks immediately after airplane mode was enabled. What should be checked FIRST?",
  choices: ["Whether airplane mode or the wireless adapter is disabled", "Whether the SSD is fragmented", "Whether the printer has toner", "Whether the CPU fan is seated"],
  answer: "Whether airplane mode or the wireless adapter is disabled",
  explanation: "Airplane mode disables wireless radios on many devices, preventing nearby networks from appearing.",
  examTip: "Check physical switches and software radio controls before deeper wireless troubleshooting.",
  memoryTrick: "No networks after airplane mode? Turn the radio back on.",
  commonMistake: "Do not replace the Wi-Fi adapter before verifying it is enabled.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q062",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Touchpad Driver",
  question: "A laptop touchpad stops responding immediately after a driver update, but a USB mouse works. What is the BEST next step?",
  choices: ["Roll back the touchpad driver", "Replace the laptop display", "Change the default gateway", "Clean the printer rollers"],
  answer: "Roll back the touchpad driver",
  explanation: "Because the issue began immediately after the driver change and other pointing input works, rolling back is the most direct recovery step.",
  examTip: "Use the timeline: failures immediately after an update often point to that update.",
  memoryTrick: "Update broke it? Roll it back.",
  commonMistake: "Do not replace hardware before reversing the recent software change.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q063",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Keyboard Debris",
  question: "A laptop key repeats or sticks, and visible debris surrounds the keycap. What should be tried FIRST?",
  choices: ["Safely clean the keyboard with approved methods", "Replace the motherboard", "Flush the DNS cache", "Rebuild the RAID array"],
  answer: "Safely clean the keyboard with approved methods",
  explanation: "Visible debris can physically obstruct a key. Safe external cleaning is less invasive than replacing the keyboard.",
  examTip: "Begin with the simplest safe corrective action supported by the evidence.",
  memoryTrick: "Sticky key, clean debris.",
  commonMistake: "Do not spray liquid cleaner directly into a laptop keyboard.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q064",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Webcam Privacy",
  question: "A laptop's webcam shows a black image in every application, but Device Manager reports that it works properly. What should be checked FIRST?",
  choices: ["The physical privacy shutter", "The Ethernet duplex setting", "The printer's fuser", "The SSD boot order"],
  answer: "The physical privacy shutter",
  explanation: "Many laptops include a sliding privacy cover that blocks the camera while leaving the device electronically functional.",
  examTip: "Check simple physical controls before changing drivers.",
  memoryTrick: "Camera works but sees black—check the shutter.",
  commonMistake: "Do not reinstall a working camera before checking whether its lens is covered.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q065",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Audio Input",
  question: "During a video call, the user can hear everyone but nobody can hear the user. The microphone passes a hardware test. What should be checked NEXT?",
  choices: ["The application's selected input device and mute setting", "The monitor refresh rate", "The DHCP address pool", "The printer paper path"],
  answer: "The application's selected input device and mute setting",
  explanation: "A working microphone may still be muted or not selected as the active input inside the conferencing application.",
  examTip: "When hardware tests pass, inspect application-specific settings.",
  memoryTrick: "Mic works outside the app? Check the app input.",
  commonMistake: "Do not replace verified hardware before checking mute and input selection.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q066",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "RAID and Backup",
  question: "A user believes no backups are needed because the workstation uses RAID 1. What should the technician explain?",
  choices: ["RAID availability does not replace a separate backup", "RAID 1 prevents accidental deletion", "RAID 1 blocks malware", "RAID 1 stores data only in the cloud"],
  answer: "RAID availability does not replace a separate backup",
  explanation: "RAID 1 protects against a single drive failure, but deletion, corruption, malware, theft, and disasters can affect both copies.",
  examTip: "Redundancy keeps systems available; backups provide recoverable historical copies.",
  memoryTrick: "RAID is not backup.",
  commonMistake: "Do not treat mirrored corruption or deletion as protected data.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q067",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "CMOS Battery",
  question: "A desktop loses its date, time, and firmware settings whenever it is unplugged. Which component should be replaced?",
  choices: ["CMOS battery", "CPU", "Network switch", "Printer drum"],
  answer: "CMOS battery",
  explanation: "The CMOS battery maintains the real-time clock and firmware settings while the system has no external power.",
  examTip: "Repeated clock and firmware resets after power removal point to the CMOS battery.",
  memoryTrick: "Clock forgets when unplugged—change the coin cell.",
  commonMistake: "Do not replace the main power supply for settings lost only while unplugged.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q068",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Blocked Airflow",
  question: "A laptop fan runs loudly and the case becomes hot only when the laptop is used on a bed. What is the MOST likely cause?",
  choices: ["The soft surface is blocking ventilation", "The DNS server is unavailable", "The battery has no charge cycles", "The display cable is loose"],
  answer: "The soft surface is blocking ventilation",
  explanation: "Soft surfaces can cover bottom vents and trap heat, forcing the cooling fan to run at high speed.",
  examTip: "Environmental conditions can cause thermal symptoms even when the cooling hardware works.",
  memoryTrick: "Beds block vents.",
  commonMistake: "Do not replace the fan before moving the laptop to a hard, ventilated surface.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q069",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Easy",
  topic: "Electrical Safety",
  question: "A technician notices smoke and a burning smell coming from a desktop power supply. What should be done FIRST?",
  choices: ["Disconnect power and stop using the computer", "Run a processor stress test", "Open the power supply enclosure", "Continue working until a backup finishes"],
  answer: "Disconnect power and stop using the computer",
  explanation: "Smoke and burning odors indicate an immediate electrical and fire hazard. Power must be removed before further action.",
  examTip: "Safety takes priority over data and diagnostics.",
  memoryTrick: "Smoke means stop.",
  commonMistake: "Never open a power supply; internal capacitors can retain dangerous voltage.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q070",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "POST Memory Count",
  question: "After a memory upgrade, firmware reports only half of the installed RAM. What should the technician check FIRST?",
  choices: ["Whether every memory module is fully seated", "The computer's DNS address", "The printer's page count", "The monitor's color profile"],
  answer: "Whether every memory module is fully seated",
  explanation: "A partially seated module may be physically installed but not detected during POST.",
  examTip: "Incorrect hardware totals immediately after an upgrade point to installation or compatibility.",
  memoryTrick: "Half the RAM seen? Reseat every stick.",
  commonMistake: "Do not begin operating-system troubleshooting when firmware itself reports the wrong amount.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q071",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Driver Rollback",
  question: "A computer begins displaying blue screens immediately after a new graphics driver is installed. What is the BEST first corrective action?",
  choices: ["Boot into a recovery environment and roll back the driver", "Replace the network cable", "Change the DNS server", "Install more printer memory"],
  answer: "Boot into a recovery environment and roll back the driver",
  explanation: "The timing strongly implicates the new graphics driver. Rolling back the change is less invasive than replacing hardware or reinstalling the OS.",
  examTip: "Use recent changes to guide the theory of probable cause.",
  memoryTrick: "New driver, new crash—roll back.",
  commonMistake: "Do not replace the graphics card before testing the prior working driver.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q072",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Mobile Hotspot",
  question: "A phone creates a Wi-Fi hotspot that a laptop can join, but the laptop has no internet access. The phone also cannot browse over cellular data. What should be checked FIRST?",
  choices: ["The phone's cellular connection and data service", "The laptop's display resolution", "The office printer queue", "The laptop's CMOS battery"],
  answer: "The phone's cellular connection and data service",
  explanation: "The hotspot depends on the phone's cellular data connection. If the phone itself lacks cellular internet, connected clients cannot reach the internet either.",
  examTip: "Trace shared connectivity back to the upstream device.",
  memoryTrick: "No data on the phone means no data from the hotspot.",
  commonMistake: "Do not troubleshoot the laptop first when the hotspot's source device is also offline.",
  references: ["CompTIA A+ Core 1 Network Troubleshooting"]
},

{
  id: "C1-TRB-Q073",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Docking Station",
  question: "A laptop charges through a USB-C dock, but neither external monitor is detected. The monitors work with another dock. What should be checked NEXT?",
  choices: ["Dock compatibility, firmware, and display drivers", "The laptop's DNS cache", "The printer toner cartridge", "The wireless channel"],
  answer: "Dock compatibility, firmware, and display drivers",
  explanation: "Charging proves some USB-C functions work, but video output also depends on dock compatibility, alternate-mode support, firmware, and drivers.",
  examTip: "USB-C charging alone does not prove every dock function is supported.",
  memoryTrick: "Power through USB-C does not guarantee video.",
  commonMistake: "Do not replace monitors already proven to work elsewhere.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
},

{
  id: "C1-TRB-Q074",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Medium",
  topic: "Thermal Printer",
  question: "A thermal receipt printer feeds paper normally but prints completely blank receipts after the paper roll was replaced. What should be checked FIRST?",
  choices: ["Whether the thermal paper is installed with the coated side facing the printhead", "Whether the toner cartridge is empty", "Whether the fuser is hot", "Whether the DNS server is reachable"],
  answer: "Whether the thermal paper is installed with the coated side facing the printhead",
  explanation: "Thermal paper prints on only its heat-sensitive coated side. A reversed roll feeds normally but produces blank output.",
  examTip: "Thermal printers use heat-sensitive paper rather than toner or ink.",
  memoryTrick: "Blank thermal receipt? Flip the roll.",
  commonMistake: "Do not look for toner or a fuser in a direct thermal printer.",
  references: ["CompTIA A+ Core 1 Printer Troubleshooting"]
},

{
  id: "C1-TRB-Q075",
  core: "Core 1",
  domain: "Hardware & Network Troubleshooting",
  difficulty: "Hard",
  topic: "Surge Damage",
  question: "After a power surge, a desktop shows no signs of power. The outlet and power cable test good. What is the BEST next diagnostic step?",
  choices: ["Test with a known-good compatible power supply", "Reinstall the operating system", "Clear the browser cache", "Replace the network switch"],
  answer: "Test with a known-good compatible power supply",
  explanation: "Once external power is verified, substituting a known-good compatible PSU helps determine whether the surge damaged the power supply.",
  examTip: "Isolate a suspected component with a known-good replacement when safe and practical.",
  memoryTrick: "Good wall, good cord, dead PC—test the PSU.",
  commonMistake: "Do not open the power supply enclosure to test internal components.",
  references: ["CompTIA A+ Core 1 Hardware Troubleshooting"]
}
];
