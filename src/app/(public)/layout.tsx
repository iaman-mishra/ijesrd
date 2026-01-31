import { ReactNode } from "react";
import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { Box } from "@mui/material";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
