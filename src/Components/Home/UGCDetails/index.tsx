import React, { CSSProperties } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import SectionHeader from "@/Components/Common/SectionHeader";
import ugcImage from "@/assets/images/UGC.webp";
import { ugcApprovalDetails } from "@/constants/data";
import Image from "next/image";

const UGCDetails: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <SectionHeader title={"UGC Approved Journal"} />

      <Box sx={{ position: "relative" }}>
        <Table
          sx={{
            textAlign: "center",
            maxWidth: { xs: "100%", lg: "80%" },
            marginX: "auto",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            backgroundColor: "bg.main",
            border: "1px solid rgba(0, 0, 0, 0.08)",
          }}
        >
          <TableHead
            sx={{
              backgroundColor: "primary.main",
              "& .MuiTableCell-root": {
                borderBottom: "none",
              },
            }}
          >
            <TableRow>
              <TableCell
                align="center"
                colSpan={2}
                sx={{
                  fontWeight: "bold",
                  color: "text.secondary",
                }}
              >
                UGC Approval Details
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ugcApprovalDetails.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(even)": {
                    backgroundColor: "primary.100",
                  },
                  "&:hover": {
                    backgroundColor: "primary.200",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                  }}
                >
                  {row.label}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Image
          src={ugcImage}
          alt="UGC Approval"
          style={style.backgroundImage as CSSProperties}
        />
      </Box>
    </Box>
  );
};

const style: IStyle = {
  section: {
    width: "100%",
    paddingX: "15px",
    paddingY: {
      xs: "40px",
      md: "60px",
      xl: "80px",
    },
    marginX: "auto",
    maxWidth: {
      md: "720px",
      lg: "992px",
      xl: "1140px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  backgroundImage: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    opacity: 0.08,
  },
};

export default UGCDetails;
