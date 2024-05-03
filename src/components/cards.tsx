import {
  Box,
  Button,
  Card,
  Grid,
  Input,
  Stack,
  Typography,
  Divider,
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
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const cardData = [
  {
    Name: "map3",
    Datecreated: "3/1/2024",
    dateLastModified: "2/3/2024",
    Description: "gcrs map3",
    levelofsharing: "admin",
    Source: "local",
    PointOfContact: "jcgeonodetester",
    Language: "eng",
    SupplementalInformation: "No information provided",
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
  const naviagate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
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
                <Box >
                  <StorageIcon sx={{ mr: "1em", mt: "0.2em" }} />
                  <Button
                    sx={{
                      backgroundColor: "#458844ba",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#a2bc69", // Customize hover background color
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
                <Box sx={{display:'flex'}}>
                <Box>
                  <Button
                    variant="outlined"
                    color="danger"
                    onClick={() => setOpen(true)}
                  >
                    <DeleteForever />
                  </Button>
                  
                  <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog variant="outlined" role="alertdialog">
                      <DialogTitle>
                        <WarningRoundedIcon />
                        Confirmation
                      </DialogTitle>
                      <Divider />
                      <DialogContent>
                        Are you sure you want to discard all of your notes?
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="solid"
                          color="danger"
                          onClick={() => {
                            setOpen(false);
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
                  </Box>
                  <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setEdit(true)}
                  >
                    <EditOutlinedIcon />
                  </Button>
                  <Modal open={openEdit} onClose={() => setEdit(false)}>
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
