import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  Divider,
  Checkbox,
} from "@mui/joy";
import React, { useState } from "react";
import StorageIcon from "@mui/icons-material/Storage";
import { useNavigate } from "react-router-dom";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Backdrop, FormControlLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Person from "@mui/icons-material/Person";
import Apartment from "@mui/icons-material/Apartment";
import PublicIcon from "@mui/icons-material/Public";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
const cardData = [
  {
    GroupName: "Group1",
    GroupOwner: "Owner1",
    NoOfGroupMembers: "10",
    DateCreated: "3/1/2024",
    dateLastModified: "2/3/2024",
    member: [
      ["member1", "2/3/2024", "2/3/2024", "GCRS"],
      ["member2", "2/3/2024", "2/3/2024", "GCRS"],
      ["member3", "2/3/2024", "2/3/2024", "GCRS"],
      ["member4", "2/3/2024", "2/3/2024", "GCRS"],
      ["member5", "2/3/2024", "2/3/2024", "GCRS"],
      ["member6", "2/3/2024", "2/3/2024", "GCRS"],
      ["member7", "2/3/2024", "2/3/2024", "GCRS"],
      ["member8", "2/3/2024", "2/3/2024", "GCRS"],
      ["member9", "2/3/2024", "2/3/2024", "GCRS"],
      ["member10", "2/3/2024", "2/3/2024", "GCRS"],
      ["member11", "2/3/2024", "2/3/2024", "GCRS"],
      ["member12", "2/3/2024", "2/3/2024", "GCRS"],
    ],
    Data:[["al609_mic_metadata1","Owner1","3/2/2024","2/3/2024"],
    ["bl609_mic_metadata","Owner1","3/2/2024","2/3/2024"],
    ["cl609_mic_metadata","Owner2","3/1/2023","2/4/2024"],
    ["dl609_mic_metadata","Owner3","3/2/2023","2/5/2024"],
    ["el609_mic_metadata","Owner4","3/1/2022","12/6/2024"],
    ["fl609_mic_metadata","Owner5","3/1/2021","10/6/2024"]
  ],
  },
  {
    GroupName: "Group2",
    GroupOwner: "Owner2",
    DateCreated: "3/2/2024",
    NoOfGroupMembers: "10",
    dateLastModified: "3/2/2024",
    member: [
      ["member1", "2/3/2024", "2/3/2024", "GCRS"],
      ["member2", "2/3/2024", "2/3/2024", "GCRS"],
      ["member3", "2/3/2024", "2/3/2024", "GCRS"],
      ["member4", "2/3/2024", "2/3/2024", "GCRS"],
      ["member5", "2/3/2024", "2/3/2024", "GCRS"],
      ["member6", "2/3/2024", "2/3/2024", "GCRS"],
    ],
  },
  {
    GroupName: "Group3",
    GroupOwner: "Owner3",
    NoOfGroupMembers: "10",
    DateCreated: "4/2/2024",
    dateLastModified: "5/2/2024",
    member: [
      ["member1", "2/3/2024", "2/3/2024", "GCRS"],
      ["member2", "2/3/2024", "2/3/2024", "GCRS"],
      ["member3", "2/3/2024", "2/3/2024", "GCRS"],
      ["member4", "2/3/2024", "2/3/2024", "GCRS"],
      ["member5", "2/3/2024", "2/3/2024", "GCRS"],
      ["member6", "2/3/2024", "2/3/2024", "GCRS"],
    ],
  },
  {
    GroupName: "Group4",
    GroupOwner: "Owner4",
    NoOfGroupMembers: "10",
    DateCreated: "6/2/2024",
    dateLastModified: "7/2/2024",
    member: [
      ["member1", "2/3/2024", "2/3/2024", "GCRS"],
      ["member2", "2/3/2024", "2/3/2024", "GCRS"],
      ["member3", "2/3/2024", "2/3/2024", "GCRS"],
      ["member4", "2/3/2024", "2/3/2024", "GCRS"],
      ["member5", "2/3/2024", "2/3/2024", "GCRS"],
      ["member6", "2/3/2024", "2/3/2024", "GCRS"],
    ],
  },
  {
    GroupName: "Group5",
    GroupOwner: "Owner5",
    NoOfGroupMembers: "10",
    DateCreated: "8/2/2024",
    dateLastModified: "3/2/2024",
    member: [
      ["member1", "2/3/2024", "2/3/2024", "GCRS"],
      ["member2", "2/3/2024", "2/3/2024", "GCRS"],
      ["member3", "2/3/2024", "2/3/2024", "GCRS"],
      ["member4", "2/3/2024", "2/3/2024", "GCRS"],
      ["member5", "2/3/2024", "2/3/2024", "GCRS"],
      ["member6", "2/3/2024", "2/3/2024", "GCRS"],
    ],
  },
];
const userGroupName = "Bharat";
const GroupList = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openEdit, setEdit] = React.useState<boolean>(false);
  const [opendel, setdel] = React.useState<boolean>(false);
  const [openShare, setShare] = React.useState<boolean>(false);
  const [editShare, setEditShare] = React.useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const naviagate = useNavigate();
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
    <Stack marginLeft={"2rem"}>
      <Grid container spacing={1}>
        {/* <Grid md={1} xs="auto">
                <Divider orientation="vertical" />
              </Grid> */}
        <Grid xs="auto">
          {cardData.map((data, index) => (
            // if (data.levelofsharing === "admin") {
            // return (
            <Card
              variant="outlined"
              key={index}
              sx={{ width: "auto", minWidth: 800, mt: 3, bgcolor: "#fff" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <StorageIcon sx={{ mr: "1em", mt: "0.2em" }} />
                  <Button
                    sx={{
                      backgroundColor: "#458844ba",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#a2bc69",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      naviagate("/groupData", { state: data });
                    }}
                  >
                    <Typography>
                      <b>{data.GroupName}</b>
                    </Typography>
                  </Button>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    {userGroupName && (
                      <Button
                        variant="plain"
                        sx={{
                          color: "grey",
                          "&:hover": {
                            backgroundColor: "hsla(220, 3%, 48%, 0.5)",
                            cursor: "pointer",
                          },
                        }}
                        onClick={() => setShare(true)}
                      >
                        <IosShareIcon />
                      </Button>
                    )}
                    <Modal
                      open={openShare}
                      onClose={() => setShare(false)}
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          sx: { backgroundColor: "hsla(341, 0%, 94%, 0.4)" },
                        },
                      }}
                    >
                      <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <b>Share</b>
                            <Button
                              variant="plain"
                              color="neutral"
                              sx={{
                                padding: "none",
                                "&:hover": {
                                  backgroundColor: "hsla(45, 3%, 85%, 1)", // Customize hover background color
                                  cursor: "pointer",
                                  color: "black",
                                },
                              }}
                              onClick={() => {
                                setShare(false);
                              }}
                            >
                              <CloseIcon />
                            </Button>
                          </Box>
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography>Set Sharing Level</Typography>
                            <Button
                              startDecorator={<RestartAltIcon />}
                              sx={{
                                backgroundColor: "grey",
                                padding: "none",
                                "&:hover": {
                                  backgroundColor: "hsla(45, 3%, 85%, 1)", // Customize hover background color
                                  cursor: "pointer",
                                  color: "black",
                                },
                              }}
                            >
                              Revert
                            </Button>
                          </Box>
                          <RadioGroup
                            aria-label="Your plan"
                            name="people"
                            defaultValue="Individual"
                          >
                            <List
                              sx={{
                                minWidth: 240,
                                "--List-gap": "0.5rem",
                                "--ListItem-paddingY": "1rem",
                                "--ListItem-radius": "8px",
                                "--ListItemDecorator-size": "32px",
                              }}
                            >
                              {[
                                "Owner (owner of the item has access)",
                                "Organisation (All members of your organisation has access)",
                                "Everyone(public)",
                              ].map((item, index) => (
                                <ListItem
                                  variant="outlined"
                                  key={item}
                                  sx={{ boxShadow: "sm" }}
                                >
                                  <ListItemDecorator>
                                    {
                                      [
                                        <Person />,
                                        <Apartment />,
                                        <PublicIcon />,
                                      ][index]
                                    }
                                  </ListItemDecorator>
                                  <Radio
                                    overlay
                                    color="success"
                                    value={item}
                                    label={item}
                                    slotProps={{
                                      action: ({ checked }) => ({
                                        sx: (theme) => ({
                                          ...(checked && {
                                            inset: -1,
                                            border: "2px solid",
                                            borderColor: "green",
                                          }),
                                        }),
                                      }),
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </RadioGroup>
                          <Divider />
                          <Typography component="h6">
                            Set group sharing
                          </Typography>
                          <br />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Typography>None yet</Typography>
                            <Button
                              variant="outlined"
                              color="success"
                              startDecorator={<Diversity3OutlinedIcon />}
                              onClick={() => {
                                setEditShare(true);
                              }}
                            >
                              Edit group sharing
                            </Button>
                          </Box>
                        </DialogContent>
                        <Divider />
                        <DialogActions>
                          <Button
                            variant="solid"
                            sx={{
                              color: "white",
                              backgroundColor: "grey",
                              "&:hover": {
                                backgroundColor: "hsla(45, 3%, 85%, 1)", // Customize hover background color
                                cursor: "pointer",
                              },
                            }}
                            onClick={() => {
                              setShare(false);
                            }}
                          >
                            Close
                          </Button>
                          <Button
                            variant="solid"
                            sx={{
                              color: "white",
                              backgroundColor: "#458844ba",
                              "&:hover": {
                                backgroundColor: "#a2bc69", // Customize hover background color
                                cursor: "pointer",
                              },
                            }}
                            onClick={() => {
                              setShare(false);
                            }}
                          >
                            Save
                          </Button>
                        </DialogActions>
                      </ModalDialog>
                    </Modal>
                  </Box>
                  <Box>
                    {userGroupName && (
                      <Button
                        variant="plain"
                        sx={{
                          color: "grey",
                          "&:hover": {
                            backgroundColor: "hsla(220, 3%, 48%, 0.5)",
                            cursor: "pointer",
                          },
                        }}
                        onClick={() => setOpen(true)}
                      >
                        <DeleteForever />
                      </Button>
                    )}
                    <Modal
                      open={open}
                      onClose={() => setOpen(false)}
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          sx: { backgroundColor: "hsla(341, 0%, 94%, 0.4)" },
                        },
                      }}
                    >
                      <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>
                          <WarningRoundedIcon />
                          Confirmation
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                          Are you sure you want to delete your metadata?
                        </DialogContent>
                        <DialogActions>
                          <Button
                            variant="solid"
                            sx={{
                              color: "black",
                              backgroundColor: "grey",
                              "&:hover": {
                                backgroundColor: "hsla(45, 3%, 85%, 1)", // Customize hover background color
                                cursor: "pointer",
                              },
                            }}
                            onClick={() => {
                              setOpen(false);
                              setdel(true);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="plain"
                            color="neutral"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </Button>
                        </DialogActions>
                      </ModalDialog>
                    </Modal>
                    <Modal
                      open={opendel}
                      onClose={() => setdel(false)}
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          sx: { backgroundColor: "hsla(341, 0%, 94%, 0.4)" },
                        },
                      }}
                    >
                      <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>Confirmation</DialogTitle>
                        <Divider />
                        <DialogContent>
                          Your data is succesfully deleted
                        </DialogContent>
                        <DialogActions>
                          <Button
                            variant="solid"
                            sx={{
                              color: "black",
                              backgroundColor: "grey",
                              "&:hover": {
                                backgroundColor: "hsla(45, 3%, 85%, 1)", // Customize hover background color
                                cursor: "pointer",
                              },
                            }}
                            onClick={() => {
                              setdel(false);
                            }}
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </ModalDialog>
                    </Modal>
                  </Box>
                  <Box>
                    {userGroupName && (
                      <Button
                        variant="plain"
                        color="primary"
                        onClick={() => setEdit(true)}
                      >
                        <EditOutlinedIcon />
                      </Button>
                    )}
                    <Modal
                      open={openEdit}
                      onClose={() => setEdit(false)}
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          sx: { backgroundColor: "hsla(341, 0%, 94%, 0.4)" },
                        },
                      }}
                    >
                      <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>
                          <WarningRoundedIcon />
                          Confirmation
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                          Are you sure you want to edit your metadata?
                        </DialogContent>
                        <DialogActions>
                          <Button
                            variant="outlined"
                            sx={{
                              color: "black",
                              "&:hover": {
                                backgroundColor: "hsla(45, 3%, 85%, 1)", // Customize hover background color
                                cursor: "pointer",
                              },
                            }}
                            onClick={() => {
                              setEdit(false);
                              naviagate("/editData", { state: data });
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="plain"
                            color="neutral"
                            onClick={() => setEdit(false)}
                          >
                            Cancel
                          </Button>
                        </DialogActions>
                      </ModalDialog>
                    </Modal>
                    <Modal
                      open={editShare}
                      onClose={() => {
                        setEditShare(false);
                      }}
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          sx: { backgroundColor: "hsla(175, 100%, 100%, 0.3)" },
                        },
                      }}
                    >
                      <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>List Of Shared Groups</DialogTitle>
                        <Divider />
                        <DialogContent sx={{ overflow: "hidden" }}>
                          {[
                            { key: "group1", value: "Group1" },
                            { key: "group2", value: "Group2" },
                            { key: "group3", value: "Group3" },
                            { key: "group4", value: "Group4" },
                          ].map((item) => (
                            <Grid key={item.key} sx={{ ml: 2 }}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={selectedValues.includes(
                                      item.value
                                    )}
                                    onChange={handleChange}
                                    value={item.value}
                                    sx={{ padding: "1em", pl: "1.5em" }}
                                  />
                                }
                                label={item.value}
                              />
                            </Grid>
                          ))}
                        </DialogContent>
                      </ModalDialog>
                    </Modal>
                  </Box>
                </Box>
              </Box>

              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Box></Box>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography>
                      Name Of Owner : <b>{data.GroupOwner}</b>
                    </Typography>
                    <Typography>
                      Date Created : <b>{data.DateCreated}</b>
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "10em" }}>
                    <Typography>
                      No Of Group Members : <b>{data.NoOfGroupMembers}</b>
                    </Typography>
                    <Typography>
                      Date Last modified : <b>{data.dateLastModified}</b>
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Card>
            // );}
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default GroupList;