import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Stack,
  styled,
  Typography,
} from "@mui/joy";
import "ol/ol.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ListItemButton, ListItemText, IconButton } from "@mui/material";
// import GeneralMapComponent from './general-map-component';

interface ListItem {
  key: string;
  value: string;
}
const AccordionItem = styled(Typography)({
  padding: 6,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#fff",
  },
});
const generalItems = {
  energy: "Energy and Environment",
  health: "Society and Health",
  agriculture: "Agriculture and Forestry",
  space: "Space and Location",
  transport: "Transport and Technology",
  economy: "Economy and Finances",
};
const historicalItems = {
  historical: "Geo Hazards",
};
const weatherItems = {
  weather: "Climate and Weather",
};

const providerItems = {
  federation: "Federation",
  states: "States and Local Authorrities",
  econamy: "Economy",
  science: "Science",
};
const applicationsItems = {
  special: "Specialised Applications",
  geoportal: "Geoportals of the Federal States",
};
const LandingAccord = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const value=useLocation();
  const selectedKey=value.state;
  const selectedArray = selectedKey?.split(",");
  const firstelement = selectedArray?.slice(0)[0];
  const secondelement = selectedArray?.slice(1)[0];
  const lastElement = selectedArray?.slice(-1)[0];
  console.log(selectedArray);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const handleAccordionClick = (key1: string, key2: string, key3: string) => {
    const newSelectedKeys = [];
    newSelectedKeys.push(key1, key2, key3);
    setSelectedKeys(newSelectedKeys);
  };
  const getSelectedArray = (
    currentArrayKey: string
  ): { key: string; value: string }[] => {
    switch (currentArrayKey) {
      case "energy":
        return energyItems;
      case "health":
        return societyItems;
      case "agriculture":
        return agriculture;
      case "space":
        return spaceAndLocation;
      case "transport":
        return TransportAndTechnology;
      case "economy":
        return EconomyAndFinance;
      default:
        return empty;
    }
  };
  const Histarray = (Key: string): { key: string; value: string }[] => {
    switch (Key) {
      case "historical":
        return GeoHazards;
      default:
        return empty;
    }
  };
  const weathermap = (Key: string): { key: string; value: string }[] => {
    switch (Key) {
      case "weather":
        return ClimateAndWeather;
      default:
        return empty;
    }
  };
  const empty: ListItem[] = [];
  const energyItems: ListItem[] = [
    { key: "energy1", value: "Arable and Forest Soil" },
    { key: "energy2", value: "Ground" },
    { key: "energy3", value: "Energy" },
    { key: "energy4", value: "Nature Conservation" },
    { key: "energy5", value: "Environmental measurements(ground,water)" },
    { key: "energy6", value: "Environmental measurements(air,noise,nuclear)" },
  ];
  const societyItems: ListItem[] = [
    { key: "society1", value: "Population" },
    { key: "society2", value: "Hospital and care" },
    { key: "society3", value: "Environmental-measurements(ground,water)" },
  ];
  const agriculture: ListItem[] = [
    { key: "agriculture", value: "Arable-and-Forest-Soil" },
  ];
  const spaceAndLocation: ListItem[] = [
    { key: "space1", value: "Maps(topography,terrain,altitude)" },
    { key: "space2", value: "Satellite images" },
  ];
  const TransportAndTechnology: ListItem[] = [
    { key: "Transport1", value: "Flight" },
    { key: "Transport2", value: "Rail" },
    { key: "Transport3", value: "Street" },
  ];
  const EconomyAndFinance: ListItem[] = [
    { key: "Economy1", value: "Finance" },
    { key: "Economy2", value: "Economy" },
  ];
  const GeoHazards: ListItem[] = [
    { key: "Geo1", value: "Floods and heavy rain" },
    { key: "Geo2", value: "Earthquake points" },
    { key: "Geo3", value: "Landslides" },
  ];
  const ClimateAndWeather: ListItem[] = [
    { key: "Climate1", value: "Weather-current" },
  ];
  const SpecialisedApplications: ListItem[] = [
    { key: "Application1", value: "Application" },
    { key: "Application2", value: "Application" },
  ];

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
      {sidebarOpen && (
        <AccordionGroup sx={{ maxWidth: 400 }}>
          <Accordion >
            <AccordionSummary>General Maps</AccordionSummary>
            <AccordionDetails>
              <AccordionGroup>
                {Object.entries(generalItems).map(([key, value]) => (
                  <Accordion key={key}>
                    <AccordionSummary>{value}</AccordionSummary>
                    <AccordionDetails>
                      {getSelectedArray(key).map((item) => (
                        <Stack key={item.key} sx={{ ml: 2 }}>
                          {
                            <ListItemButton
                              // checked={selectedValues.includes(item.value)} // Optional for selection logic
                              // onChange={handleChange}                   // Optional for selection logic
                              onClick={() => {
                                navigate("/Updateside", {
                                  state: `General Maps,${value},${item.value}`,
                                });
                              }}
                            >
                              <ListItemText primary={item.value} />
                            </ListItemButton>
                          }
                        </Stack>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Historical Incidents</AccordionSummary>
            <AccordionDetails>
              <AccordionGroup>
                {Object.entries(historicalItems).map(([key, value]) => (
                  <Accordion key={key}>
                    <AccordionSummary>{value}</AccordionSummary>
                    <AccordionDetails>
                      {Histarray(key).map((item) => (
                        <Stack key={item.key}>
                          <ListItemButton
                            // checked={selectedValues.includes(item.value)}
                            // onChange={handleChange}
                            onClick={() => {
                              handleAccordionClick(
                                "Historical Incidents",
                                value,
                                item.value
                              );
                              navigate("/Updateside", {
                                state: `Historical Incidents,${value},${item.value}`,
                              });
                            }}
                          >
                            {item.value}
                          </ListItemButton>
                        </Stack>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Weather Maps</AccordionSummary>
            <AccordionDetails>
              <AccordionGroup>
                {Object.entries(weatherItems).map(([key, value]) => (
                  <Accordion key={key}>
                    <AccordionSummary>{value}</AccordionSummary>
                    <AccordionDetails>
                      {weathermap(key).map((item) => (
                        <Stack key={item.key}>
                          <Link
                            to={`/Updateside/${selectedKeys}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <ListItemButton
                              // checked={selectedValues.includes(item.value)}
                              // onChange={handleChange}

                              onClick={() => {
                                handleAccordionClick(
                                  "Weather Maps",
                                  value,
                                  item.value
                                );
                              }}
                            >
                              {item.value}
                            </ListItemButton>
                          </Link>
                        </Stack>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>Applications</AccordionSummary>
            <AccordionDetails>
              <Stack gap={1}>
                {Object.entries(applicationsItems).map(([key, value]) => (
                  <AccordionItem
                    key={key}
                    onClick={() => {
                      // toggleApplicationMaps(key);
                    }}
                  >
                    {value}
                  </AccordionItem>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Data Providers</AccordionSummary>
            <AccordionDetails>
              <Stack gap={1}>
                {Object.entries(providerItems).map(([key, value]) => (
                  <AccordionItem
                    key={key}
                    onClick={() => {
                      // toggleProviderMaps(key);
                    }}
                  >
                    {value}
                  </AccordionItem>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      )}
      {/* <GeneralMapComponent /> */}
    </>
  );
};

export default LandingAccord;
