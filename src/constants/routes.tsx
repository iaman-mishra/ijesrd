import { BadgeInfo, BookOpenText, House, MessageCircleQuestionMark, Microscope } from "lucide-react";

export const routes: IRoute[] = [
    { label: "Home", href: "/", icon: <House /> },
    { label: "About", href: "/about", icon: <BadgeInfo /> },
    { label: "Publications", href: "/publications", icon: <BookOpenText /> },
    { label: "Research", href: "/research", icon: <Microscope /> },
    { label: "Contact", href: "/contact", icon: <MessageCircleQuestionMark /> },
];
