import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Link, useLocation } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { Button } from "@mui/joy";
import { Sheet } from "@mui/joy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import Button from '@mui/joy/Button';

export default function CardVariants() {
  const value = useLocation();
  const data = value.state;
  const keys = Object.keys(data);

  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Button
        sx={{
         backgroundColor: "#458844ba",
          alignSelf: "flex-start",
          position: "fixed",
          left: "0em",
          color: "white",
          "&:hover": {
            backgroundColor: "#a2bc69", // Customize hover background color
            cursor: "pointer",  
          },
        }}
      >
        <Link to={"/"}>
          <ArrowBackIcon />
        </Link>
      </Button>
      <Box
        sx={{
          // width: '100%',
          width: "40%",
          maxWidth: "40%",
          height: "fit-content",
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Table>
              <TableBody>
                {keys.map((key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      <b>{key}</b>
                    </TableCell>
                    <TableCell>{data[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </Sheet>
  );
}
