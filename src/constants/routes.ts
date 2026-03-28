import {
  House,
  BadgeInfo,
  BookOpenText,
  Microscope,
  Users,
  FileText,
  Upload,
  ShieldCheck,
  Archive,
  MessageCircleQuestionMark,
  type LucideIcon,
} from "lucide-react";

export interface IRoute {
  label: string;
  href?: string;
  icon?: LucideIcon;
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },

  {
    label: "Journal",
    children: [
      { label: "About Journal", href: "/about", icon: BadgeInfo },
      { label: "Aims & Scope", href: "/aims-scope", icon: Microscope },
      { label: "Editorial Board", href: "/editorial-board", icon: Users },
      {
        label: "Peer Review Process",
        href: "/peer-review",
        icon: FileText,
      },
    ],
  },

  {
    label: "Publications",
    children: [
      {
        label: "Current Issue",
        href: "/issues/current",
        icon: BookOpenText,
      },
      { label: "All Issues", href: "/issues", icon: Archive },
      { label: "Articles", href: "/articles", icon: FileText },
    ],
  },

  {
    label: "For Authors",
    children: [
      { label: "Submit Paper", href: "/submit-paper", icon: Upload },
      {
        label: "Author Guidelines",
        href: "/author-guidelines",
        icon: FileText,
      },
      {
        label: "Publication Fees",
        href: "/publication-fees",
        icon: FileText,
      },
      { label: "Copyright Form", href: "/copyright", icon: FileText },
    ],
  },

  {
    label: "Policies",
    children: [
      {
        label: "Publication Ethics",
        href: "/publication-ethics",
        icon: ShieldCheck,
      },
      {
        label: "Plagiarism Policy",
        href: "/plagiarism-policy",
        icon: ShieldCheck,
      },
      {
        label: "Open Access Policy",
        href: "/open-access",
        icon: ShieldCheck,
      },
      {
        label: "Withdrawal Policy",
        href: "/withdrawal-policy",
        icon: ShieldCheck,
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
    icon: MessageCircleQuestionMark,
  },
];
