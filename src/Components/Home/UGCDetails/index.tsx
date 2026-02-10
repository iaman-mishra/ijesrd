import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import SectionHeader from "@/Components/Common/SectionHeader";
import { ugcApprovalDetails } from "@/constants/data";

const UGCDetails: React.FC = () => {
  return (
    <Box component={"section"} sx={style.section}>
      <SectionHeader title={"UGC Approved Journal"} />

      <Table sx={style.table}>
        <TableHead sx={{ backgroundColor: "primary.main" }}>
          <TableRow>
            <TableCell
              align="center"
              colSpan={2}
              sx={{ color: "primary.contrastText", fontWeight: 600 }}
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
                  backgroundColor: "action.hover",
                },
              }}
            >
              <TableCell
                sx={{
                  fontWeight: 600,
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
    </Box>
  );
};

const style = {
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
  table: {
    maxWidth: { xs: "100%", lg: "80%" },
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    margin: "0 auto",
  },
} satisfies IStyle;

export default UGCDetails;
