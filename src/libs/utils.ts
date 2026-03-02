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
      "Professional game tester with hands on experience in game testing focusing on front-end and back-end testing, perform various testing activities and help organization and team to deliver high quality gaming solution. ",
  },

  education: [
    {
      degree: "MCA (Big Data Analytics)",
      university: "Parul University",
      year: "2025",
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
    title: "Word Sort Game / Zen Word Game",
    subtitle: "Gameplay & Systems Testing",
    status: "completed" as const,
    color: "cyan" as const,
    objectives: [
      "Manual gameplay testing across PC, Mobile, and Console platforms",
      "Functional, smoke, regression, and exploratory testing execution",
      "Core gameplay mechanics validation including input responsiveness and progression logic",
      "Bug identification, logging, and lifecycle tracking",
      "Verification of fixes through retesting and stability validation",
      "Cross-team collaboration with developers, QA leads, and project managers",
      "Multi-build testing using APK Editor for recurring and new issues",
      "Gameplay balance evaluation and usability feedback collection",
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
      "Game freezes when triggering multiple boosters simultaneously",
      "Progression levels not unlocking after word completion",
      "Touch input delay on low-end Android devices",
      "UI misalignment across different screen resolutions",
      "Ad reward not granted after video completion",
      "App crashes when switching between themes rapidly",
    ],
    tools: ["JIRA","Bugzilla","TestRail","APK Editor","Mobile Screen Recording","Discord"],
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
    id: "istqb",
    title: "ISTQB CTFL",
    issuer: "ISTQB",
    icon: Trophy,
    color: "primary",
    rarity: "RARE",
    progress: 8, // 🔥 in progress
    unlocked: true, // already unlocked
  },

    {
    id: "istqb",
    title: "ISTQB CT-GaMe",
    issuer: "ISTQB",
    icon: Trophy,
    color: "primary",
    rarity: "RARE",
    progress: 0, // 🔥 in progress
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
];
