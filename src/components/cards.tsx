import { Box, Button, Card, Grid, Stack, Typography, Divider, Checkbox } from "@mui/joy";
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
    Name: "map3",
    DateCreated: "3/1/2024",
    dateLastModified: "2/3/2024",
    Description: "gcrs map3",
    levelofsharing: "admin",
    Source: "local",
    PointOfContact: "jcgeonodetester",
    Language: "eng",
    SupplementalInformation: "No information provided",
    hello1:
      "hi everyone how are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quisquam accusantium aliquid omnis, inventore saepe, modi corporis excepturi quod suscipit obcaecati soluta perspiciatis possimus maiores eligendi temporibus cumque repellat!",
    hello2: "hi everyone how are you",
    hello3: "hi everyone how are you",
    hello4: "hi everyone how are you",
    hello5: "hi everyone how are you",
    hello6: "hi everyone how are you",
    hello7: "hi everyone how are you",
    hello8: "hi everyone how are you",
    hello9: "hi everyone how are you",
    hello10: "hi everyone how are you",
  },
  {
    Name: "Aerial Photography (Orthophoto) - 2021",
    DateCreated: "3/2/2024",
    Description:
      "Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.",
    tags: "orthophoto, ortho, aerial, imagery,  GIS",
    dateLastModified: "3/2/2024",
    levelofsharing: "Public",
  },
  {
    Name: "Aerial Photography (Orthophoto) - 2021",
    DateCreated: "3/2/2024",
    Description:
      "Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.",
    tags: "orthophoto, ortho, aerial, imagery,  GIS",
    dateLastModified: "3/2/2024",
    levelofsharing: "Public",
  },
  {
    Name: "Aerial Photography (Orthophoto) - 2021",
    DateCreated: "3/2/2024",
    Description:
      "Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.",
    tags: "orthophoto, ortho, aerial, imagery,  GIS",
    dateLastModified: "3/2/2024",
    levelofsharing: "Public",
  },
  {
    Name: "Aerial Photography (Orthophoto) - 2021",
    DateCreated: "3/2/2024",
    Description:
      "Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.",
    tags: "orthophoto, ortho, aerial, imagery,  GIS",
    dateLastModified: "3/2/2024",
    levelofsharing: "Public",
  },
];

const DataList = () => {
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
            <Card
              variant="outlined"
              key={index}
              sx={{ width: 800, mt: 3, bgcolor: "#fff" }}
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
                      naviagate("/metaData", { state: data });
                    }}
                  >
                    <Typography>
                      <b>Dataset</b>
                    </Typography>
                  </Button>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>
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
                                    color="success"
                                    value={item}
                                    label={item}
                                    slotProps={{
                                      action: ({ checked }) => ({
                                        sx: (theme) => ({
                                          ...(checked && {
                                            inset: -1,
                                            border: "2px solid",
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
                    <Button
                      variant="plain"
                      color="primary"
                      onClick={() => setEdit(true)}
                    >
                      <EditOutlinedIcon />
                    </Button>
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
                      <ModalDialog variant="outlined" role="dialog">
                        <DialogTitle>
                          <WarningRoundedIcon />
                          Confirmation
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                          Are you sure you want to edit the metadata?
                        </DialogContent>
                        <DialogActions>
                          <Button
                            variant="solid"
                            color="primary"
                            onClick={() => setEdit(false)}
                          >
                            edit
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
                        <DialogContent sx={{overflow:'hidden'}}> 
                          {[
                            { key: "group1", value: "Bharat-Manoj" },
                            { key: "group2", value: "Bharat-pranay" },
                            { key: "group3", value: "pranay-Manoj" },
                            { key: "group4", value: "srineevas-Manoj" },
                           
                          ].map((item) => (
                            <Grid key={item.key} sx={{ ml: 2}}>
                              <FormControlLabel
                              
                                control={
                                  <Checkbox
                                    checked={selectedValues.includes(
                                      item.value
                                    )}
                                    onChange={handleChange}
                                    value={item.value}
                                    sx={{padding:'1em',pl:'1.5em'}}
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
              <Typography level="body-sm">{data.Name}</Typography>
              <Stack>
                <Typography>{data.Description}</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Box>
                  <Typography>
                    Level of Sharing : <b>{data.levelofsharing}</b>
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    Date Created : <b>{data.DateCreated}</b>
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    Date Last modified : <b>{data.dateLastModified}</b>
                  </Typography>
                  <Typography />
                </Box>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DataList;