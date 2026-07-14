const mobileDevicesQuestions = [
  {
    id: "C1-MOB-Q001",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Easy",
    topic: "Laptop Memory",
    question: "Which memory form factor is most commonly used in laptops?",
    choices: ["SODIMM", "DIMM", "PCIe x16", "ATX"],
    answer: "SODIMM",
    explanation: "SODIMM modules are smaller than desktop DIMMs and are commonly used in laptops and compact systems.",
    examTip: "Laptop RAM = SODIMM.",
    memoryTrick: "SO-DIMM = Small Outline DIMM.",
    commonMistake: "Standard DIMMs are more common in desktop computers.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q002",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Easy",
    topic: "Laptop Storage",
    question: "Which storage form factor is commonly used for compact NVMe drives in modern laptops?",
    choices: ["M.2", "3.5-inch HDD", "5.25-inch drive", "PCI"],
    answer: "M.2",
    explanation: "M.2 is a compact form factor commonly used for NVMe and SATA-based solid-state drives in laptops.",
    examTip: "Modern compact laptop SSD = M.2.",
    memoryTrick: "M.2 is small and fast.",
    commonMistake: "M.2 describes the form factor; NVMe describes a storage protocol.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q003",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Medium",
    topic: "Laptop Displays",
    question: "A laptop screen is extremely dim, but a faint image is visible when a flashlight is pointed at it. Which component is MOST likely failing?",
    choices: ["Backlight", "Keyboard", "Battery", "SSD"],
    answer: "Backlight",
    explanation: "A visible but very dim image usually means the display panel is producing an image, but the backlight is not illuminating it properly.",
    examTip: "Faint image with flashlight = backlight problem.",
    memoryTrick: "Image exists, light does not.",
    commonMistake: "A completely failed GPU usually causes no usable image at all.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q004",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Medium",
    topic: "Laptop Power",
    question: "A laptop works normally while plugged into AC power but shuts down immediately when unplugged. Which component is MOST likely faulty?",
    choices: ["Battery", "RAM", "Touchpad", "Webcam"],
    answer: "Battery",
    explanation: "If the laptop functions on AC power but cannot remain powered when unplugged, the battery is likely failed or unable to hold a charge.",
    examTip: "Works only while plugged in = battery problem.",
    memoryTrick: "No unplug means no battery power.",
    commonMistake: "The AC adapter is probably working because the laptop powers on while connected.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q005",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Medium",
    topic: "Mobile Connectivity",
    question: "Which technology is commonly used for contactless payments by tapping a smartphone near a payment terminal?",
    choices: ["NFC", "Ethernet", "SATA", "Infrared printer sharing"],
    answer: "NFC",
    explanation: "Near Field Communication supports very short-range wireless communication and is commonly used for contactless payments.",
    examTip: "Tap-to-pay = NFC.",
    memoryTrick: "NFC works Near the device.",
    commonMistake: "Bluetooth works over a longer range and is not the usual answer for tap-to-pay.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q006",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Easy",
    topic: "Bluetooth",
    question: "Which technology is commonly used to connect wireless earbuds to a smartphone?",
    choices: ["Bluetooth", "NFC only", "DSL", "Thunderbolt"],
    answer: "Bluetooth",
    explanation: "Bluetooth provides short-range wireless connectivity for peripherals such as earbuds, keyboards, mice, and speakers.",
    examTip: "Wireless accessories = Bluetooth.",
    memoryTrick: "Bluetooth connects nearby personal devices.",
    commonMistake: "NFC may assist with pairing, but Bluetooth usually carries the audio connection.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q007",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Medium",
    topic: "Mobile Hotspot",
    question: "A user wants to share a smartphone's cellular internet connection with a laptop over Wi-Fi. Which feature should be enabled?",
    choices: ["Mobile hotspot", "Airplane mode", "NFC payment", "Screen rotation lock"],
    answer: "Mobile hotspot",
    explanation: "A mobile hotspot allows a smartphone to share its cellular data connection with other devices over Wi-Fi.",
    examTip: "Share cellular data over Wi-Fi = mobile hotspot.",
    memoryTrick: "The phone becomes the access point.",
    commonMistake: "Airplane mode usually disables cellular and wireless connections.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q008",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Medium",
    topic: "Mobile Synchronization",
    question: "Which service allows contacts, calendars, photos, and files to remain synchronized across multiple devices?",
    choices: ["Cloud synchronization", "BIOS update", "POST", "RAID 0"],
    answer: "Cloud synchronization",
    explanation: "Cloud synchronization stores and updates data through an online service so multiple devices remain consistent.",
    examTip: "Same data across devices = cloud synchronization.",
    memoryTrick: "The cloud keeps devices in sync.",
    commonMistake: "A local backup alone does not automatically synchronize multiple devices.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q009",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Medium",
    topic: "Laptop Input Devices",
    question: "A laptop touchpad stops responding, but an external USB mouse works normally. What should be checked FIRST?",
    choices: [
      "Touchpad function-key setting",
      "Replace the motherboard",
      "Reinstall the operating system",
      "Replace the display panel"
    ],
    answer: "Touchpad function-key setting",
    explanation: "Many laptops include a function-key combination or setting that enables and disables the touchpad.",
    examTip: "Check simple settings before replacing hardware.",
    memoryTrick: "Touchpad off? Check the function key.",
    commonMistake: "Do not replace the touchpad before confirming it was not accidentally disabled.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },

  {
    id: "C1-MOB-Q010",
    core: "Core 1",
    domain: "Mobile Devices",
    difficulty: "Medium",
    topic: "Docking Stations",
    question: "What is the primary purpose of a laptop docking station?",
    choices: [
      "Provide expanded ports and desktop-style connectivity",
      "Increase cellular signal strength",
      "Replace the operating system",
      "Encrypt the laptop's storage"
    ],
    answer: "Provide expanded ports and desktop-style connectivity",
    explanation: "A docking station can connect a laptop to monitors, keyboards, networks, power, and other peripherals through one main connection.",
    examTip: "One connection to many desktop devices = docking station.",
    memoryTrick: "Dock the laptop and gain a desk setup.",
    commonMistake: "A docking station does not automatically increase CPU or RAM performance.",
    references: ["CompTIA A+ Core 1 Mobile Devices"]
  },
  {
  id: "C1-MOB-Q011",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "SIM and eSIM",
  question: "Which component stores subscriber information used to connect a mobile device to a cellular network?",
  choices: [
    "SIM or eSIM",
    "NFC antenna",
    "SSD",
    "SODIMM"
  ],
  answer: "SIM or eSIM",
  explanation: "A SIM or eSIM stores subscriber identity information that allows a mobile device to authenticate with a cellular carrier.",
  examTip: "Cellular subscriber identity = SIM or eSIM.",
  memoryTrick: "SIM identifies the subscriber.",
  commonMistake: "Wi-Fi does not require a SIM card.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q012",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Mobile Device Management",
  question: "A company needs to remotely enforce screen-lock policies and install approved applications on employee smartphones. Which solution should be used?",
  choices: [
    "Mobile device management",
    "Disk Management",
    "RAID",
    "BIOS"
  ],
  answer: "Mobile device management",
  explanation: "Mobile device management allows organizations to configure, secure, monitor, and remotely manage enrolled mobile devices.",
  examTip: "Corporate control of phones and tablets = MDM.",
  memoryTrick: "MDM manages mobile devices.",
  commonMistake: "MDM is not the same as a normal cloud backup service.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q013",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "BYOD",
  question: "What does BYOD mean in a business environment?",
  choices: [
    "Bring your own device",
    "Back up your operating drive",
    "Build your own database",
    "Block your online data"
  ],
  answer: "Bring your own device",
  explanation: "BYOD policies allow employees to use personally owned devices for work while following organizational security requirements.",
  examTip: "Personal device used for company work = BYOD.",
  memoryTrick: "Bring Your Own Device.",
  commonMistake: "BYOD still requires company policies and security controls.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q014",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Easy",
  topic: "Location Services",
  question: "Which technology provides satellite-based location information to a mobile device?",
  choices: [
    "GPS",
    "NFC",
    "Bluetooth",
    "USB-C"
  ],
  answer: "GPS",
  explanation: "Global Positioning System services use satellite signals to determine a device's location.",
  examTip: "Satellite-based location = GPS.",
  memoryTrick: "GPS tells your global position.",
  commonMistake: "Cellular towers can assist with location, but GPS is the satellite-based answer.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q015",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Easy",
  topic: "USB-C",
  question: "Which mobile connector is reversible and can carry power, data, and video?",
  choices: [
    "USB-C",
    "USB-A",
    "RJ45",
    "PS/2"
  ],
  answer: "USB-C",
  explanation: "USB-C is reversible and may support charging, data transfer, and video output depending on the device and cable.",
  examTip: "Reversible modern connector = USB-C.",
  memoryTrick: "USB-C can flip either way.",
  commonMistake: "The connector shape alone does not guarantee every optional USB-C feature.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q016",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Easy",
  topic: "Lightning",
  question: "Which connector is associated primarily with older Apple mobile devices?",
  choices: [
    "Lightning",
    "RJ11",
    "DisplayPort",
    "SATA"
  ],
  answer: "Lightning",
  explanation: "Lightning was widely used on Apple iPhones, iPads, and accessories before newer models increasingly adopted USB-C.",
  examTip: "Older Apple mobile connector = Lightning.",
  memoryTrick: "Lightning strikes Apple devices.",
  commonMistake: "USB-C and Lightning are different physical connectors.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q017",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Wireless Cards",
  question: "A laptop cannot detect any Wi-Fi networks after its wireless card was replaced. Which connection should be checked FIRST?",
  choices: [
    "Wi-Fi antenna leads",
    "SATA power cable",
    "Monitor cable",
    "Printer cable"
  ],
  answer: "Wi-Fi antenna leads",
  explanation: "Laptop wireless cards commonly connect to small antenna leads. Loose or disconnected antenna cables can cause extremely weak or missing wireless reception.",
  examTip: "No Wi-Fi after replacing the card? Check antenna leads.",
  memoryTrick: "The card needs its antennas.",
  commonMistake: "Do not replace the router when only the recently serviced laptop is affected.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q018",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Webcam and Microphone",
  question: "A laptop webcam works, but meeting participants cannot hear the user. Which device should be checked?",
  choices: [
    "Microphone",
    "Backlight",
    "Touchpad",
    "Battery"
  ],
  answer: "Microphone",
  explanation: "The webcam provides video, while the microphone captures the user's audio.",
  examTip: "Video works but voice does not = microphone.",
  memoryTrick: "Webcam sees; microphone hears.",
  commonMistake: "Do not troubleshoot the camera when only audio is missing.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q019",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Biometrics",
  question: "Which authentication method uses a fingerprint or facial scan?",
  choices: [
    "Biometric authentication",
    "Password authentication",
    "Security questions",
    "PIN only"
  ],
  answer: "Biometric authentication",
  explanation: "Biometric authentication verifies a physical characteristic such as a fingerprint, face, or iris.",
  examTip: "Something you are = biometric factor.",
  memoryTrick: "Bio means body.",
  commonMistake: "A PIN is something you know, not something you are.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
},

{
  id: "C1-MOB-Q020",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Port Replicators",
  question: "What is the primary purpose of a laptop port replicator?",
  choices: [
    "Provide additional connection ports",
    "Increase CPU clock speed",
    "Replace the laptop battery",
    "Encrypt the operating system"
  ],
  answer: "Provide additional connection ports",
  explanation: "A port replicator expands the number or types of ports available to a laptop, allowing more peripherals to be connected.",
  examTip: "Need more laptop ports = port replicator.",
  memoryTrick: "It replicates and expands ports.",
  commonMistake: "A port replicator usually offers fewer advanced features than a full docking station.",
  references: ["CompTIA A+ 220-1201 Mobile Devices"]
}
,
{
  id: "C1-MOB-Q021",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Airplane Mode",
  question: "What is the primary purpose of Airplane Mode on a mobile device?",
  choices: [
    "Disable wireless radios for safe operation",
    "Erase all personal data",
    "Improve camera quality",
    "Increase battery capacity"
  ],
  answer: "Disable wireless radios for safe operation",
  explanation: "Airplane Mode disables cellular, Wi-Fi, Bluetooth, and other wireless radios, although many can be re-enabled individually afterward.",
  examTip: "Airplane Mode = wireless off.",
  memoryTrick: "Flying = radios resting.",
  commonMistake: "Airplane Mode does not power off the device.",
  references: ["CompTIA A+ Core 1 Mobile Devices"]
},

{
  id: "C1-MOB-Q022",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Easy",
  topic: "Screen Lock",
  question: "Which feature helps prevent unauthorized access if a smartphone is lost?",
  choices: [
    "Screen lock",
    "Dark mode",
    "Auto-rotate",
    "Brightness control"
  ],
  answer: "Screen lock",
  explanation: "A PIN, password, pattern, or biometric lock helps protect sensitive information.",
  examTip: "Always enable a lock screen.",
  memoryTrick: "Locked phone = protected phone.",
  commonMistake: "Swipe-only locks provide little protection.",
  references: ["CompTIA A+ Core 1 Mobile Devices"]
},

{
  id: "C1-MOB-Q023",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Battery Health",
  question: "A smartphone battery drains unusually fast even after charging. What is the MOST likely cause?",
  choices: [
    "Battery degradation",
    "Broken screen",
    "Faulty SIM card",
    "Disabled Bluetooth"
  ],
  answer: "Battery degradation",
  explanation: "Rechargeable batteries naturally lose capacity over time.",
  examTip: "Old battery = shorter runtime.",
  memoryTrick: "Batteries wear out.",
  commonMistake: "Replacing the charger won't restore battery capacity.",
  references: ["CompTIA A+ Core 1 Mobile Devices"]
},

{
  id: "C1-MOB-Q024",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Easy",
  topic: "Wireless Charging",
  question: "Which technology allows many smartphones to charge without plugging in a cable?",
  choices: [
    "Qi wireless charging",
    "NFC",
    "GPS",
    "Bluetooth"
  ],
  answer: "Qi wireless charging",
  explanation: "Qi charging transfers power wirelessly through electromagnetic induction.",
  examTip: "Wireless charging = Qi.",
  memoryTrick: "Qi = charge without plugging in.",
  commonMistake: "NFC is used for short-range communication, not charging.",
  references: ["CompTIA A+ Core 1 Mobile Devices"]
},

{
  id: "C1-MOB-Q025",
  core: "Core 1",
  domain: "Mobile Devices",
  difficulty: "Medium",
  topic: "Remote Wipe",
  question: "Which feature allows a lost company smartphone to be erased remotely?",
  choices: [
    "Remote wipe",
    "Disk Cleanup",
    "Safe Mode",
    "Task Manager"
  ],
  answer: "Remote wipe",
  explanation: "Remote wipe protects sensitive data if a mobile device is lost or stolen.",
  examTip: "Lost phone? Remote wipe.",
  memoryTrick: "Erase it from anywhere.",
  commonMistake: "Remote wipe permanently removes data from the device.",
  references: ["CompTIA A+ Core 1 Mobile Devices"]
}];