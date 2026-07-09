import {
  Trophy,
  Award,
  Medal,
  FileText,
  Code,
  Monitor,
  Brain,
  CheckCircle,
  RotateCcw,
  Camera,
  Bug,
  Gamepad2,
  Icon,
} from "lucide-react";
import {
  Menu,
  X,
  User,
  Crosshair,
  Briefcase,
  Workflow,
  Wrench,
  Mail,
} from "lucide-react";
import { styleText } from "util";

//  nav link

export const navItems = [
  { id: "profile", label: "PROFILE", icon: User },
  { id: "skills", label: "LOADOUT", icon: Crosshair },
  { id: "missions", label: "MISSIONS", icon: Briefcase },
  { id: "workflow", label: "PIPELINE", icon: Workflow },
  { id: "tools", label: "ARSENAL", icon: Wrench },
  { id: "achievements", label: "ACHIEVEMENTS", icon: Trophy },
  { id: "contact", label: "INVITE", icon: Mail },
];

//  Profile data

export const profileData = {
  player: {
    name: "HARSHKUMAR PATEL",
    level: 27,
    status: "ONLINE",
    role: "GAME QA TESTER / GAMEPLAY TESTER",
    avatar: "/profile_harsh1.png",
  },

  bio: { 
    description:
      "A Game QA Tester with hands-on experience in testing PC and mobile gaming applications. Skilled in validating gameplay frontend, scoring logic, and other game features to delivery qualitative gaming user experience. Proficient in test management activities and experience working in different process methodologies. Self-organized with strong attention to detail, able to collaborate effectively with developers, designers, and QA teams in a fast-paced environment. Have growing mindset and continuous learning thrives toward new trends and technologies in gaming industry. ",
  },

  education: [
    {
      degree: "MCA (Big Data Analytics)",
      university: "Parul University",
      year: "2026",
      location: "Gujarat, India",
      color: "primary",
    },
    {
      degree: "B.Com",
      university: "Veer Narmad South Gujarat University",
      year: "2021",
      color: "secondary",
    },
  ],
  
  statsSummary: [
    {
      value: "3+",
      label: "MISSIONS COMPLETED",
      colorClass: "neon-text-cyan",
    },
    {
      value: "70+",
      label: "BUGS DETECTED",
      colorClass: "neon-text-green",
    },
    {
      value: "3",
      label: "CERTIFICATIONS",
      colorClass: "neon-text-purple",
    },
    {
      value: "10+",
      label: "TOOLS MASTERED",
      colorClass: "text-neon-orange",
    },
  ],
};

// stats data

export const stats = [
  { label: "Bug Detection", value: 92, color: "cyan" as const },
  { label: "Gameplay Coverage", value: 88, color: "green" as const },
  { label: "Documentation", value: 85, color: "purple" as const },
  { label: "Tool Expertise", value: 90, color: "orange" as const },
];

//  skills data

export const skills = [
  {
    icon: Brain,
    title: "QA Concepts",
    description: "Core testing methodologies and frameworks",
    items: ["SDLC","STLC","GDLC", "GTLC", "Agile/Scrum", "E2E Testing"],
    color: "cyan" as const,
  },
  {
    icon: Wrench,
    title: "Testing Tools",
    description: "Industry-standard QA and tracking tools",
    items: ["JIRA", "Bugzilla", "TestRail", "Trello"],
    color: "green" as const,
  },
  {
    icon: Monitor,
    title: "Platforms",
    description: "Gaming platforms and distributions",
    items: ["Steam", "Epic Games", "Unity", "Unreal","Play Store"],
    color: "purple" as const,
  },
  {
    icon: Code,
    title: "Programming",
    description: "Development languages for automation",
    items: ["C", "C++"],
    color: "orange" as const,
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Recording and reporting tools",
    items: ["OBS Studio", "Screen Recorder", "Google Docs"],
    color: "cyan" as const,
  },
];

// special skills data

export const coreSkills = [
  "Gameplay Test Coverage",
  "Feature-to-Test Case Traceability",
  "Regression Testing",
  "Cross-Platform Testing",
  "Performance Profiling",
  "Exploratory Testing",
  "Usability Feedback",
  "Bug Reproduction",
];

// Missions Data
export interface Mission {
  id: string;
  title: string;
  subtitle: string;
  status: "completed" | "in-progress";
  objectives: string[];
  testingScope: string[];
  bugsFound: string[];
  tools: string[];
  color: "cyan" | "green";
}

// project 

export const missions: Mission[] = [
  {
    id: "HorizonX Playr",
    title: "HorizonX Playr",
    subtitle: "GTA V Roleplay, GTA V Online Testing & Mobile Game Testing",
    status: "completed" as const,
    color: "cyan" as const,
    objectives: [
      "Tested games like GTA 5, Fortnite, mobile word games, and GTA 5 roleplay servers to ensure a smooth and issue-free user experience.", 
      "Performed gameplay testing, validation testing, mechanics, mission flow, player interaction, server economy, roleplay features, and multiplayer stability testing for Grand Theft Auto 5 Roleplay (GTA 5 RP) and Red Dead Redemption 2 Roleplay (RDR2 RP) community servers.", 
      "Validated game mission checkpoints for GTA 5 online race games, save-load functionality, respawn behavior, custom missions, event triggers, and NPC activities.", 
      "Validated driving mechanics, vehicle handling, and damage models using GDD.", 
      "Installed hardware configurations and tested devices like PS controller, keyboard and mouse input responsiveness for interactive device gameplay experience.", 
      "Performed smoke, functional, UI, and regression testing for features, level progressions, player controls, animations, and UAT testing for overall game flow and smoother gaming UX.", 
      "Tested different screen resolutions, compatibility, aspect ratios, and window modes in all different graphics settings.", 
      "Reported, documented, and tracked bugs in Jira with proper reproduction steps, evidence, priority, and severity.", 
      "Investigated, discussed and reported bugs with details steps to reproduce, actual and expected result and additional details in Jira and manage bug statuses.", 
      "Proficient in the Microsoft Office suite Apps (e.g., Word, PowerPoint, Excel) for testing documentations and artifacts.", 
      "Collaborated with to developers and designers to improve stability, balance, and overall user experience and related issues.", 
      "Managed various gaming and server updates relates testing, estimated QA efforts and prioritization of test execution.",
    ],
    testingScope: [
      "Misson Flow",
      "Server Economy",
      "Level Progression",
      "Save-Load Functionality",      
      "Respwan Behavior",
      "UI/UX",
      "Animations Testing",
    ],
    bugsFound: [
      "The .50 Pistol fires with a suppressed sound while on foot because the suppressor is attached, but after getting into a vehicle, the suppressor is removed from the weapon during drive-by shooting.",
      "Gun skin changes randomly between custom and default during cutscenes, failing to load the correct skin.",
      "Car boosting alarm did not trigger for the police when the player started the car boosting feature in the GTA 5 roleplay server.",
      "Mini game functionality in GTA 5 RP server does not trigger when the player interacts with the mini game object.",
      "After Mini game completion, the player is not rewarded with the correct in-game currency or items.",
      "Player crashes when attempting a wrong hack in the mini-game on the GTA 5 RP server.",
    ],
    tools: ["Trello","JIRA","TestRail","txAdmin","Dolu","OBS Studio","Discord"],
  },
{
    id: "fortnite",
    title: "FORTNITE",
    subtitle: "Gameplay & Systems Testing",
    status: "completed" as const,
    color: "cyan" as const,
    objectives: [
      "Manual gameplay testing on PC platform",
      "Comprehensive movement and shooting mechanics validation",
      "Building system and inventory management testing",
      "Matchmaking and network stability assessment",
      "Regression testing for seasonal content updates",
      "Gameplay balance and usability feedback collection",
    ],
    testingScope: [
      "Movement",
      "Shooting",
      "Building",
      "Inventory",
      "Matchmaking",
      "UI/UX",
    ],
    bugsFound: [
      "FPS drops during intense building sequences",
      "Client crashes when switching weapons rapidly",
      "UI elements overlapping on certain resolutions",
      "Latency spikes during cross-server matchmaking",
      "Audio desync in squad communication",
    ],
    tools: ["JIRA", "OBS Studio", "Steam", "Discord"],
  },

  {
    id: "roblox",
    title: "ROBLOX",
    subtitle: "Experience & Platform Testing",
    status: "completed" as const,
    color: "green" as const,
    objectives: [
      "Multi-experience gameplay validation",
      "Character movement and camera system testing",
      "UI consistency and in-game purchase flow testing",
      "Exploratory testing during live gameplay sessions",
      "Cross-platform compatibility testing (PC & Mobile)",
    ],
    testingScope: [
      "Character Movement",
      "Camera System",
      "UI Elements",
      "In-App Purchases",
      "Asset Loading",
      "Animations",
    ],
    bugsFound: [
      "Asset loading failures in complex experiences",
      "Collision detection issues with custom meshes",
      "Animation blending artifacts during state transitions",
      "Scripting errors causing gameplay freezes",
      "Touch input inconsistencies on mobile devices",
    ],
    tools: ["Trello", "Screen Recorder", "Google Docs", "Roblox Studio"],
  },
];

//  workflow steps data

export const workflowSteps = [
  {
    icon: Gamepad2,
    title: "GAMEPLAY",
    description: "Execute test cases and exploratory testing",
    color: "primary",
  },
  {
    icon: Bug,
    title: "BUG FOUND",
    description: "Identify and reproduce the issue",
    color: "destructive",
  },
  {
    icon: Camera,
    title: "EVIDENCE",
    description: "Capture screenshots and video proof",
    color: "accent",
  },
  {
    icon: FileText,
    title: "REPORT",
    description: "Document in bug tracking system",
    color: "neon-orange",
  },
  {
    icon: RotateCcw,
    title: "RETEST",
    description: "Verify fix after development",
    color: "secondary",
  },
  {
    icon: CheckCircle,
    title: "APPROVED",
    description: "Confirm resolution and close",
    color: "secondary",
  },
];

//  tools data

export const tools = [
  {
    name: "JIRA",
    category: "Bug Tracking",
    description: "Issue tracking and project management",
    
  },
  {
    name: "Bugzilla",
    category: "Bug Tracking",
    description: "Open-source bug tracking system",
  },
  {
    name: "TestRail",
    category: "Test Management",
    description: "Test case management platform",
  },
  {
    name: "Trello",
    category: "Project Management",
    description: "Visual project organization",
  },
  {
    name: "Unity Profiler",
    category: "Performance",
    description: "Game performance analysis tool",
  },
  {
    name: "Unreal Tools",
    category: "Development",
    description: "Unreal Engine debugging suite",
  },
  {
    name: "Steam",
    category: "Platform",
    description: "PC gaming distribution platform",
  },
  {
    name: "Epic Games",
    category: "Platform",
    description: "Game store and launcher",
  },
  {
    name: "Play Store",
    category: "Platform",
    description: "Game store and launcher",
  },
  {
    name: "OBS Studio",
    category: "Recording",
    description: "Screen capture and streaming",
  },
  {
    name: "Google Docs",
    category: "Documentation",
    description: "Collaborative document editing",
  },
];

//  Achivements Data
export const achievements = [
  
    {
    id: "claude",
    title: "Claude 101",
    issuer: "Anthropic",
    icon: Trophy,
    color: "primary",
    rarity: "RARE",
    progress: 100, // 🔥 Completed
    unlocked: true, // already unlocked
  },

  {
    id: "agile",
    title: "Agile for Beginners",
    issuer: "Great Learning",
    icon: Trophy,
    color: "primary",
    rarity: "RARE",
    progress: 100, // 🔥 completed
    unlocked: true, // already unlocked
  },
  {
    id: "dbms",
    title: "DBMS",
    issuer: "Scaler Topics",
    icon: Award,
    color: "secondary",
    rarity: "EPIC",
    progress: 100, // 🔒 in progress
    unlocked: false,
  },
  {
    id: "web",
    title: "Web Designing",
    issuer: "IIHT",
    icon: Medal,
    color: "accent",
    rarity: "LEGENDARY",
    progress: 100, // 🔒 early stage
    unlocked: false,
  },
  {
    id: "istqb",
    title: "ISTQB CTFL",
    issuer: "ISTQB",
    icon: Trophy,
    color: "primary",
    rarity: "RARE",
    progress: 8, // 🔥 in progress
    unlocked: true, // already unlocked
  },
];
