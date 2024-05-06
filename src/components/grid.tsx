import * as React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import AccordionIndicator from "./filter";
import { Outlet } from "react-router-dom";
import ButtonAppBar from "./tabchild";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
interface ListItem {
  key: string;
  value: string;
}

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

const typeList: ListItem[] = [
  { key: "Type1", value: "KML" },
  { key: "Type2", value: "SHL",},
  { key: "Type3", value: "CSV" },
];

export default function BasicGrid() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
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
    <>
      <Grid style={{ width: '100%', display: 'flex', justifyContent:'space-evenly',backgroundColor: '#71ab8d', }}>
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'secondary',}}>
        <TabList
          disableUnderline
          sx={{
            p: 0.2,
            gap: 2,
            bgcolor: '#71ab8d',
            color:'white',
            [`& .${tabClasses.root}`]: { // Apply to all tabs
              borderRadius: '0.5em',
              color: 'black',
            },
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: 'sm',
              borderRadius:'0.5em',
              bgcolor: 'background.surface',
              color:'black'
            },
          }}
        >
          <Tab disableIndicator sx={{fontWeight:500}}>My Content</Tab>
          <Tab disableIndicator sx={{fontWeight:500}}>Groups</Tab>
          <Tab disableIndicator sx={{fontWeight:500}}>Organisation</Tab>
          <Tab disableIndicator sx={{fontWeight:500}}>Public</Tab>
        </TabList>
      </Tabs>
    </Grid>
      <ButtonAppBar />
      <Grid container spacing={0.3} sx={{ flexGrow: 1, height: "100%" }}>
        <Grid xs={2}>
          <Item variant="plain">
            <Box sx={{ width: "100%", backgroundColor: "none" }}>
              <Stack spacing={2}>
                <Item sx={{ textAlign: "center" }}>Filters</Item>
                {/* <Item>  <AccordionIndicator number='First' name='User Type' labels={['Super Admin', 'Admin', 'User']} />
          <AccordionIndicator number='second' name='Roles' labels={['Role1', 'Role2', 'Role3']} />
          <AccordionIndicator number='third' name='Recent Logins' labels={['Login1', 'Login2', 'Login3']} /></Item> */}
                <Grid sx={{ ml: "0" }}><b>Filter By type</b></Grid>
                {typeList.map((item) => (
                  <Grid key={item.key} sx={{ ml: 2 }}>
                      <FormControlLabel
                      control={
                        <Checkbox
                        size="small"
                          checked={selectedValues.includes(item.value)}
                          onChange={handleChange}
                          value={item.value}
                          sx={{padding:'0.3em',pl:'1.5em'}}
                        />
                      }
                      label={item.value}
                    />
                  </Grid>
                ))}
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid xs={10}>
          <Item>
            <Outlet />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
