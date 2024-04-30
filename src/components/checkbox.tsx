import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Checkbox, FormControlLabel, Grid, ListItemButton, Typography } from "@mui/material";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";
interface ListItem {
  key: string;
  value: string;
}

const CheckboxList = () => {
  const navigate = useNavigate();
  // const { selectedKeys } = useParams();
  const value=useLocation();
  const selectedKeys=value.state;
  const selectedArray = selectedKeys?.split(",");
  const firstelement = selectedArray?.slice(0)[0];
  const secondelement = selectedArray?.slice(1)[0];
  const lastElement = selectedArray?.slice(-1)[0];
  // console.log(lastElement);
  // console.log(firstelement);
  // console.log(secondelement);
  console.log(selectedArray);
  const getSelectedArray = (): { key: string; value: string }[] => {
    switch (lastElement) {
      case "Arable and Forest Soil":
        return arableForest;
      case "Ground":
        return ground;
      case "Energy":
        return energy;
      case "Nature Conservation":
        return natureconversation;
      case "Environmental measurements(ground,water)":
        return environmentalwater;
      case "Environmental measurements(air,noise,nuclear)":
        return environmentalair;
      case "Population":
        return SocietyAndHealth;
      case "Hospital and care":
        return hospitalCare;
      case "Environmental-measurements(ground,water)":
        return environmentGround;
      case "Arable-and-Forest-Soil":
        return AgricultureAndForesty;
      case "Maps(topography,terrain,altitude)":
        return maps;
      case "Satellite images":
        return satelliteImages;
      case "Flight":
        return flight;
      case "Rail":
        return rail;
      case "Street":
        return street;
      case "Finance":
        return finance;
      case "Economy":
        return Economy;
      case "Floods and heavy rain":
        return floods;
      case "Earthquake points":
        return earthquake;
      case "Landslides":
        return landslides;
      case "Weather-current":
        return weatherCurrent;
      default:
        return empty;
    }
  };
  const arableForest: ListItem[] = [
    { key: "available-water", value: "Water available to plants in summer" },
    {
      key: "available-plants",
      value: "Water Available To Plants In The Summer Months",
    },
    { key: "vegetation-indices", value: "Vegetaion Indices And Clouds" },
    {
      key: "vegetation-annual",
      value: "Vegetation Indices, Annual, Sentinel-2",
    },
    {
      key: "vegetation-monthly",
      value: "Vegetation Indices, Monthly, Sentinel-2",
    },
  ];

  const ground: ListItem[] = [
    { key: "soils-organic", value: "Soils, Organic Matter" },
    { key: "geology", value: "Geology, Tectonics And Ice Margins" },
  ];

  const energy: ListItem[] = [
    { key: "opencastmining", value: "Opencast Mining And Pits" },
    { key: "hydropower", value: "Hydropower" },
  ];

  const natureconversation: ListItem[] = [
    { key: "biosphere", value: "Protected Area Biosphere Reserves" },
    { key: "landscapearea", value: "Protected Area Protected Landscape Areas" },
  ];

  const environmentalwater: ListItem[] = [
    { key: "biological-water", value: "Water, Biological Water Quality" },
  ];

  const environmentalair: ListItem[] = [
    { key: "air-ozone", value: "Air, Ozone, Human Health" },
    { key: "ozone-plants", value: "Air, Ozone, Plants Aot40" },
    { key: "no2", value: "Air, Nitrogen Dioxide (No2), Annual Mean Values" },
    {
      key: "vegetation-monthly",
      value: "Vegetation Indices, Monthly, Sentinel-2",
    },
  ];

  /* population*/

  const SocietyAndHealth: ListItem[] = [
    { key: "gender-ratio", value: "Gender Ratio" },
    { key: "le-women", value: "Life Expectancy For Women" },
    { key: "le-men", value: "Life Expectancy For Men" },
    { key: "tajkistan-pop", value: "Tajikistan Pop Data" },
    { key: "population-density", value: "Tajikistan Pop Data" },
  ];

  const hospitalCare: ListItem[] = [
    { key: "hosiptal-beds", value: "Hospital Beds" },
  ];

  const environmentGround: ListItem[] = [
    { key: "soil-earthquake", value: "Soil, Earthquake, Historical Overview" },
  ];

  /*Agriculture*/

  const AgricultureAndForesty: ListItem[] = [
    { key: "available-water", value: "Water available to plants in summer" },
    {
      key: "available-plants",
      value: "Water Available To Plants In The Summer Months",
    },
    { key: "vegetation-indices", value: "Vegetaion Indices And Clouds" },
    {
      key: "vegetation-annual",
      value: "Vegetation Indices, Annual, Sentinel-2",
    },
    {
      key: "vehetation-monthly",
      value: "Vegetation Indices, Monthly, Sentinel-2",
    },
  ];

  /*space and location*/
  const maps: ListItem[] = [{ key: "basemaps", value: "Base Maps" }];

  const satelliteImages: ListItem[] = [
    { key: "landsat", value: "Landsat Timescan Satellite, 2015, Global" },
    { key: "NIRE", value: "Sentinel-2 Satellite, Near Infrared Red Edge" },
    { key: "rgb", value: "Sentinel-2 Satellite, Rgb (True Colour)" },
    { key: "rgb-2", value: "Sentinel-2 Satellite, Rgb (True Colour)" },
  ];

  /**/

  const flight: ListItem[] = [{ key: "airports", value: "Airports" }];

  const rail: ListItem[] = [
    { key: "railway", value: "RailwayStations, General" },
  ];

  const street: ListItem[] = [{ key: "streets", value: "Roads" }];

  const finance: ListItem[] = [
    {
      key: "finace",
      value: "Financial Assets Of The General Government Budget",
    },
  ];

  const Economy: ListItem[] = [
    { key: "unemployment", value: "Unemployment Rate" },
  ];

  const floods: ListItem[] = [
    { key: "flood", value: "Flood" },
  ];

  const earthquake: ListItem[] = [{ key: "earthquake", value: "Earthquake" }];
  const landslides: ListItem[] = [{ key: "landslides", value: "Landslides" }];

  const weatherCurrent: ListItem[] = [
    { key: "pt", value: "Update Potential Evapotranspiration" },
    { key: "aq", value: "Air Quality From Ecmwf" },
    { key: "precipitation", value: "Precipitation" },
  ];
  const empty: ListItem[] = [];
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
      <Breadcrumbs
        separator={<KeyboardArrowRight />}
        aria-label="breadcrumbs"
        size="sm"
        sx={{}}
      >
      <ListItemButton onClick={()=>{navigate("/",{state:`${firstelement},${secondelement},${lastElement}`})}}>
          <Typography>Home</Typography>
          </ListItemButton>
        <Typography>{firstelement}</Typography>
        <Typography>{secondelement}</Typography>
        <Typography>{lastElement}</Typography>
      </Breadcrumbs>
      {getSelectedArray().map((item) => (
        <Grid key={item.key} sx={{ ml: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedValues.includes(item.value)}
                onChange={handleChange}
                value={item.value}
              />
            }
            label={item.value}
          />
        </Grid>
      ))}
    </>
  );
};

export default CheckboxList;
