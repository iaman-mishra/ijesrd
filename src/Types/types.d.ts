import { SxProps, Theme } from "@mui/material/styles";

declare global {
  interface IRoute {
    label: string;
    href: string;
    icon?: React.JSX.Element;
  }

  interface NavigationTabProps {
    routes: IRoute[];
    orientation: "vertical" | "horizontal";
    isCentered: boolean;
    style: SxProps<Theme>;
    showIcon?: boolean;
  }

  type IStyle = Record<string, SxProps<Theme>>;

  interface INavDrawerButton {
    routes: IRoute[];
  }

  interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
  }

  interface AnimatedCounterProps {
    value: number;
    className?: string;
    duration?: number;
    margin?: string;
    decimals?: number;
  }

  type SectionHeaderVariants = "primary" | "secondary";

  interface ISectionHeader {
    title: string;
    description?: string;
    variant?: SectionHeaderVariants;
  }

  interface Step {
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  interface AnimatedCardsWrapperProps {
    steps: Step[];
    header: React.ReactNode;
  }
}

export {};
