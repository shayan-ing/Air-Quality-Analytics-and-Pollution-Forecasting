import {
  LayoutDashboard,
  BarChart3,
  BrainCircuit,
  Map,
  HeartPulse,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Prediction",
    path: "/prediction",
    icon: BrainCircuit,
  },
  {
    name: "Maps",
    path: "/maps",
    icon: Map,
  },
  {
    name: "Health",
    path: "/health",
    icon: HeartPulse,
  },
];

export default navigation;