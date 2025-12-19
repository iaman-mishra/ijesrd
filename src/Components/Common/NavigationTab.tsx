"use client";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { usePathname } from "next/navigation";

const NavigationTab = ({
  routes,
  orientation,
  isCentered,
  style,
  showIcon = false,
}: NavigationTabProps) => {
  const pathname = usePathname();

  const currentTab =
    Array.isArray(routes) && routes.some((r) => r.href === pathname)
      ? pathname
      : false;

  return (
    <Tabs
      value={currentTab}
      orientation={orientation}
      textColor="inherit"
      indicatorColor="primary"
      centered={isCentered}
      sx={style}
    >
      {routes.map((route, index) => (
        <Tab
          key={index}
          label={route.label}
          value={route.href}
          component={Link}
          href={route.href}
          iconPosition="start"
          icon={showIcon ? route.icon : undefined}
        />
      ))}
    </Tabs>
  );
};

export default NavigationTab;
