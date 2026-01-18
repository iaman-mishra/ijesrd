import { Box } from "@mui/material";
import { ReactNode } from "react";
import { LenisProvider } from "./LenisProvider";
import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LenisProvider>
      <Box component={"div"} sx={style.layout}>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </Box>
    </LenisProvider>
  );
};

export default layout;

const style = {
  layout: {
    width: "100%",
    maxWidth: "1270px",
    boxShadow: 10,
    marginX: "auto",
    bgcolor: "background.default",
  },
} satisfies IStyle;
