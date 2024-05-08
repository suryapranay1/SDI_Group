import * as React from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

import {
  Box,
  Checkbox,
  Container,

  FormControl,
  FormLabel,
  List,
  ListItem,
  Option,
  Typography,
} from "@mui/joy";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Select } from "@mui/joy";
import { FormGroup } from "@mui/material";

const userName = "bharat";

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

export default function InputFormProps() {
  const navigate = useNavigate();
  const value = useLocation();
  const data = value.state;
  console.log(data);
  const [showGroupSelect, setShowGroupSelect] = React.useState(false);


//   const [selectedOption, setSelectedOption] = React.useState<string | null>(null);


  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const updatedSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    setSelectedValues(updatedSelectedValues);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" sx={{ fontSize: "1.5em" }}>
          Edit the meta data
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              color="success"
              disabled
              defaultValue={data.Name}
              size="sm"
              sx={{ width: "600px" }}
            />
            <FormLabel>Description</FormLabel>
            <Input color="success" defaultValue={data.Description} size="md" />
            <FormLabel>Date created</FormLabel>
            <Input
              color="success"
              disabled
              defaultValue={data.DateCreated}
              size="md"
              sx={{ width: "600px"}}
            />
            <FormLabel>Date Last Modified</FormLabel>
            <Input
              color="success"
              disabled
              defaultValue={data.dateLastModified}
              size="md"
            />
            <FormLabel>Level Of Sharing</FormLabel>
            <Select color="success" defaultValue="public" >
              <Option onClick={()=>setShowGroupSelect(false)} value="public"> Public</Option>
              <Option onClick={()=>setShowGroupSelect(false)} value="organization"> Organization</Option>
              <Option onClick={()=>{setShowGroupSelect(true);}} value="Group">Group</Option>
            </Select>
            {showGroupSelect && (
              <FormControl>
                <FormLabel sx={{mt:2}}>Select Group</FormLabel>
                <FormGroup >
        <List  sx={{display:'flex',flexWrap:'wrap',flexDirection:'row',maxWidth:'600px',maxHeight:'100px',overflowX:'scroll'}}>
          {groups.map((group) => (
            <Box>
            <ListItem key={group.value}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
              <Checkbox
              color="success"
                label={group.label}
                value={group.value}
                checked={selectedValues.includes(group.value)}
                onChange={handleChanges}
              />
              </Box>
            </ListItem>
            </Box>
          ))}
        </List>
      </FormGroup>
              </FormControl>
            )}
            <FormLabel sx={{mt:1}}>Description</FormLabel>
            <Input color="success" defaultValue={data.Description} size="md" />
            <FormLabel>Tags</FormLabel>
            <Input color="success" defaultValue={data.tags} size="md" />
          </FormControl>
          <br />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                width: "10%",
                backgroundColor: "#458844ba",
                "&:hover": {
                  backgroundColor: "#a2bc69", // Customize hover background color
                  cursor: "pointer",
                },
                mr: 2,
              }}
            >
              SAVE
            </Button>
            <Button
              color="neutral"
              sx={{ width: "10%" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Discard
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
