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
import {
  Button,
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
const userName = "bharat";
interface Group {
  value: string;
  label: string;
}

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

export default function GroupAppBar() {
  const [showGroupSelect, setShowGroupSelect] = React.useState(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [openEdit, setEdit] = React.useState<boolean>(false);
  const [opendel, setdel] = React.useState<boolean>(false);
  const [openShare, setShare] = React.useState<boolean>(false);
  const [editShare, setEditShare] = React.useState<boolean>(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const [upload, toggleUpload] = React.useState(false);
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
          {userName && (
            <Button
              color="success"
              variant="outlined"
              startDecorator={<FileUploadOutlinedIcon />}
              onClick={() => {
                toggleUpload(true);
              }}
            >
              Upload
            </Button>
          )}
          <Modal
            open={upload}
            onClose={() => toggleUpload(false)}
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                sx: { backgroundColor: "hsla(341, 0%, 94%, 0.4)" },
              },
            }}
          >
            <ModalDialog variant="outlined" role="dialog">
              <DialogTitle>
                <FileUploadOutlinedIcon />
                Upload data
              </DialogTitle>
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
                    <FormLabel>Name</FormLabel>
                    <Input color="success" size="sm" sx={{ width: "600px" }} />
                    <FormLabel>Description</FormLabel>
                    <Input color="success" size="md" />
                    <FormLabel>Date created</FormLabel>
                    <Input color="success" size="md" sx={{ width: "600px" }} />
                    <FormLabel>Date Last Modified</FormLabel>
                    <Input color="success" size="md" />
                    <FormLabel>Level Of Sharing</FormLabel>
                    <Select color="success">
                      <Option
                        onClick={() => setShowGroupSelect(false)}
                        value="public"
                      >
                        {" "}
                        Public
                      </Option>
                      <Option
                        onClick={() => setShowGroupSelect(false)}
                        value="organization"
                      >
                        {" "}
                        Organization
                      </Option>
                      <Option
                        onClick={() => {
                          setShowGroupSelect(true);
                        }}
                        value="Group"
                      >
                        Group
                      </Option>
                    </Select>
                    {showGroupSelect && (
                      <FormControl>
                        <FormLabel sx={{ mt: 2 }}>Select Group</FormLabel>
                        <FormGroup>
                          <List
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              flexDirection: "row",
                              maxWidth: "600px",
                              maxHeight: "100px",
                              overflowX: "scroll",
                            }}
                          >
                            {groups.map((group) => (
                              <Box>
                                <ListItem key={group.value}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <Checkbox
                                      color="success"
                                      label={group.label}
                                      value={group.value}
                                      checked={selectedValues.includes(
                                        group.value
                                      )}
                                      onChange={handleChange}
                                    />
                                  </Box>
                                </ListItem>
                              </Box>
                            ))}
                          </List>
                        </FormGroup>
                      </FormControl>
                    )}
                    <FormLabel sx={{ mt: 1 }}>Description</FormLabel>
                    <Input color="success" size="md" />
                    <FormLabel>Tags</FormLabel>
                    <Input color="success" size="md" />
                  </FormControl>
                  <br />
                  <Box>
                    <Button
                      component="label"
                      role={undefined}
                      tabIndex={-1}
                      variant="outlined"
                      color="neutral"
                      startDecorator={
                        <SvgIcon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                          </svg>
                        </SvgIcon>
                      }
                    >
                      Upload a file
                      <VisuallyHiddenInput
                        type="file"
                        accept=".kml,.shp" // Restricting to .kml and .shp files
                      />
                    </Button>
                  </Box>

                  <br />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => {
                    toggleUpload(false);
                  }}
                >
                  save
                </Button>
                <Button
                  variant="plain"
                  color="neutral"
                  onClick={() => {
                    toggleUpload(false);
                  }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </ModalDialog>
          </Modal>
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
          <Box>
            <AppsMenu />
          </Box>
          <Box>
            <MenuIconSideNavExample />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
