import { ReactNode } from "react";
import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
