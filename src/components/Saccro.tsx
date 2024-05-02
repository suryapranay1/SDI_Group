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
interface AccordionL1 {
  key: string;
  l2Keys: string[];
}
const AccordionItem = styled(Typography)({
  padding: 6,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#fff",
  },
});
interface Level1def {
  key: string;
  title: string;
  childAccord: {
    key: string;
    title: string;
    mapList?: {
      key: string;
      title: string;
    }[];
  }[];
}
const Level1: Level1def[] = [
  {
    key: "general-maps",
    title: "General Maps",
    childAccord: [
      {
        key: "energy-and-environemnt",
        title: "Energy and Environment",
        mapList: [
          { key: "arable-and-forest", title: "Arable and Forest Soil" },
          { key: "ground", title: "Ground" },
          { key: "energy", title: "Energy" },
          { key: "nature-conservation", title: "Nature Conservation" },
          {
            key: "ground-water-measurement",
            title: "Environmental measurements(ground-water)",
          },
          {
            key: "air-noise-nuclear-measurements",
            title: "Environmental measurements(air-noise-nuclear)",
          },
        ],
      },
      {
        key: "society-and-health",
        title: "Society and Health",
        mapList: [
          { key: "population", title: "Population" },
          { key: "hospital-and-care", title: "Hospital and care" },
          {
            key: "ground-water-measurements",
            title: "Environmental-measurements(ground and water)",
          },
        ],
      },
      {
        key: "agriculture-and-forestry",
        title: "Agriculture and Forestry",
        mapList: [
          { key: "arable-and-forestry", title: "Arable-and-Forest-Soil" },
        ],
      },
      {
        key: "space-and-location",
        title: "Space and Location",
        mapList: [
          {
            key: "topography-terrain-altitude",
            title: "Maps(topography-terrain-altitude)",
          },
          { key: "satellite-images", title: "Satellite images" },
        ],
      },
      {
        key: "transport-and-technology",
        title: "Transport and Technology",
        mapList: [
          { key: "flight", title: "Flight" },
          { key: "rail", title: "Rail" },
          { key: "street", title: "Street" },
        ],
      },
      {
        key: "economy-and-finances",
        title: "Economy and Finances",
        mapList: [
          { key: "finance", title: "Finance" },
          { key: "economy", title: "Economy" },
        ],
      },
    ],
  },
  {
    key: "historical-incidents",
    title: "Historical Incidents",
    childAccord: [
      {
        key: "geo-hazards",
        title: "Geo Hazards",
        mapList: [
          { key: "floods-and-heavy-rain", title: "Floods and heavy rain" },
          { key: "earthquakepoints", title: "Earthquake points" },
          { key: "landslides", title: "Landslides" },
        ],
      },
    ],
  },
  {
    key: "weather-maps",
    title: "Weather Maps",
    childAccord: [
      {
        key: "climate-and-weather",
        title: "Climate and Weather",
        mapList: [{ key: "Climate1", title: "Weather-current" }],
      },
    ],
  },
  {
    key: "applications",
    title: "Applications",
    childAccord: [
      { key: "specialised-applications", title: "Specialised Applications" },
      {
        key: "geoportals-of-the-federal-states",
        title: "Geoportals of the Federal States",
      },
    ],
  },
  {
    key: "data-providers",
    title: "Data Providers",
    childAccord: [
      { key: "federation", title: "Federation" },
      {
        key: "states-and-local-authorities",
        title: "States and Local Authorities",
      },
      { key: "economy", title: "Economy" },
      { key: "science", title: "Science" },
    ],
  },
];
const LandingAccord = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState<AccordionL1[]>([]);
  const navigate = useNavigate();
  const value = useLocation();
  console.log(value.state);
  const selectedKey = value.state;
  const selectedArray = selectedKey?.split(",");
  const firstelement = selectedArray?.slice(0)[0];
  const secondelement = selectedArray?.slice(1)[0];
  const lastElement = selectedArray?.slice(-1)[0];
  // if (firstelement!==null)
  //   {
  //     setActive(firstelement);
  //   }
  useEffect(() => {
    if (firstelement && secondelement) {
      setActive([
        {
          key: firstelement,
          l2Keys: [secondelement],
        },
      ]);
    } else if (firstelement) {
      setActive([
        {
          key: firstelement,
          l2Keys: [],
        },
      ]);
    } else {
      setActive([]);
    }
  }, [firstelement, secondelement]);
  
  const toggleState=(keys:string[],level:string,status:boolean)=>{
    // console.log(keys,level,status);
    if(level==="l1"){
    setActive(prev=>{
      if(status)
        {
          return[
            ...prev,
            {
              key:keys[0],
              l2Keys:[]
            }
          ]

        }
      else{
        return prev.filter((item)=>item.key!==keys[0])
      }

    })
  }
  else if(level==="l2"){
    setActive(prev=>{
      const l1Array=prev.find((l1Item)=>l1Item.key===keys[0]);
      const otherArrayElements=prev.filter((item)=>item.key!==keys[0])
      if (l1Array){
      if(status){
        l1Array?.l2Keys.push(keys[1]);
      }
      else{
          l1Array.l2Keys=l1Array.l2Keys.filter((item)=>item!==keys[1])
      }
      otherArrayElements.push(l1Array);
    }
      return otherArrayElements
    })
  }
}
  return (
    <>
      {sidebarOpen && (
        <AccordionGroup sx={{ maxWidth: 400 }}>
          {Level1.map((item) => {
            const l1Expand=active.find((l1Item)=>l1Item.key===item.key)?true:false
            return (
              <Accordion
                expanded={l1Expand}
                onChange={(
                  event: React.SyntheticEvent,
                  expanded: boolean
                ) => {
                  toggleState([item.key],'l1',expanded)
                }}
              >
                <AccordionSummary>{item.title}</AccordionSummary>
                <AccordionDetails>
                  <AccordionGroup>
                    {item.childAccord.map(({ key, title, mapList }) =>{
                    const l1Array=active.find((l1Item)=>l1Item.key===item.key);
                     const l2Expand=l1Array?.l2Keys.find((l2Item)=>l2Item===key)?true:false
                      return mapList ? (
                        <Accordion key={key} expanded={l2Expand}
                        onChange={(
                          event: React.SyntheticEvent,
                          expanded: boolean
                        ) => {
                          toggleState([item.key,key],'l2',expanded)
                        }} 
                        >
                          <AccordionSummary>{title}</AccordionSummary>
                          <AccordionDetails>
                            {mapList?.map((mapItem) => (
                              <Stack key={mapItem.key} sx={{ ml: 2 }}>
                                <ListItemButton
                                  onClick={() => {
                                    navigate("/Updateside", {
                                      state: `${item.key},${key},${mapItem.key}`,
                                    });
                                  }}
                                >
                                  <ListItemText primary={mapItem.title} />
                                </ListItemButton>
                              </Stack>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      ) : (
                        <Stack key={key} sx={{ ml: 2 }}>
                          <ListItemButton
                            onClick={() => {
                              // navigate("/Updateside", {
                              //   state:` ${item.key},${key}`,
                              // });
                            }}
                          >
                            <ListItemText primary={title} />
                          </ListItemButton>
                        </Stack>
                      )}
                    )}
                  </AccordionGroup>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </AccordionGroup>
      )}
      {/* <GeneralMapComponent /> */}
    </>
  );
};

export default LandingAccord;