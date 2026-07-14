const networkingQuestions = [
  {
    id: "C1-NET-Q001",
    core: "Core 1",
    domain: "Networking",
    difficulty: "Easy",
    topic: "DNS",
    question: "What does DNS do?",
    choices: [
      "Assigns IP addresses automatically",
      "Translates domain names into IP addresses",
      "Encrypts network traffic",
      "Blocks malware"
    ],
    answer: "Translates domain names into IP addresses",
    explanation: "DNS converts names like google.com into IP addresses computers can use.",
    examTip: "DNS = names to numbers.",
    memoryTrick: "DNS is like the internet phonebook.",
    commonMistake: "DNS translates names. DHCP assigns IP addresses.",
    references: ["CompTIA A+ Core 1 Networking"]
  },
  {
  id: "C1-NET-Q002",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "DHCP",
  question: "Which protocol automatically assigns IP addresses to devices on a network?",
  choices: ["DNS", "DHCP", "FTP", "SMTP"],
  answer: "DHCP",
  explanation: "DHCP automatically assigns IP addresses, subnet masks, gateways, and DNS information to devices.",
  examTip: "Automatic IP addressing = DHCP.",
  memoryTrick: "DHCP = Don't Have to Configure Personally.",
  commonMistake: "DNS translates names; it does not assign addresses.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q003",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "APIPA",
  question: "A Windows PC has an IP address of 169.254.15.22. What is the MOST likely problem?",
  choices: [
    "DNS failure",
    "DHCP server unavailable",
    "Gateway failure",
    "Bad Ethernet cable"
  ],
  answer: "DHCP server unavailable",
  explanation: "169.254.x.x is an APIPA address assigned when DHCP cannot be reached.",
  examTip: "169.254 = APIPA = DHCP problem.",
  memoryTrick: "169.254 always screams DHCP.",
  commonMistake: "Students often blame DNS first.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q004",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "IPv4",
  question: "How many bits are in an IPv4 address?",
  choices: ["32", "64", "128", "256"],
  answer: "32",
  explanation: "IPv4 addresses consist of four octets totaling 32 bits.",
  examTip: "IPv4 = 32 bits.",
  memoryTrick: "4 octets × 8 bits = 32.",
  commonMistake: "128 bits belongs to IPv6.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q005",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "IPv6",
  question: "How many bits are in an IPv6 address?",
  choices: ["32", "64", "96", "128"],
  answer: "128",
  explanation: "IPv6 uses 128-bit addresses to provide a vastly larger address space.",
  examTip: "IPv6 = 128 bits.",
  memoryTrick: "IPv6 is four times larger than IPv4.",
  commonMistake: "Don't confuse 64-bit CPUs with IPv6 addresses.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q006",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "Subnet Mask",
  question: "What is the purpose of a subnet mask?",
  choices: [
    "Assigns IP addresses",
    "Identifies the network and host portions of an IP address",
    "Encrypts data",
    "Translates names"
  ],
  answer: "Identifies the network and host portions of an IP address",
  explanation: "The subnet mask determines which part of an IP address identifies the network and which part identifies the host.",
  examTip: "Subnet mask separates network from host.",
  memoryTrick: "Mask hides the host boundary.",
  commonMistake: "It doesn't assign addresses.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q007",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "Default Gateway",
  question: "Which device allows a computer to communicate with devices on another network?",
  choices: [
    "Switch",
    "Default Gateway",
    "Access Point",
    "Hub"
  ],
  answer: "Default Gateway",
  explanation: "The default gateway forwards traffic outside the local network.",
  examTip: "Leaving your LAN = Gateway.",
  memoryTrick: "Gateway = Door out.",
  commonMistake: "A switch only moves traffic within the LAN.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q008",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "MAC Address",
  question: "Which address is burned into a network interface card by the manufacturer?",
  choices: [
    "IPv4",
    "MAC Address",
    "Gateway",
    "Hostname"
  ],
  answer: "MAC Address",
  explanation: "A MAC address is the unique Layer 2 hardware address assigned to a network adapter.",
  examTip: "Hardware address = MAC.",
  memoryTrick: "MAC lives on the NIC.",
  commonMistake: "IP addresses can change; MAC addresses generally do not.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q009",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Medium",
  topic: "ARP",
  question: "Which protocol resolves an IPv4 address to a MAC address?",
  choices: [
    "DNS",
    "ARP",
    "DHCP",
    "ICMP"
  ],
  answer: "ARP",
  explanation: "ARP maps IPv4 addresses to MAC addresses on a local network.",
  examTip: "IP to MAC = ARP.",
  memoryTrick: "ARP finds hardware addresses.",
  commonMistake: "DNS resolves names—not MAC addresses.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q010",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "HTTPS",
  question: "Which port does HTTPS use by default?",
  choices: ["80", "22", "443", "3389"],
  answer: "443",
  explanation: "HTTPS encrypts web traffic and uses TCP port 443.",
  examTip: "Secure websites = 443.",
  memoryTrick: "HTTP 80, HTTPS 443.",
  commonMistake: "Port 80 is HTTP.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q011",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "HTTP",
  question: "Which default port is used by HTTP?",
  choices: ["21", "22", "80", "443"],
  answer: "80",
  explanation: "HTTP uses TCP port 80 by default.",
  examTip: "Non-secure web traffic = 80.",
  memoryTrick: "HTTP = 80.",
  commonMistake: "HTTPS uses 443.",
  references: ["CompTIA A+ Core 1 Networking"]
},
{
  id: "C1-NET-Q012",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "SSH",
  question: "Which protocol provides secure remote command-line access to a Linux server?",
  choices: ["FTP", "SSH", "Telnet", "RDP"],
  answer: "SSH",
  explanation: "SSH encrypts remote terminal sessions and is the standard for secure command-line administration.",
  examTip: "Secure remote terminal = SSH.",
  memoryTrick: "SSH = Secure SHell.",
  commonMistake: "Telnet is NOT encrypted.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q013",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "SSH",
  question: "Which default TCP port does SSH use?",
  choices: ["20", "21", "22", "23"],
  answer: "22",
  explanation: "SSH uses TCP port 22.",
  examTip: "SSH = 22.",
  memoryTrick: "Two twos = SSH.",
  commonMistake: "23 belongs to Telnet.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q014",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "Telnet",
  question: "Why is Telnet rarely used today?",
  choices: [
    "It is too slow",
    "It is not encrypted",
    "It only works on Linux",
    "It only works on Windows"
  ],
  answer: "It is not encrypted",
  explanation: "Telnet sends usernames and passwords in plain text.",
  examTip: "Unencrypted remote access = Telnet.",
  memoryTrick: "Never Telnet over the Internet.",
  commonMistake: "SSH replaced Telnet for secure administration.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q015",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "FTP",
  question: "Which protocol is commonly used to transfer files between computers?",
  choices: ["FTP", "DNS", "DHCP", "SNMP"],
  answer: "FTP",
  explanation: "FTP is designed for transferring files across a network.",
  examTip: "File Transfer = FTP.",
  memoryTrick: "FTP literally means File Transfer Protocol.",
  commonMistake: "FTP is not encrypted by default.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q016",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "FTP",
  question: "Which ports are used by standard FTP?",
  choices: [
    "20 and 21",
    "22 and 23",
    "80 and 443",
    "110 and 143"
  ],
  answer: "20 and 21",
  explanation: "FTP traditionally uses port 21 for commands and port 20 for data.",
  examTip: "FTP = 20/21.",
  memoryTrick: "20 then 21.",
  commonMistake: "SSH is 22.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q017",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "SMTP",
  question: "Which protocol sends outgoing email?",
  choices: ["SMTP", "IMAP", "POP3", "LDAP"],
  answer: "SMTP",
  explanation: "SMTP is responsible for sending email.",
  examTip: "Send Mail = SMTP.",
  memoryTrick: "SMTP Starts Mail Transmission.",
  commonMistake: "IMAP and POP3 receive mail.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q018",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "POP3",
  question: "Which protocol typically downloads email and may remove it from the server?",
  choices: ["SMTP", "POP3", "IMAP", "DNS"],
  answer: "POP3",
  explanation: "POP3 downloads mail to a local device.",
  examTip: "POP3 pulls mail down.",
  memoryTrick: "POP pops mail off the server.",
  commonMistake: "IMAP usually leaves mail on the server.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q019",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "IMAP",
  question: "Which email protocol keeps messages synchronized across multiple devices?",
  choices: ["FTP", "IMAP", "POP3", "SMTP"],
  answer: "IMAP",
  explanation: "IMAP stores messages on the mail server so multiple devices stay synchronized.",
  examTip: "Multiple devices = IMAP.",
  memoryTrick: "IMAP = I Manage All Platforms.",
  commonMistake: "POP3 is usually device-specific.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q020",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "RDP",
  question: "Which Microsoft protocol provides a graphical remote desktop session?",
  choices: ["SSH", "FTP", "RDP", "SMB"],
  answer: "RDP",
  explanation: "Remote Desktop Protocol allows graphical remote control of Windows computers.",
  examTip: "Windows Remote Desktop = RDP.",
  memoryTrick: "Remote Desktop Protocol.",
  commonMistake: "SSH is command-line only.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q021",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "RDP",
  question: "Which default port is used by Remote Desktop Protocol?",
  choices: ["3389", "22", "80", "445"],
  answer: "3389",
  explanation: "RDP uses TCP port 3389.",
  examTip: "Remote Desktop = 3389.",
  memoryTrick: "Remember 3389.",
  commonMistake: "Port 445 belongs to SMB.",
  references: ["CompTIA A+ Core 1 Networking"]
},
{
  id: "C1-NET-Q022",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "TCP",
  question: "Which transport protocol guarantees reliable delivery of data?",
  choices: ["UDP", "TCP", "ICMP", "ARP"],
  answer: "TCP",
  explanation: "TCP establishes a connection and guarantees ordered, reliable delivery using acknowledgments and retransmissions.",
  examTip: "Reliable = TCP.",
  memoryTrick: "TCP Takes Care of Packets.",
  commonMistake: "UDP does not guarantee delivery.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q023",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "UDP",
  question: "Which protocol is commonly used for streaming video and online gaming because speed is more important than reliability?",
  choices: ["TCP", "UDP", "FTP", "SMTP"],
  answer: "UDP",
  explanation: "UDP is connectionless and minimizes overhead, making it ideal for real-time applications.",
  examTip: "Fast = UDP.",
  memoryTrick: "UDP = Ultra Direct Packets.",
  commonMistake: "TCP is slower because it confirms delivery.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q024",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "Switch",
  question: "Which device forwards frames based on MAC addresses?",
  choices: ["Router", "Switch", "Hub", "Firewall"],
  answer: "Switch",
  explanation: "A switch builds a MAC address table and forwards frames only to the correct destination port.",
  examTip: "MAC = Switch.",
  memoryTrick: "Switches speak MAC.",
  commonMistake: "Routers use IP addresses.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q025",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "Router",
  question: "Which networking device connects multiple different networks together?",
  choices: ["Hub", "Router", "Switch", "Repeater"],
  answer: "Router",
  explanation: "Routers forward packets between different IP networks.",
  examTip: "Different networks = Router.",
  memoryTrick: "Router routes traffic.",
  commonMistake: "Switches stay inside one LAN.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q026",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "Hub",
  question: "How does a network hub handle incoming traffic?",
  choices: [
    "Sends only to the destination",
    "Broadcasts to every port",
    "Encrypts traffic",
    "Uses routing tables"
  ],
  answer: "Broadcasts to every port",
  explanation: "A hub repeats incoming traffic to every connected device.",
  examTip: "Hub = Dumb device.",
  memoryTrick: "Hub blasts everybody.",
  commonMistake: "Switches are much smarter.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q027",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "Access Point",
  question: "Which device allows wireless devices to connect to a wired LAN?",
  choices: [
    "Router",
    "Switch",
    "Wireless Access Point",
    "Bridge"
  ],
  answer: "Wireless Access Point",
  explanation: "A wireless access point connects Wi-Fi clients to the wired Ethernet network.",
  examTip: "Wi-Fi = Access Point.",
  memoryTrick: "AP = Air Portal.",
  commonMistake: "A switch alone does not provide wireless access.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q028",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Medium",
  topic: "PoE",
  question: "What does PoE stand for?",
  choices: [
    "Power over Ethernet",
    "Point of Entry",
    "Power on Equipment",
    "Packet over Ethernet"
  ],
  answer: "Power over Ethernet",
  explanation: "PoE allows network cables to deliver electrical power along with data.",
  examTip: "Power + Ethernet = PoE.",
  memoryTrick: "One cable does both.",
  commonMistake: "PoE requires compatible equipment.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q029",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Medium",
  topic: "PoE",
  question: "Which device commonly uses PoE?",
  choices: [
    "Wireless Access Point",
    "Gaming PC",
    "Monitor",
    "Printer Cable"
  ],
  answer: "Wireless Access Point",
  explanation: "Wireless access points, IP phones, and IP cameras commonly receive power using PoE.",
  examTip: "Think ceiling-mounted APs.",
  memoryTrick: "No power outlet needed.",
  commonMistake: "Desktop PCs do not run from PoE.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q030",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Easy",
  topic: "RJ45",
  question: "Which connector is commonly used for Ethernet networking?",
  choices: [
    "RJ45",
    "RJ11",
    "USB-C",
    "HDMI"
  ],
  answer: "RJ45",
  explanation: "RJ45 connectors terminate Ethernet twisted-pair cables.",
  examTip: "Ethernet = RJ45.",
  memoryTrick: "RJ45 has 8 pins.",
  commonMistake: "RJ11 is typically used for telephone connections.",
  references: ["CompTIA A+ Core 1 Networking"]
},

{
  id: "C1-NET-Q031",
  core: "Core 1",
  domain: "Networking",
  difficulty: "Medium",
  topic: "Cable Tester",
  question: "Which tool verifies the continuity and wiring of an Ethernet cable?",
  choices: [
    "Cable Tester",
    "Punchdown Tool",
    "Tone Generator",
    "Crimper"
  ],
  answer: "Cable Tester",
  explanation: "A cable tester verifies proper pinout, continuity, and detects wiring faults in Ethernet cables.",
  examTip: "Test cables with a cable tester.",
  memoryTrick: "Build → Crimp → Test.",
  commonMistake: "A crimper installs connectors but doesn't verify the finished cable.",
  references: ["CompTIA A+ Core 1 Networking"]
}
];