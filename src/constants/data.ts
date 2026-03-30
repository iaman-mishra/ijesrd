import {
  Eye,
  Gauge,
  GraduationCap,
  LockKeyholeOpen,
  Mail,
  Map,
  Phone,
} from "lucide-react";
import GoogleIcon from "@/assets/svg/GoogleIcon.svg";
import LinkedInIcon from "@/assets/svg/LinkedInIcon.svg";

export const whyPublishData = [
  {
    icon: GraduationCap,
    title: "Global Indexing",
    description:
      "Indexed in Scopus, Web of Science, and major academic databases for maximum reach.",
  },
  {
    icon: Gauge,
    title: "Rapid Peer Review",
    description:
      "Rigorous yet efficient double-blind peer review process with timely feedback.",
  },
  {
    icon: LockKeyholeOpen,
    title: "Open Access",
    description:
      "Full gold open access model, ensuring your work is freely available to the global public.",
  },
  {
    icon: Eye,
    title: "High Visibility",
    description:
      "Strategic social media promotion and community outreach for every published paper.",
  },
];

export const statsData = [
  { number: 7, icon: "", label: "Impact Factor" },
  { number: 3, icon: "k+", label: "Global Citations" },
  { number: 120, icon: "+", label: "Active Researchers" },
  { number: 7, icon: "Days", label: "Average Review Time" },
];

export const latestArticles = [
  {
    id: 1,
    category: "Original Research",
    title:
      "Optimizing Neural Network Architectures for Edge Computing in Autonomous Robotics",
    authors: "Dr. Elena Rostova, Dr. Marcus Thorne, et al.",
    doi: "10.1245/ijesrd.2024.082",
    link: "#",
  },
  {
    id: 2,
    category: "Review Article",
    title:
      "A Comprehensive Survey on Machine Learning Techniques for Healthcare Diagnostics",
    authors: "Dr. Sarah Johnson, Dr. Amit Verma",
    doi: "10.1245/ijesrd.2024.091",
    link: "#",
  },
  {
    id: 3,
    category: "Case Study",
    title:
      "Implementation of Smart Grid Systems Using IoT and AI in Urban Cities",
    authors: "Dr. Li Wei, Dr. Carlos Mendes",
    doi: "10.1245/ijesrd.2024.105",
    link: "#",
  },
  {
    id: 4,
    category: "Original Research",
    title:
      "Blockchain-Based Secure Data Sharing Mechanisms in Distributed Networks",
    authors: "Dr. Ahmed Khan, Dr. Priya Sharma",
    doi: "10.1245/ijesrd.2024.118",
    link: "#",
  },
];

export const footerUrls = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Editorial Board", href: "/editorial-board" },
      { label: "Archives", href: "/archives" },
    ],
  },
  {
    title: "For Authors",
    links: [
      { label: "Submit Paper", href: "/submit-paper" },
      { label: "Author Guidelines", href: "/author-guidelines" },
      { label: "Publication Charges", href: "/publication-charges" },
      { label: "Indexing", href: "/indexing" },
    ],
  },
];

export const contactInfo = [
  {
    icon: Map,
    label: "Address",
    value: "Rithala, Rohini, New Delhi, Delhi, 110085, India",
    url: "#",
  },
  {
    icon: Mail,
    label: "Email",
    value: "editor.ijesrd@gmail.com",
    url: "mailto:editor.ijesrd@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 1234567890",
    url: "tel:+911234567890",
  },
];


export const socialButtons = [
  {
    provider: "google",
    icon: GoogleIcon,
    label: "Continue with Google",
  },
  {
    provider: "linkedin",
    icon: LinkedInIcon,
    label: "Continue with LinkedIn",
  },
];
