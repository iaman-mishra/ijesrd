import { Button } from "@mui/material";
import AchadmiaEdu from "@/assets/index-platforms/achadmia-edu.webp";
import Crossref from "@/assets/index-platforms/crossrefe.png";
import GoogleScholar from "@/assets/index-platforms/google-scholar.webp";
import IssnLogo from "@/assets/index-platforms/issn_logo.webp";
import Issuu from "@/assets/index-platforms/issuu.webp";
import OpenAccess from "@/assets/index-platforms/open-access-logo.webp";
import RefSeek from "@/assets/index-platforms/ref-seek.png";
import ResearcherId from "@/assets/index-platforms/researcher-id.png";
import ResearchGate from "@/assets/index-platforms/researchgate.svg?url";
import RoadIssn from "@/assets/index-platforms/road-issn.webp";
import Scribd from "@/assets/index-platforms/scribd.gif";
import SemanticScholar from "@/assets/index-platforms/semantic-scholar.webp";
import {
  BookOpenCheck,
  Brain,
  ChartNoAxesCombined,
  CreditCard,
  Gauge,
  NotebookText,
  Paperclip,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const features = [
  {
    icon: Brain,
    title: "Cutting-Edge Research",
    description:
      "We publish the latest scientific discoveries and research articles in various fields of science.",
  },
  {
    icon: Gauge,
    title: "Fast Publication",
    description:
      "Quick review process ensures your research reaches the academic community without unnecessary delays.",
  },
  {
    icon: ShieldCheck,
    title: "Peer Reviewed",
    description:
      "All articles undergo rigorous peer review to maintain the highest standards of academic excellence.",
  },
  {
    icon: Users,
    title: "Expert Editorial Board",
    description:
      "Our editorial team consists of renowned scientists and researchers from top institutions worldwide.",
  },
  {
    icon: Star,
    title: "High Impact Factor",
    description:
      "Published in journals with high impact factors, increasing the visibility of your research work.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Global Reach",
    description:
      "Your research gets worldwide recognition through our extensive network and digital platform.",
  },
];

export const statsData = [
  { number: 5, icon: "k+", label: "Published Articles" },
  { number: 120, icon: "+", label: "Active Researchers" },
  { number: 7, icon: "", label: "Impact Factor" },
];

export const ugcApprovalDetails = [
  {
    label: "Name of the Journal:",
    value:
      "International Journal of Engineering & Science Research and Development",
  },
  {
    label: "ISSN:",
    value: "2456-9283",
  },
  {
    label: "Discipline:",
    value: "Multidisciplinary",
  },
  {
    label: "Publisher:",
    value: "IJESRD Publication",
  },
  {
    label: "Country Of Publication:",
    value: "India",
  },
  {
    label: "Processing Charges:",
    value: <Button variant="outlined">View Charges</Button>,
  },
];

export const publishStepsData = [
  {
    step: 1,
    title: "Submit Paper",
    description: "Upload your research paper with all required documents.",
    icon: <Paperclip />,
  },
  {
    step: 2,
    title: "Review Process",
    description: "Our expert reviewers evaluate your paper for quality.",
    icon: <BookOpenCheck />,
  },
  {
    step: 3,
    title: "Pay Fees",
    description: "Complete the publication fee payment to proceed.",
    icon: <CreditCard />,
  },
  {
    step: 4,
    title: "Paper Published",
    description: "Your paper is officially published and available.",
    icon: <NotebookText />,
  },
];

export const IndexImages = [
  {
    name: "Achadmia Edu",
    logo: AchadmiaEdu,
  },
  {
    name: "Crossref",
    logo: Crossref,
  },
  {
    name: "Google Scholar",
    logo: GoogleScholar,
  },
  {
    name: "ISSN Logo",
    logo: IssnLogo,
  },
  {
    name: "ISSUU",
    logo: Issuu,
  },
  {
    name: "Open Access",
    logo: OpenAccess,
  },
  {
    name: "RefSeek",
    logo: RefSeek,
  },
  {
    name: "ResearcherId",
    logo: ResearcherId,
  },
  {
    name: "ResearchGate",
    logo: ResearchGate,
  },
  {
    name: "RoadIssn",
    logo: RoadIssn,
  },
  {
    name: "Scribd",
    logo: Scribd,
  },
  {
    name: "SemanticScholar",
    logo: SemanticScholar,
  },
];
