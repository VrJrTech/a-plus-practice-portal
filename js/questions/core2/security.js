const securityQuestions = [
  {
    id: "C2-SEC-Q001",
    core: "Core 2",
    domain: "Security",
    difficulty: "Easy",
    topic: "Malware",
    question: "Which type of malware is designed to appear as legitimate software in order to trick users into installing it?",
    choices: [
      "Trojan",
      "Worm",
      "Spyware",
      "Rootkit"
    ],
    answer: "Trojan",
    explanation: "A Trojan disguises itself as legitimate software to convince users to install it.",
    examTip: "Looks legitimate = Trojan.",
    memoryTrick: "Think Trojan Horse.",
    commonMistake: "A worm spreads automatically without user interaction.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q002",
    core: "Core 2",
    domain: "Security",
    difficulty: "Easy",
    topic: "Phishing",
    question: "A user receives an email asking them to click a link and verify their password. What type of attack is this?",
    choices: [
      "Phishing",
      "DDoS",
      "Brute Force",
      "Tailgating"
    ],
    answer: "Phishing",
    explanation: "Phishing attempts to steal credentials by pretending to be a trusted source.",
    examTip: "Fake emails asking for credentials = Phishing.",
    memoryTrick: "Fishing for passwords.",
    commonMistake: "Phishing doesn't always contain attachments.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q003",
    core: "Core 2",
    domain: "Security",
    difficulty: "Easy",
    topic: "Authentication",
    question: "Which security practice requires two different forms of verification before granting access?",
    choices: [
      "Multi-factor Authentication",
      "Single Sign-On",
      "Guest Login",
      "Captive Portal"
    ],
    answer: "Multi-factor Authentication",
    explanation: "MFA requires two or more authentication factors such as a password and a verification code.",
    examTip: "Password + phone = MFA.",
    memoryTrick: "Multiple factors = More secure.",
    commonMistake: "Two passwords are not two factors.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q004",
    core: "Core 2",
    domain: "Security",
    difficulty: "Medium",
    topic: "Passwords",
    question: "Which password is the MOST secure?",
    choices: [
      "Password123",
      "Summer2025",
      "CorrectHorseBatteryStaple!",
      "12345678"
    ],
    answer: "CorrectHorseBatteryStaple!",
    explanation: "Long passphrases are generally stronger and easier to remember than short complex passwords.",
    examTip: "Length beats complexity alone.",
    memoryTrick: "Think passphrase.",
    commonMistake: "Adding one symbol to a weak password doesn't make it strong.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q005",
    core: "Core 2",
    domain: "Security",
    difficulty: "Medium",
    topic: "Least Privilege",
    question: "What does the Principle of Least Privilege mean?",
    choices: [
      "Users receive only the permissions necessary to perform their jobs",
      "Everyone is an administrator",
      "Passwords never expire",
      "All files are public"
    ],
    answer: "Users receive only the permissions necessary to perform their jobs",
    explanation: "Least privilege reduces security risks by limiting user access.",
    examTip: "Minimum permissions needed.",
    memoryTrick: "Need-to-know access.",
    commonMistake: "Giving everyone admin rights creates unnecessary risk.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q006",
    core: "Core 2",
    domain: "Security",
    difficulty: "Easy",
    topic: "Firewall",
    question: "What is the primary purpose of a firewall?",
    choices: [
      "Filter network traffic",
      "Increase internet speed",
      "Store files",
      "Update drivers"
    ],
    answer: "Filter network traffic",
    explanation: "Firewalls monitor and control incoming and outgoing network traffic based on security rules.",
    examTip: "Firewall = Traffic control.",
    memoryTrick: "Wall around the network.",
    commonMistake: "A firewall doesn't replace antivirus software.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q007",
    core: "Core 2",
    domain: "Security",
    difficulty: "Medium",
    topic: "Encryption",
    question: "What is the primary purpose of encryption?",
    choices: [
      "Protect data confidentiality",
      "Increase internet speed",
      "Remove malware",
      "Compress files"
    ],
    answer: "Protect data confidentiality",
    explanation: "Encryption converts readable information into unreadable data that requires a key to decrypt.",
    examTip: "Encryption protects data.",
    memoryTrick: "Scramble the data.",
    commonMistake: "Encryption doesn't remove malware.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q008",
    core: "Core 2",
    domain: "Security",
    difficulty: "Medium",
    topic: "Social Engineering",
    question: "An attacker follows an employee through a secure door without using a badge. What type of attack is this?",
    choices: [
      "Tailgating",
      "Shoulder Surfing",
      "Phishing",
      "Spoofing"
    ],
    answer: "Tailgating",
    explanation: "Tailgating occurs when an unauthorized person gains physical access by following an authorized individual.",
    examTip: "Physical access without authorization = Tailgating.",
    memoryTrick: "Follow someone through the door.",
    commonMistake: "Tailgating is a physical attack, not an email attack.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q009",
    core: "Core 2",
    domain: "Security",
    difficulty: "Easy",
    topic: "Antivirus",
    question: "What is the primary purpose of antivirus software?",
    choices: [
      "Detect and remove malicious software",
      "Increase RAM",
      "Manage printers",
      "Configure routers"
    ],
    answer: "Detect and remove malicious software",
    explanation: "Antivirus software scans for, detects, and removes malware.",
    examTip: "Antivirus protects against malware.",
    memoryTrick: "Virus protection.",
    commonMistake: "Antivirus alone is not complete security.",
    references: ["CompTIA A+ Core 2 Security"]
  },

  {
    id: "C2-SEC-Q010",
    core: "Core 2",
    domain: "Security",
    difficulty: "Medium",
    topic: "Ransomware",
    question: "What is ransomware designed to do?",
    choices: [
      "Encrypt files and demand payment",
      "Improve computer performance",
      "Create backups",
      "Repair Windows"
    ],
    answer: "Encrypt files and demand payment",
    explanation: "Ransomware encrypts a victim's files and demands payment for the decryption key.",
    examTip: "Encrypt + payment = Ransomware.",
    memoryTrick: "Hold files hostage.",
    commonMistake: "Paying the ransom does not guarantee recovery.",
    references: ["CompTIA A+ Core 2 Security"]
  },
  ,
{
  id: "C2-SEC-Q011",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Password Attacks",
  question: "Which attack attempts every possible password combination until the correct one is found?",
  choices: [
    "Brute-force attack",
    "Phishing attack",
    "Tailgating",
    "Shoulder surfing"
  ],
  answer: "Brute-force attack",
  explanation: "A brute-force attack systematically tries many password combinations until one succeeds.",
  examTip: "Trying every password = brute force.",
  memoryTrick: "Brute force uses sheer force.",
  commonMistake: "Dictionary attacks use common words instead of every combination.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q012",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Dictionary Attack",
  question: "Unlike a brute-force attack, a dictionary attack primarily uses:",
  choices: [
    "A list of common passwords and words",
    "Hardware failures",
    "Random IP addresses",
    "Wireless signals"
  ],
  answer: "A list of common passwords and words",
  explanation: "Dictionary attacks try likely passwords rather than every possible combination.",
  examTip: "Dictionary = common words.",
  memoryTrick: "It literally uses a dictionary.",
  commonMistake: "Brute force is much more exhaustive.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q013",
  core: "Core 2",
  domain: "Security",
  difficulty: "Easy",
  topic: "VPN",
  question: "What is the primary purpose of a VPN?",
  choices: [
    "Create an encrypted connection over the internet",
    "Increase CPU speed",
    "Replace antivirus software",
    "Share printers"
  ],
  answer: "Create an encrypted connection over the internet",
  explanation: "VPNs encrypt traffic between a user and a remote network.",
  examTip: "VPN = secure tunnel.",
  memoryTrick: "Virtual Private Network.",
  commonMistake: "A VPN improves privacy, not internet speed.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q014",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Shoulder Surfing",
  question: "An attacker watches someone type their password over their shoulder. What attack is this?",
  choices: [
    "Shoulder surfing",
    "Tailgating",
    "Phishing",
    "Spoofing"
  ],
  answer: "Shoulder surfing",
  explanation: "Shoulder surfing involves visually observing sensitive information.",
  examTip: "Watching someone type = shoulder surfing.",
  memoryTrick: "Looking over a shoulder.",
  commonMistake: "Tailgating involves physical entry into secure areas.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q015",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Principle of Least Privilege",
  question: "Why should administrator accounts be used only when necessary?",
  choices: [
    "To reduce security risks",
    "To increase RAM",
    "To improve Wi-Fi",
    "To update drivers faster"
  ],
  answer: "To reduce security risks",
  explanation: "Limiting administrative privileges reduces the impact of malware and user mistakes.",
  examTip: "Admin only when needed.",
  memoryTrick: "Less privilege = less damage.",
  commonMistake: "Daily work should usually be performed using standard user accounts.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q016",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Physical Security",
  question: "Which device helps prevent a laptop from being physically stolen?",
  choices: [
    "Cable lock",
    "Firewall",
    "VPN",
    "RAID"
  ],
  answer: "Cable lock",
  explanation: "Cable locks physically secure laptops to desks or other fixed objects.",
  examTip: "Physical theft = physical security.",
  memoryTrick: "Lock the laptop down.",
  commonMistake: "Software security cannot stop physical theft.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q017",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Biometrics",
  question: "Which authentication factor does a fingerprint scanner represent?",
  choices: [
    "Something you are",
    "Something you know",
    "Something you have",
    "Something you install"
  ],
  answer: "Something you are",
  explanation: "Biometrics authenticate users based on physical characteristics.",
  examTip: "Fingerprints = something you are.",
  memoryTrick: "Your body is the credential.",
  commonMistake: "Passwords are something you know.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q018",
  core: "Core 2",
  domain: "Security",
  difficulty: "Easy",
  topic: "Automatic Lock",
  question: "Why should users lock their computers before leaving their desks?",
  choices: [
    "Prevent unauthorized access",
    "Increase battery life",
    "Speed up Windows",
    "Update antivirus"
  ],
  answer: "Prevent unauthorized access",
  explanation: "Locking the workstation prevents others from accessing sensitive information.",
  examTip: "Walk away? Lock it.",
  memoryTrick: "Windows + L.",
  commonMistake: "Logging off and locking are different actions.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q019",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Security Awareness",
  question: "Which practice BEST helps protect against phishing attacks?",
  choices: [
    "Verify links before clicking",
    "Disable antivirus",
    "Share passwords",
    "Ignore software updates"
  ],
  answer: "Verify links before clicking",
  explanation: "Users should verify links, email senders, and website addresses before entering credentials.",
  examTip: "Think before you click.",
  memoryTrick: "Hover before you click.",
  commonMistake: "Attackers often disguise malicious links as trusted websites.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q020",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Security Best Practices",
  question: "Which security practice MOST reduces the damage caused if one account password is compromised?",
  choices: [
    "Use unique passwords for every account",
    "Reuse one strong password everywhere",
    "Disable MFA",
    "Share passwords with coworkers"
  ],
  answer: "Use unique passwords for every account",
  explanation: "Unique passwords prevent one compromised account from exposing all other accounts.",
  examTip: "One password per account.",
  memoryTrick: "Unique passwords contain unique problems.",
  commonMistake: "Even strong passwords should not be reused.",
  references: ["CompTIA A+ Core 2 Security"]
}
,
{
  id: "C2-SEC-Q021",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Account Lockout",
  question: "What is the primary purpose of an account lockout policy?",
  choices: [
    "Reduce brute-force password attacks",
    "Increase internet speed",
    "Improve Wi-Fi coverage",
    "Automatically install updates"
  ],
  answer: "Reduce brute-force password attacks",
  explanation: "Account lockout policies temporarily disable an account after too many failed login attempts.",
  examTip: "Many bad passwords = account lockout.",
  memoryTrick: "Too many tries? Locked.",
  commonMistake: "An account lockout policy does not replace strong passwords or MFA.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q022",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Principle of Least Privilege",
  question: "Which account should be used for everyday work whenever possible?",
  choices: [
    "Standard user account",
    "Administrator account",
    "Domain Administrator",
    "Root account"
  ],
  answer: "Standard user account",
  explanation: "Daily tasks should be performed using a standard account to reduce security risks.",
  examTip: "Admin only when needed.",
  memoryTrick: "Standard for standard work.",
  commonMistake: "Using an administrator account all day increases the impact of malware.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q023",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Permissions",
  question: "Why should file permissions be assigned using groups instead of individual user accounts whenever practical?",
  choices: [
    "It simplifies administration",
    "It increases CPU speed",
    "It improves internet performance",
    "It encrypts files automatically"
  ],
  answer: "It simplifies administration",
  explanation: "Managing permissions through groups is more efficient and easier to maintain than assigning permissions individually.",
  examTip: "Groups make permission management easier.",
  memoryTrick: "Manage groups, not people.",
  commonMistake: "Individual permissions become difficult to maintain as organizations grow.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q024",
  core: "Core 2",
  domain: "Security",
  difficulty: "Easy",
  topic: "Security Awareness",
  question: "What is the BEST action if you receive an unexpected email attachment from an unknown sender?",
  choices: [
    "Do not open it and report it if appropriate",
    "Open it immediately",
    "Forward it to coworkers",
    "Reply asking if it is safe"
  ],
  answer: "Do not open it and report it if appropriate",
  explanation: "Unexpected attachments are a common malware delivery method.",
  examTip: "When in doubt, don't click.",
  memoryTrick: "Unknown sender? Unknown danger.",
  commonMistake: "Even familiar-looking email addresses can be spoofed.",
  references: ["CompTIA A+ Core 2 Security"]
},

{
  id: "C2-SEC-Q025",
  core: "Core 2",
  domain: "Security",
  difficulty: "Medium",
  topic: "Data Disposal",
  question: "Which method provides the MOST secure way to dispose of a failed hard drive containing sensitive company information?",
  choices: [
    "Physical destruction",
    "Quick format",
    "Delete all files",
    "Recycle Bin"
  ],
  answer: "Physical destruction",
  explanation: "For failed drives containing sensitive data, physical destruction is often the most secure disposal method because the data cannot be reliably erased if the drive no longer functions.",
  examTip: "Sensitive failed drive = destroy it.",
  memoryTrick: "No drive, no data.",
  commonMistake: "Deleting files does not permanently remove data.",
  references: ["CompTIA A+ Core 2 Security"]
}];