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
import { Alert, Button, Stack, Textarea } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";

import GroupAddBar from "./groupadd";
import {
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormLabel,
  List,
  ListItem,
  Modal,
  ModalDialog,
  Option,
  Select,
  SvgIcon,
  styled,
} from "@mui/joy";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Backdrop, FormGroup } from "@mui/material";
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
interface Group {
  value: string;
  label: string;
}
const groups: Group[] = [
  { value: "group1", label: "Group 1" },
  { value: "group2", label: "Group 2" },
  { value: "group3", label: "Group 3" },
  { value: "group4", label: "Group 4" },
  { value: "group5", label: "Group 5" },
  { value: "group6", label: "Group 6" },
  { value: "group7", label: "Group 7" },
  { value: "group8", label: "Group 8" },
  { value: "group9", label: "Group 9" },
  { value: "group10", label: "Group 10" },
  { value: "group11", label: "Group 11" },
  { value: "group12", label: "Group 12" },
  { value: "group13", label: "Group 13" },
  { value: "group14", label: "Group 14" },
];
export default function GroupHeader() {
  const [showGroupSelect, setShowGroupSelect] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const [modOpen, setModOpen] = React.useState(false);
  const [addMem, setAddMem] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  React.useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAlert]);

  const handleOpen = () => {
    setModOpen(true);
  };
  const handleClose = () => {
    setModOpen(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const newSelectedValues = [...selectedValues];

    if (checked) {
      // Add the value if checked
      if (!newSelectedValues.includes(value)) {
        newSelectedValues.push(value);
      }
    } else {
      // Remove the value if unchecked
      const index = newSelectedValues.indexOf(value);
      if (index > -1) {
        newSelectedValues.splice(index, 1);
      }
    }
    console.log(newSelectedValues);

    setSelectedValues(newSelectedValues);
  };
  return (
    <Box sx={{ width: "100%", height: "sx" }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            endDecorator={<AddIcon />}
            color="success"
            onClick={() => setModOpen(true)}
          >
            Add Group
          </Button>
          <Modal
            open={modOpen}
            onClose={handleClose}
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                sx: { backgroundColor: "hsla(341, 0%, 94%, 0.4)" },
              },
            }}
          >
            <ModalDialog variant="outlined" role="dialog">
              <DialogTitle>Add New Group</DialogTitle>
              <Divider />
              <DialogContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <FormControl>
                    <FormLabel>Group Name</FormLabel>
                    <Input color="success" size="sm" sx={{ width: "600px" }} />

                    <FormLabel>Description</FormLabel>
                    <Input color="success" size="md" />
                    <FormLabel>Group Owner Name</FormLabel>
                    <Input color="success" size="sm" sx={{ width: "600px" }} />
                    <FormLabel>Group Rules</FormLabel>
                    <Textarea
                      color="success"
                      size="sm"
                      sx={{ width: "600px" }}
                    />
                    <FormLabel>Tags</FormLabel>
                    <Input color="success" size="md" />
                  </FormControl>
                </Box>
                <Box>
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="solid"
                    color="success"
                    endDecorator={<AddIcon />}
                    onClick={() => setAddMem(true)}
                  >
                    Add Members
                  </Button>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => {
                    setModOpen(false);
                  }}
                >
                  save
                </Button>
                <Button
                  variant="plain"
                  color="neutral"
                  onClick={() => {
                    setModOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </ModalDialog>
          </Modal>
          <Modal open={addMem} onClose={() => setAddMem(false)}>
            <ModalDialog>
              <DialogTitle sx={{ alignSelf: "center", fontWeight: 900 }}>
                Invitation
              </DialogTitle>
              <DialogContent sx={{ width: 500 }}>
                Please enter the E-Mail address that you want to sent
              </DialogContent>
              <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  setAddMem(false);
                }}
              >
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>E-Mail</FormLabel>
                    <Input autoFocus required color="success" />
                  </FormControl>
                  <Button
                    variant="solid"
                    color="success"
                    sx={{ width: 80, alignSelf: "center" }}
                    type="submit"
                    onClick={() => setShowAlert(true)}
                  >
                    Send
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
          {showAlert && (
            <Alert
              sx={{
                position: "fixed",
                top: "5%",
                left: "50%",
                transform: "translate( -50%)",
                zIndex: 1000,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:'green',
                color:'white'
              }}
              variant="soft"
              color="success"
              endDecorator={
                <Button
                  size="sm"
                  variant="solid"
                  color="success"
                  onClick={() => setShowAlert(false)}
                  sx={{color:"black"}}
                >
                  Close
                </Button>
              }
            >
              Your invitation sent successfully.
            </Alert>
          )}

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
