import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import InputFileUpload from "./fileupload";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import MenuIconSideNavExample from "./filterbutton";
import AppsMenu from "./view";
import {  styled,} from "@mui/joy";



export default function GroupAppBar() {
  return (
    <Box sx={{ width: "100%", height: "sx" }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            placeholder="search"
            variant="outlined"
            color="success"
            startDecorator={<SearchIcon />}
            sx={{
              width: ".3",
              color: "green",
              ml: "10em",
              mr: "16em",
              flexGrow: "0.5",
            }}
          />
          {/* <Box>
            <AppsMenu />
          </Box> */}
          <Box>
            <MenuIconSideNavExample />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
