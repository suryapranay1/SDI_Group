import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Option,
  Select,
  styled,
} from "@mui/joy";
import { Typography } from "@mui/material"
import { Height } from "@mui/icons-material";
export default function TabsBasic1() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);
  const [incidentInfo, UpdateInfo] = React.useState(false);
  const [emergencyAlerts, UpdateEmergency] = React.useState(false);
  const [stockpileLocation, Updatestockpile] = React.useState(false);
  const [accord, Updateaccord] = React.useState(true);
  const [submit, updateSubmit] = React.useState(false);
  const [saveNext, updateSave] = React.useState(true);
  const handleNext = () => {
    if(horizontalValue>=0 && horizontalValue<5)
        {
            setHorizontalValue((horizontalValue) => horizontalValue + 1)
        }
        else
        {
            setHorizontalValue(0)
        }
    }
    const CustomTabs = styled(Tab)({
      fontWeight: 'bold',
      '&.Mui-selected': {
        color: '#458844ba',
  
      },
    });
  const CustomTab = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",

    marginBottom: theme.spacing(2), // Add space between each row
    "& .MuiFormLabel-root": {
      marginRight: theme.spacing(5), // Space between label and input
      minWidth: "210px", // Ensure labels have the same width for alignment
    },
    "& .MuiInput-root": {
      flexGrow: 1, // Ensure input takes up the remaining space
    },
  }));

  return (
    <>
        
          <Box>
          <Typography sx={{fontWeight:'700',mb:'1%',ml:'33%',mt:'2%'}}>
              Agency for Hydrometeorology The Committe of Environmental Protection
              </Typography>
            <Tabs
              aria-label="Basic tabs"
              value={horizontalValue}
              sx={{ backgroundColor: "white",width:'100vw'}}
            >
              <TabList
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <CustomTabs disableIndicator color="success" variant="plain">
                  Real Weather Data From station
                </CustomTabs>
                <CustomTabs disableIndicator color="success" variant="plain">
                  Weather station (status,location)
                </CustomTabs>
                <CustomTabs disableIndicator color="success" variant="plain">
                  Weather Forecast
                </CustomTabs>
                <CustomTabs disableIndicator color="success" variant="plain">
                  Hydro Station(General Info,status,location)
                </CustomTabs>
                <CustomTabs disableIndicator color="success" variant="plain">
                  Hydro,Information(river,lake,etc)
                </CustomTabs>
                <CustomTabs disableIndicator color="success" variant="plain">
                  Snow Cover
                </CustomTabs>
              </TabList>
              <TabPanel
                value={0}
                sx={{
                  backgroundColor: "white",
                  width: "40%",
                  alignSelf: "center"
                }}
              >
                <CustomTab>
                    
                  <FormLabel htmlFor="custom-station-Name" sx={{width:'20em'}}>Station Name</FormLabel>
                  <Select placeholder="Station List" name="foo" required>
                    <Option value="station1">station1</Option>
                    <Option value="station2">station2</Option>
                    <Option value="station3">station3</Option>
                    <Option value="station4">station4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-date">
                    Date
                  </FormLabel>
                  <Input 
                    type="date"
                    id="custom-date"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-air-temperature">
                    Air temperature<br></br>(in degree celcius)(at night)
                  </FormLabel>
                  <Input 
                    type="number"
                    id="custom-air-temperature"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-precipitation-day">
                    Precipitation<br></br>(mm)(During the day)
                  </FormLabel>
                  <Input 
                    type="number"
                    id="custom-precipitation-day"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-precipitation-night">
                    Precipitation<br></br>(mm)(at night)
                  </FormLabel>
                  <Input 
                    type="number"
                    id="custom-precipitation-night"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-naturalfactor-night">
                    Natural Factor<br></br>(At night)
                  </FormLabel>
                  <Input type='number'
                    id="custom-naturalfactor-night"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-snow-Height">Snow Height(cm)</FormLabel>
                  <Input type='number' id="custom-snow-Height" placeholder="Type in here…" />
                </CustomTab>
              </TabPanel>
              <TabPanel value={1} sx={{ backgroundColor: "white",
                  width: "40%",
                  alignSelf: "center", }}>
                    <Box display={"flex"}>
                    <Box mr={'2em'}>
                    <CustomTab>
                  <FormLabel htmlFor="custom-station-Name">Name</FormLabel>
                  <Select placeholder="Station List" name="foo" required>
                    <Option value="station1">station1</Option>
                    <Option value="station2">station2</Option>
                    <Option value="station3">station3</Option>
                    <Option value="station4">station4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-location">
                    Location
                  </FormLabel>
                  <Input
                    id="custom-location"
                    placeholder="Type in here…"
                    defaultValue={'Location1'}
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-elevation">
                    Elevation
                  </FormLabel>
                  <Input
                    type="number"
                    id="custom-elevation"
                    placeholder="Type in here…"
                    defaultValue={'34'}
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-installation-data">
                    Installation Data
                  </FormLabel>
                  <Input
                    
                    id="custom-installation-data"
                    placeholder="Type in here…"
                    defaultValue={'installation data'}
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-data-of-inspection">
                    Data Of Inspection
                  </FormLabel>
                  <Input
                    type="date"
                    id="custom-precipitation-night"
                    placeholder="Type in here…"
                    defaultValue={'19-11-2023'}
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-status">
                    status
                  </FormLabel>
                  <Select placeholder="status" name="foo" required>
                    <Option value="Active">Active</Option>
                    <Option value="In Active">station2</Option>
                    <Option value="station3">station3</Option>
                    <Option value="station4">station4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-data-of-inspection">
                    Condition
                  </FormLabel>
                  <Input
                    id="custom-precipitation-night"
                    placeholder="Type in here…"
                    defaultValue={'condition1'}
                  />
                </CustomTab>
                    </Box>
                    <Box>
                      <Box width={'15em'} height={'15em'} border={'2px solid green'}>

                      </Box>
                    </Box>
                    </Box>

                  
                    
              </TabPanel>
              <TabPanel value={2} sx={{
                  backgroundColor: "white",
                  width: "40%",
                  alignSelf: "center",
                }}>
              <CustomTab>
                  <FormLabel htmlFor="custom-station-Region">Region</FormLabel>
                  <Select placeholder="Station List" name="foo" required>
                    <Option value="station1">station1</Option>
                    <Option value="station2">station2</Option>
                    <Option value="station3">station3</Option>
                    <Option value="station4">station4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-date">
                    Location
                  </FormLabel>
                  <Input
                    type="date"
                    id="custom-date"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-at-night">
                    At night(in degree celcius)
                  </FormLabel>
                  <Input
                    type="number"
                    id="custom-at-night"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-during-the-day">
                    During the day(in degree celcius)
                  </FormLabel>
                  <Input
                    type="number"
                    id="custom-during-the-day"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-wind-direction">
                    wind Direction
                  </FormLabel>
                  <Input
                    type="number"
                    id="custom-precipitation-night"
                    placeholder="Type in here…"
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-wind-direction(ms)">
                    Wind Direction(m/s)
                  </FormLabel>
                  <Input type='number'
                    id="custom-wind-direction(ms)"
                    placeholder="Type in here…"
                  />
                </CustomTab>
              </TabPanel>
              <TabPanel value={3} sx={{ backgroundColor: "white",
                  width: "40%",
                  alignSelf: "center", }}>
                    <Box display={'flex'}> 
                    <Box mr={'2em'}>
                    <CustomTab>
                  <FormLabel htmlFor="custom-station-Name">Name</FormLabel>
                  <Select placeholder="Station List" name="foo" required>
                    <Option value="station1">station1</Option>
                    <Option value="station2">station2</Option>
                    <Option value="station3">station3</Option>
                    <Option value="station4">station4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-location">
                    Location
                  </FormLabel>
                  <Input
                    id="custom-location"
                    placeholder="Type in here…"
                    defaultValue={'Location1'}
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-elevation">
                    Elevation
                  </FormLabel>
                  <Input
                    type="number"
                    id="custom-elevation"
                    placeholder="Type in here…"
                    defaultValue={'34'}
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-installation-data">
                    Installation Data
                  </FormLabel>
                  <Input
                    
                    id="custom-installation-data"
                    placeholder="Type in here…"
                    defaultValue={'installation data'}
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-data-of-inspection">
                    Data Of Inspection
                  </FormLabel>
                  <Input
                    type="date"
                    id="custom-precipitation-night"
                    placeholder="Type in here…"
                    defaultValue={'19-11-2023'}
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-status">
                    status
                  </FormLabel>
                  <Select placeholder="status" name="foo" required>
                    <Option value="Active">Active</Option>
                    <Option value="In Active">station2</Option>
                    <Option value="station3">station3</Option>
                    <Option value="station4">station4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-data-of-inspection">
                    Condition
                  </FormLabel>
                  <Input
                    id="custom-precipitation-night"
                    placeholder="Type in here…"
                    defaultValue={'condition1'}
                  />
                </CustomTab>
                    </Box>
                    <Box >
                    <Box width={'15em'} height={'15em'} border={'2px solid green'}>
                    </Box>
                    </Box>
                    </Box>
                    
                    
                    
              </TabPanel>
              <TabPanel value={4} sx={{ backgroundColor: "white",
                  width: "40%",
                  alignSelf: "center", }}>
                    <CustomTab>
                  <FormLabel htmlFor="custom-station-Name">Watershed</FormLabel>
                  <Select placeholder="pick Base on the Station Location" name="foo" required>
                    <Option value="station1">station1</Option>
                    <Option value="station2">station2</Option>
                    <Option value="station3">station3</Option>
                    <Option value="station4">station4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-river-name">
                    River Name
                  </FormLabel>
                  <Input
                    id="custom-rikver-name"
                    placeholder="Type in here…"
                    defaultValue={'River1'}
                  />
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-hydrostation">
                    Hydrostation
                  </FormLabel>
                  <Input
                    id="custom-hydrostation"
                    placeholder="Type in here…"
                    defaultValue={'hydrostation'}
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-water-level">
                    water level(cm)
                  </FormLabel>
                  <Input
                    type="number"
                    id="custom-water-level"
                    placeholder="Type in here…"
                    defaultValue={'40'}
                  />
                </CustomTab>
                <CustomTab>
                <FormLabel htmlFor="custom-data-of-inspection">
                    Water Consumption(m3/s)
                  </FormLabel>
                  <Input
                    type="number"
                    id="custom-precipitation-night"
                    placeholder="Type in here…"
                    defaultValue={'10'}
                  />
                </CustomTab>
              </TabPanel>
              <TabPanel value={5} sx={{backgroundColor:"white"}}>
              </TabPanel>
            </Tabs>
          </Box>
          {submit && (
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                updateSave(true);
                updateSubmit(false);
              }}
            >
              Submit
            </Button>
          )}
          {saveNext && (
            <Button variant="outlined" color="success" onClick={handleNext}>
              Save&Next
            </Button>
          )}
        </>
  );
}
