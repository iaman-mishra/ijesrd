import Footer from "@/Components/Footer";
import NavBar from "@/Components/Header";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

const style = {
  rootLayout: {
    maxWidth: "1280px",
    marginX: "auto",
  },
} satisfies IStyle;

export default layout;
