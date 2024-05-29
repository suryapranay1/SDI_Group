import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Option,
  Select,
  Stack,
  accordionDetailsClasses,
  accordionSummaryClasses,
  styled,
} from "@mui/joy";
import { Path } from "react-hook-form";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import { ArrowLeft, BackupOutlined } from "@mui/icons-material";
import EmergencyAlerts from "./emergencyAlerts";
import StockPile from "./stockpile";

interface MainInfo {

  title: string;
  startDate: string;
  endDate: string;
  duration: number | null;
  typeOfHazard: string;
  locationLatitude: number|null;
  locationLongitude: number|null;
  region: string;
  harzardLevel: number | null;
  economicLoss: number | null;

}
interface Impact1 {

    deathMale: number | null;
    deathFemale: number | null;
    deathChild: number | null;
    deathAdults: number | null;
    deathElderly: number | null;
    deathDisablePeople: number | null;
    deathPregnancyLacting: number | null;
    totalDeaths: number | null;

}

interface Impact2 {

    missingMale: number | null;
    missingFemale: number | null;
    missingChild: number | null;
    missingAdults: number | null;
    missingElderly: number | null;
    missingDisablePeople: number | null;
    missingPregnancyLacting: number | null;
    totalMissing: number | null;

}
interface Impact3 {

    injuredMale: number | null;
    injuredFemale: number | null;
    injuredChild: number | null;
    injuredAdults: number | null;
    injuredElderly: number | null;
    injuredDisablePeople: number | null;
    injuredPregnancyLacting: number | null;
    totalInjured: number | null;

}
interface Impact4 {
 
    affectedMale: number | null;
    affectedFemale: number | null;
    affectedChild: number | null;
    affectedAdults: number | null;
    affectedElderly: number | null;
    affectedDisablePeople: number | null;
    affectedPregnancyLacting: number | null;
    totalAffected: number | null;
  };

interface Impact5 {
  
    relocatedMale: number | null;
    relocatedFemale: number | null;
    relocatedChild: number | null;
    relocatedAdults: number | null;
    relocatedElderly: number | null;
    relocatedDisablePeople: number | null;
    relocatedPregnancyLacting: number | null;
    totalRelocated: number | null;

}
interface Impact6 {
    evacuatedMale: number | null;
    evacuatedFemale: number | null;
    evacuatedChild: number | null;
    evacuatedAdults: number | null;
    evacuatedElderly: number | null;
    evacuatedDisablePeople: number | null;
    evacuatedPregnancyLacting: number | null;
    totalEvacuated: number | null;
 
}

interface InfrasctructureImpact1 {

    mediumDamagedHouse: number | null;
    heavilyDamagedHouse: number | null;
    total: number | null;

}
interface InfrasctructureImpact2 {

    affectedEducationFacilities: number | null;
    affectedHealthFacilities: number | null;
    damagedPublicBuildings: number | null;

}
interface InfrasctructureImpact3 {
 
    affectedAgricultureLand: number | null;

}

// interface IFormInputs {

//     // infrastructure: {
//     //   damageBridgeOrTunnel: boolean;
//     //   damageWaterSupply: boolean;
//     //   damagePowerAndtransmissionLines: boolean;
//     //   damageTelecommunication: boolean;
//     //   damageAirport: boolean;
//     //   damageRoad: boolean;
//     //   damageIndustrialFacilities: boolean;
//     //   other: boolean;
//     // };

//   };

const Deaths = [
  { label: "Death Males", placeholder: "Type in here…", key: "deathMale" },
  { label: "Death Females", placeholder: "Type in here…", key: "deathFemale" },
  { label: "Death Child", placeholder: "Type in here…", key: "deathChild" },
  { label: "Death Adults", placeholder: "Type in here…", key: "deathAdults" },
  { label: "Death Elderly", placeholder: "Type in here…", key: "deathElderly" },
  {
    label: "Death Disabale People",
    placeholder: "Type in here…",
    key: "deathDisablePeople",
  },
  {
    label: "Death Pregnancy & Lactating",
    placeholder: "Type in here…",
    key: "deathPregnancyLacting",
  },
  { label: "Total Deaths", placeholder: "Type in here…", key: "totalDeaths" },
] as const;
const Missings = [
  { label: "Missing Males", placeholder: "Type in here…", key: "missingMale" },
  {
    label: "Missing Females",
    placeholder: "Type in here…",
    key: "missingFemale",
  },
  {
    label: "Missing Child",
    placeholder: "Type in here…",
    key: "missingChild",
  },
  {
    label: "Missing Adults",
    placeholder: "Type in here…",
    key: "missingAdults",
  },
  {
    label: "Missing Elderly",
    placeholder: "Type in here…",
    key: "missingElderly",
  },
  {
    label: "Missing Disabale People",
    placeholder: "Type in here…",
    key: "missingDisablePeople",
  },
  {
    label: "Missing Pregnancy & Lactating",
    placeholder: "Type in here…",
    key: "missingPregnancyLacting",
  },
  {
    label: "Total Missing",
    placeholder: "Type in here…",
    key: "totalMissing",
  },
];
const Injured = [
  { label: "Injured Males", placeholder: "Type in here…", key: "injuredMale" },
  {
    label: "Injured Females",
    placeholder: "Type in here…",
    key: "injuredFemale",
  },
  { label: "Injured Child", placeholder: "Type in here…", key: "injuredChild" },
  {
    label: "Injured Adults",
    placeholder: "Type in here…",
    key: "injuredAdults",
  },
  {
    label: "Injured Elderly",
    placeholder: "Type in here…",
    key: "injuredElderly",
  },
  {
    label: "Injured Disabale People",
    placeholder: "Type in here…",
    key: "injuredDisablePeople",
  },
  {
    label: "Injured Pregnancy & Lactating",
    placeholder: "Type in here…",
    key: "injuredPregnancyLacting",
  },
  { label: "Total Injured", placeholder: "Type in here…", key: "totalInjured" },
];
const Affected = [
  {
    label: "Affected Males",
    placeholder: "Type in here…",
    key: "affectedMale",
  },
  {
    label: "Affected Females",
    placeholder: "Type in here…",
    key: "affectedFemale",
  },
  {
    label: "Affected Child",
    placeholder: "Type in here…",
    key: "affectedChild",
  },
  {
    label: "Affected Adults",
    placeholder: "Type in here…",
    key: "affectedAdults",
  },
  {
    label: "Affected Elderly",
    placeholder: "Type in here…",
    key: "affectedElderly",
  },
  {
    label: "Affected Disabale People",
    placeholder: "Type in here…",
    key: "affectedDisablePeople",
  },
  {
    label: "Affected Pregnancy & Lactating",
    placeholder: "Type in here…",
    key: "affectedPregnancyLacting",
  },
  {
    label: "Total Affected",
    placeholder: "Type in here…",
    key: "totalAffected",
  },
];
const Relocated = [
  {
    label: "Relocated Males",
    placeholder: "Type in here…",
    key: "relocatedMale",
  },
  {
    label: "Relocated Females",
    placeholder: "Type in here…",
    key: "relocatedFemale",
  },
  {
    label: "Relocated Child",
    placeholder: "Type in here…",
    key: "relocatedChild",
  },
  {
    label: "Relocated Adults",
    placeholder: "Type in here…",
    key: "relocatedAdults",
  },
  {
    label: "Relocated Elderly",
    placeholder: "Type in here…",
    key: "relocatedElderly",
  },
  {
    label: "Relocated Disabale People",
    placeholder: "Type in here…",
    key: "relocatedDisablePeople",
  },
  {
    label: "Relocated Pregnancy & Lactating",
    placeholder: "Type in here…",
    key: "relocatedPregnancyLacting",
  },
  {
    label: "Total Relocated",
    placeholder: "Type in here…",
    key: "totalRelocated",
  },
];
const Evacuated = [
  {
    label: "Evacuated Males",
    placeholder: "Type in here…",
    key: "evacuatedMale",
  },
  {
    label: "Evacuated Females",
    placeholder: "Type in here…",
    key: "evacuatedFemale",
  },
  {
    label: "Evacuated Child",
    placeholder: "Type in here…",
    key: "evacuatedChild",
  },
  {
    label: "Evacuated Adults",
    placeholder: "Type in here…",
    key: "evacuatedAdults",
  },
  {
    label: "Evacuated Elderly",
    placeholder: "Type in here…",
    key: "evacuatedElderly",
  },
  {
    label: "Evacuated Disabale People",
    placeholder: "Type in here…",
    key: "evacuatedDisablePeople",
  },
  {
    label: "Evacuated Pregnancy & Lactating",
    placeholder: "Type in here…",
    key: "evacuatedPregnancyLacting",
  },
  {
    label: "Total Evacuated",
    placeholder: "Type in here…",
    key: "totalEvacuated",
  },
];
const DamagedLossBuildings = [
  {
    label: "Medium Damaged House",
    placeholder: "Type in here…",
    key: "mediumDamagedHouse",
  },
  {
    label: "Heavily Damaged House",
    placeholder: "Type in here…",
    key: "heavilyDamagedHouse",
  },
  { label: "Total", placeholder: "Type in here…", key: "total" },
];
const OtherBuildings = [
  {
    label: "Affected Education Facilities",
    placeholder: "Type in here…",
    key: "affectedEducationFacilities",
  },
  {
    label: "Affected Health Facilities",
    placeholder: "Type in here…",
    key: "affectedHealthFacilities",
  },
  {
    label: "Damaged Public Buildings",
    placeholder: "Type in here…",
    key: "damagedPublicBuildings",
  },
];
const Infrastructure = [
  {
    label: "Damage Bridge or Tunnel",
    placeholder: "Type in here…",
    key: "damageBridgeOrTunnel",
  },
  {
    label: "Damage Water Supply",
    placeholder: "Type in here…",
    key: "damageWaterSupply",
  },
  {
    label: "Damage Power And transmission Lines",
    key: "damagePowerAndtransmissionLines",
    placeholder: "Type in here…",
  },
  {
    label: "Damage Telecommunication",
    placeholder: "Type in here…",
    key: "damageTelecommunication",
  },
  {
    label: "Damage Airport",
    placeholder: "Type in here…",
    key: "damageAirport",
  },
  { label: "Damage Road", placeholder: "Type in here…", key: "damageRoad" },
  {
    label: "Damage Industrial Facilities",
    placeholder: "Type in here…",
    key: "damageIndustrialFacilities",
  },
  { label: "Other", placeholder: "Type in here…", key: "other" },
];

const mainInfoShema: Yup.ObjectSchema<MainInfo> = Yup.object().shape({
  
    title: Yup.string().required("Title is required"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
    duration: Yup.number().nullable().required().typeError('enter a valid duration'),
    typeOfHazard: Yup.string().required("Type Of Hazard is required"),
    locationLatitude: Yup.number().required().typeError('Enter valid latitude'),
    locationLongitude: Yup.number().required().typeError('Enter valid longitude'),
    region: Yup.string().required("Region is required"),
    harzardLevel: Yup.number().nullable().required().typeError('enter valid level'),
    economicLoss: Yup.number().nullable().required().typeError('enter a valid number'),
});

const deathSchema: Yup.ObjectSchema<Impact1> = Yup.object().shape({
    
      deathMale: Yup.number().nullable().required().typeError('enter a valid number'),
      deathFemale: Yup.number().nullable().required().typeError('enter a valid number'),
      deathChild: Yup.number().nullable().required().typeError('enter a valid number'),
      deathAdults: Yup.number().nullable().required().typeError('enter a valid number'),
      deathElderly: Yup.number().nullable().required().typeError('enter a valid number'),
      deathDisablePeople: Yup.number()
        .nullable()
        .required().typeError('enter a valid number'),
      deathPregnancyLacting: Yup.number()
        .nullable()
        .required().typeError('enter a valid number'),
      totalDeaths: Yup.number().nullable().required().typeError('enter a valid number'),

});

const missingSchema: Yup.ObjectSchema<Impact2> = Yup.object().shape({

    missingMale: Yup.number().nullable().required().typeError('enter a valid number'),
    missingFemale: Yup.number().nullable().required().typeError('enter a valid number'),
    missingChild: Yup.number().nullable().required().typeError('enter a valid number'),
    missingAdults: Yup.number().nullable().required().typeError('enter a valid number'),
    missingElderly: Yup.number().nullable().required().typeError('enter a valid number'),
    missingDisablePeople: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    missingPregnancyLacting: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    totalMissing: Yup.number().nullable().required().typeError('enter a valid number'),

});

const injuredSchema: Yup.ObjectSchema<Impact3> = Yup.object().shape({
 
    injuredMale: Yup.number().nullable().required().typeError('enter a valid number'),
    injuredFemale: Yup.number().nullable().required().typeError('enter a valid number'),
    injuredChild: Yup.number().nullable().required().typeError('enter a valid number'),
    injuredAdults: Yup.number().nullable().required().typeError('enter a valid number'),
    injuredElderly: Yup.number().nullable().required().typeError('enter a valid number'),
    injuredDisablePeople: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    injuredPregnancyLacting: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    totalInjured: Yup.number().nullable().required().typeError('enter a valid number'),

});

const affectedSchema: Yup.ObjectSchema<Impact4> = Yup.object().shape({

    affectedMale: Yup.number().nullable().required().typeError('enter a valid number'),
    affectedFemale: Yup.number().nullable().required().typeError('enter a valid number'),
    affectedChild: Yup.number().nullable().required().typeError('enter a valid number'),
    affectedAdults: Yup.number().nullable().required().typeError('enter a valid number'),
    affectedElderly: Yup.number().nullable().required().typeError('enter a valid number'),
    affectedDisablePeople: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    affectedPregnancyLacting: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    totalAffected: Yup.number().nullable().required().typeError('enter a valid number'),
 
});

const relocatedSchema: Yup.ObjectSchema<Impact5> = Yup.object().shape({

    relocatedMale: Yup.number().nullable().required().typeError('enter a valid number'),
    relocatedFemale: Yup.number().nullable().required().typeError('enter a valid number'),
    relocatedChild: Yup.number().nullable().required().typeError('enter a valid number'),
    relocatedAdults: Yup.number().nullable().required().typeError('enter a valid number'),
    relocatedElderly: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    relocatedDisablePeople: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    relocatedPregnancyLacting: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    totalRelocated: Yup.number().nullable().required().typeError('enter a valid number'),

});

const evacuatedSchema: Yup.ObjectSchema<Impact6> = Yup.object().shape({

    evacuatedMale: Yup.number().nullable().required().typeError('enter a valid number'),
    evacuatedFemale: Yup.number().nullable().required().typeError('enter a valid number'),
    evacuatedChild: Yup.number().nullable().required().typeError('enter a valid number'),
    evacuatedAdults: Yup.number().nullable().required().typeError('enter a valid number'),
    evacuatedElderly: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    evacuatedDisablePeople: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    evacuatedPregnancyLacting: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    totalEvacuated: Yup.number().nullable().required().typeError('enter a valid number'),

});

const damagedBuildingsSchema: Yup.ObjectSchema<InfrasctructureImpact1> = Yup.object().shape({

    mediumDamagedHouse: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    heavilyDamagedHouse: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    total: Yup.number().nullable().required().typeError('enter a valid number'),

});

const otherBuildingsSchema: Yup.ObjectSchema<InfrasctructureImpact2> = Yup.object().shape({
 
    affectedEducationFacilities: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    affectedHealthFacilities: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),
    damagedPublicBuildings: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),

});


const agricultureDamageInCropsSchema: Yup.ObjectSchema<InfrasctructureImpact3> = Yup.object().shape({

    affectedAgricultureLand: Yup.number()
      .nullable()
      .required().typeError('enter a valid number'),

});

export default function TabsBasic() {
  const [mainInfo, setmainInfo] =React.useState<MainInfo | null>(null);
  const [deaths, setdeaths] =React.useState<Impact1 | null>(null);
  const [missing, setmissing] =React.useState<Impact2 | null>(null);
  const [injured, setinjured] =React.useState<Impact3 | null>(null);
  const [affected, setaffected] =React.useState<Impact4 | null>(null);
  const [relocated, setrelocated] =React.useState<Impact5 | null>(null);
  const [evacuated, setevacuated] =React.useState<Impact6 | null>(null);
  const [damagedBuildings, setdamagedBuildings] =React.useState<InfrasctructureImpact1 | null>(null);
  const [otherBuildings, setotherBuildings] =React.useState<InfrasctructureImpact2 | null>(null);
  const [agricultureDamageInCrops, setagricultureDamageInCrops] =React.useState<InfrasctructureImpact3 | null>(null);
  
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);
  const [incidentInfo, UpdateInfo] = React.useState(false);
  const [accord, Updateaccord] = React.useState(true);
  const [submit, updateSubmit] = React.useState(false);
  const [saveNext, updateSave] = React.useState(true);
  const [emergencyAlerts, UpdateEmergency] = React.useState(false);
  const [stockpileLocation, Updatestockpile] = React.useState(false);
  
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },control
  } = useForm<MainInfo>({
    resolver: yupResolver(mainInfoShema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<Impact1>({
    resolver: yupResolver(deathSchema),
  });
  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
  } = useForm<Impact2>({
    resolver: yupResolver(missingSchema),
  });
  const {
    register: register4,
    handleSubmit: handleSubmit4,
    formState: { errors: errors4 },
  } = useForm<Impact3>({
    resolver: yupResolver(injuredSchema),
  });
  const {
    register: register5,
    handleSubmit: handleSubmit5,
    formState: { errors: errors5 },
  } = useForm<Impact4>({
    resolver: yupResolver(affectedSchema),
  });
  const {
    register: register6,
    handleSubmit: handleSubmit6,
    formState: { errors: errors6 },
  } = useForm<Impact5>({
    resolver: yupResolver(relocatedSchema),
  });
  const {
    register: register7,
    handleSubmit: handleSubmit7,
    formState: { errors: errors7 },
  } = useForm<Impact6>({
    resolver: yupResolver(evacuatedSchema),
  });
  const {
    register: register8,
    handleSubmit: handleSubmit8,
    formState: { errors: errors8 },
  } = useForm<InfrasctructureImpact1>({
    resolver: yupResolver(damagedBuildingsSchema),
  });
  const {
    register: register9,
    handleSubmit: handleSubmit9,
    formState: { errors: errors9 },
  } = useForm<InfrasctructureImpact2>({
    resolver: yupResolver(otherBuildingsSchema),
  });
  const {
    register: register10,
    handleSubmit: handleSubmit10,
    formState: { errors: errors10 },
  } = useForm<InfrasctructureImpact3>({
    resolver: yupResolver(agricultureDamageInCropsSchema),
  });
  const combinedData=()=>{
    const formdata={
      mainInfo:mainInfo,
      Impact:{
        deaths:deaths,
        missing:missing,
        injured:injured,
        affected:affected,
        relocated:relocated,
        evacuated:evacuated,
      },
      infrastructure:{
        damagedBuildings:damagedBuildings,
        otherBuildings:otherBuildings,
        agricultureDamageInCrops:agricultureDamageInCrops
      }
    }
    console.log(formdata);
    
  }
  const handlePrevious = () => {
    if (verticalValue > 0) {
      setVerticalValue(verticalValue - 1);
    } else {
      setHorizontalValue(horizontalValue - 1);
      if (horizontalValue === 2) setVerticalValue(5);
    }
  };
  const handleNext = () => {
    if (verticalValue <= 5 && horizontalValue === 1) {
      setVerticalValue((prev) => prev + 1);
      if (verticalValue === 5) {
        setHorizontalValue((prev) => prev + 1);
        setVerticalValue(0);
      }
    } else if (verticalValue <= 3 && horizontalValue === 2) {
      setVerticalValue((prev) => prev + 1);
      if (verticalValue === 3) {
        setVerticalValue(0);
        setHorizontalValue(0);
      } else if (verticalValue === 2) {
        updateSubmit(true);
        updateSave(false);
      }
    } else if (horizontalValue < 2) {
      setHorizontalValue((prev) => prev + 1);
    }
  };
  const handleHorizontalChange = (_event: any, newValue: number) => {
    console.log(_event, newValue);
    setHorizontalValue(newValue);
    setVerticalValue(0);
  };
  const CustomTab = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",

    marginBottom: theme.spacing(2),
    "& .MuiFormLabel-root": {
      marginRight: theme.spacing(2),
      minWidth: "150px",
    },
    "& .MuiInput-root": {
      flexGrow: 1,
    },
  }));
  const CustomTabs = styled(Tab)({
    fontWeight: "bold",
    "&.Mui-selected": {
      color: "#458844ba",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  });
  return (
    <>
      {accord && (
        <AccordionGroup
          variant="outlined"
          transition="0.2s"
          sx={{
            border: "1px solid #d3d3d3",
            borderRadius: "5px",
            mt: "2em",
            [`& .${accordionSummaryClasses.button}:hover`]: {
              bgcolor: "transparent",
            },
            [`& .${accordionDetailsClasses.content}`]: {
              boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
              [`&.${accordionDetailsClasses.expanded}`]: {
                paddingBlock: "0.55rem",
              },
            },
          }}
        >
          <Accordion defaultExpanded>
            <AccordionSummary>
              Committee of Emergency Situation(CoES)
            </AccordionSummary>
            <AccordionDetails variant="plain">
              <Button
                variant="plain"
                color="neutral"
                onClick={() => {
                  UpdateInfo(true);
                  Updateaccord(false);
                }}
              >
                {" "}
                Incident Information
              </Button>
              <Button
                variant="plain"
                color="neutral"
                onClick={() => {
                  UpdateEmergency(true);
                  Updateaccord(false);
                }}
              >
                Emergency Alerts
              </Button>
              <Button
                variant="plain"
                color="neutral"
                onClick={() => {
                  Updatestockpile(true);
                  Updateaccord(false);
                }}
              >
                Stockpile Location
              </Button>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      )}

      {incidentInfo && (
        <>
          <Box sx={{ width: "55%" }}>
            <Typography
              sx={{ fontWeight: "700", mb: "3%", ml: "20%", mt: "2%" }}
            >
              {" "}
              Committee of Emergency Situation(CoES)/Incident Information
            </Typography>
            <Tabs
              aria-label="Basic tabs"
              value={horizontalValue}
              sx={{ backgroundColor: "white" }}
              onChange={(event, value) => {
                if (typeof value === "number" && value >= 0) {
                  setHorizontalValue(value);
                  setVerticalValue(0);
                }
              }}
            >
              <TabList
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <CustomTabs disableIndicator color="success" variant="plain">
                  Main Info
                </CustomTabs>
                <CustomTabs disableIndicator color="success" variant="plain">
                  Impact Of People
                </CustomTabs>
                <CustomTabs disableIndicator color="success" variant="plain">
                  Infrastructure Impact
                </CustomTabs>
              </TabList>
              <TabPanel value={0} sx={{ px: 4 }}>
                <Stack>
                  <form
                    onSubmit={handleSubmit1((data) => {
                      console.log(data);
                      handleNext();
                      setmainInfo(data);
                    })}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{}}>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-title">
                            Title
                          </FormLabel>
                          <Input
                            {...register1("title")}
                            placeholder="Type in here…"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                        </CustomTab>
                        {errors1.title && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.title.message}
                            </Typography>
                          </Box>
                        )}
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-start-date">
                            Start Date
                          </FormLabel>
                          <Input
                            type="date"
                            {...register1("startDate")}
                            placeholder="Type in here…"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                        </CustomTab>
                        {errors1.startDate && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.startDate.message}
                            </Typography>
                          </Box>
                        )}
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-end-date">
                            End Date
                          </FormLabel>
                          <Input
                            type="date"
                            {...register1("endDate")}
                            placeholder="Type in here…"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                        </CustomTab>
                        {errors1.endDate && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.endDate.message}
                            </Typography>
                          </Box>
                        )}
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-duration">
                            Duration
                          </FormLabel>
                          <Input
                            type="number"
                            {...register1("duration")}
                            placeholder="Type in here…"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                        </CustomTab>
                        {errors1.duration && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.duration.message}
                            </Typography>
                          </Box>
                        )}
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-hazard-type">
                            Type Of Hazard
                          </FormLabel>
                          <Controller
                            name="typeOfHazard"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <Select
                                {...field}
                                placeholder="Select a hazard"
                                onChange={(event, value) =>
                                  field.onChange(value)
                                }
                              >
                                <Option value="Hazard1">Hazard1</Option>
                                <Option value="Hazard2">Hazard2</Option>
                                <Option value="Hazard3">Hazard3</Option>
                              </Select>
                            )}
                          />
                        </CustomTab>
                        {errors1.typeOfHazard && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.typeOfHazard.message}
                            </Typography>
                          </Box>
                        )}
                        <CustomTab>
                    <FormLabel htmlFor="location">Location</FormLabel>
                    <Box display={"flex"}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Input
                          sx={{ mr: 4 }}
                          placeholder="Latitude"
                          type="number"
                          {...register1("locationLatitude")}
                          onChange={(e) => {
                            e.preventDefault();
                          }}
                        />
                        {errors1.locationLatitude && (
                          <Box sx={{ display: "flex", mt: "0.1em", mb: "1em" }}>
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.locationLatitude.message}
                            </Typography>
                          </Box>
                        )}
                      </Box>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Input
                          placeholder="Longitude"
                          type="number"
                          {...register1("locationLongitude")}
                          onChange={(e) => {
                            e.preventDefault();
                          }}
                        />
                        {errors1.locationLongitude && (
                          <Box sx={{ display: "flex", mt: "0.1em", mb: "1em" }}>
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.locationLongitude.message}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </CustomTab>
                        
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-region">
                            Region
                          </FormLabel>
                          <Input
                            {...register1("region")}
                            placeholder="Type in here…"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                        </CustomTab>
                        {errors1.region && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.region.message}
                            </Typography>
                          </Box>
                        )}
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-hazard-level">
                            Hazard Level
                          </FormLabel>
                          <Input
                            type="number"
                            {...register1("harzardLevel")}
                            placeholder="Type in here…"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                        </CustomTab>
                        {errors1.harzardLevel && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.harzardLevel.message}
                            </Typography>
                          </Box>
                        )}
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-economic-loss">
                            Economic Loss (TJS)
                          </FormLabel>
                          <Input
                            type="number"
                            {...register1("economicLoss")}
                            placeholder="Type in here…"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                        </CustomTab>
                        {errors1.economicLoss && (
                          <Box
                            sx={{
                              display: "flex",
                              mt: "0.1em",
                              mb: "1em",
                              ml: "10em",
                            }}
                          >
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors1.economicLoss.message}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <IconButton
                        sx={{
                          flexDirection: "column",
                          "&:hover": { backgroundColor: "transparent" },
                        }}
                      >
                        <BackupOutlined
                          sx={{ fontSize: 60 }}
                          htmlColor="#458844ba"
                        />
                        <Typography>Upload your data</Typography>
                      </IconButton>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Button
                        variant="solid"
                        color="success"
                        onClick={() => {
                          Updateaccord(true);
                          UpdateInfo(false);
                        }}
                        sx={{ alignSelf: "flex-end" }}
                      >
                        previous
                      </Button>
                      <Button
                        variant="solid"
                        color="success"
                        type="submit"
                        sx={{ alignSelf: "flex-end" }}
                      >
                        Save & Next
                      </Button>
                    </Box>
                  </form>
                </Stack>
              </TabPanel>
              <TabPanel value={1} sx={{ backgroundColor: "white" }}>
                <Tabs
                  aria-label="Vertical tabs"
                  orientation="vertical"
                  value={verticalValue}
                  sx={{ backgroundColor: "white" }}
                  onChange={(event, value) => {
                    if (typeof value === "number" && value >= 0) {
                      setVerticalValue(value);
                    }
                  }}
                >
                  <TabList>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Deaths
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Missing
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Injured
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Effected
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Relocated
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Evacuated
                    </CustomTabs>
                  </TabList>
                  <TabPanel value={0} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit2((data) => {
                        console.log(data);
                        handleNext();
                        setdeaths(data);
                      })}
                    >
                      {Deaths.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`death-${field.key}`}
                            {...register2(`${field.key}`)}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors2[field.key] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'

                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {errors2[field.key]?.message}
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                  <TabPanel value={1} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit3((data) => {
                        console.log(data);
                        setmissing(data);
                        handleNext();
                      })}
                    >
                      {Missings.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register3(
                              `${field.key}` as Path<Impact2>
                            )}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors3[
                            field.key as keyof typeof errors3
                          ] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'
                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {
                                  (
                                    errors3[
                                      field.key as keyof typeof errors3
                                    ] as any
                                  )?.message
                                }
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                  <TabPanel value={2} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit4((data) => {
                        console.log(data);
                        setinjured(data);
                        handleNext();
                      })}
                    >
                      {Injured.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register4(
                              `${field.key}` as Path<Impact3>
                            )}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors4[
                            field.key as keyof typeof errors4
                          ] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'
                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {
                                  (
                                    errors4[
                                      field.key as keyof typeof errors4
                                    ] as any
                                  )?.message
                                }
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                  <TabPanel value={3} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit5((data) => {
                        console.log(data);
                        setaffected(data);
                        handleNext();
                      })}
                    >
                      {Affected.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register5(
                              `${field.key}` as Path<Impact4>
                            )}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors5[
                            field.key as keyof typeof errors5
                          ] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'
                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {
                                  (
                                    errors5[
                                      field.key as keyof typeof errors5
                                    ] as any
                                  )?.message
                                }
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                  <TabPanel value={4} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit6((data) => {
                        console.log(data);
                        setrelocated(data);
                        handleNext();
                      })}
                    >
                      {Relocated.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register6(
                              `${field.key}` as Path<Impact5>
                            )}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors6[
                            field.key as keyof typeof errors6
                          ] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'
                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {
                                  (
                                    errors6[
                                      field.key as keyof typeof errors6
                                    ] as any
                                  )?.message
                                }
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                  <TabPanel value={5} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit7((data) => {
                        console.log(data);
                        setevacuated(data);
                        handleNext();
                      })}
                    >
                      {Evacuated.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register7(
                              `${field.key}` as Path<Impact6>
                            )}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors7[
                            field.key as keyof typeof errors7
                          ] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'
                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {
                                  (
                                    errors7[
                                      field.key as keyof typeof errors7
                                    ] as any
                                  )?.message
                                }
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel value={2} sx={{ backgroundColor: "white" }}>
                <Tabs
                  aria-label="Vertical tabs"
                  orientation="vertical"
                  value={verticalValue}
                  sx={{ minWidth: 300, backgroundColor: "white" }}
                  onChange={(event, value) => {
                    if (typeof value === "number" && value >= 0) {
                      setVerticalValue(value);
                    }
                  }}
                >
                  <TabList>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Damaged Loss Buildings
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Other Buildings
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Infrasctructure
                    </CustomTabs>
                    <CustomTabs
                      disableIndicator
                      color="success"
                      variant="plain"
                    >
                      Agriculture Damages in Crops
                    </CustomTabs>
                  </TabList>
                  <TabPanel value={0} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit8((data) => {
                        console.log(data);
                        setdamagedBuildings(data);
                        handleNext();
                      })}
                    >
                      {DamagedLossBuildings.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register8(
                              `${field.key}` as Path<InfrasctructureImpact1>
                            )}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors8[
                            field.key as keyof typeof errors8
                          ] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'
                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {
                                  (
                                    errors8
                                    [
                                      field.key as keyof typeof errors8
                                    ] as any
                                  )?.message
                                }
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                  <TabPanel value={1} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit9((data) => {
                        console.log(data);
                        setotherBuildings(data);
                        handleNext();
                      })}
                    >
                      {OtherBuildings.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            {...register9(
                              `${field.key}` as Path<InfrasctructureImpact2>
                            )}
                            placeholder={field.placeholder}
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                          />
                          {errors9[
                            field.key as keyof typeof errors9
                          ] && (
                            <Box
                              sx={{
                                display: "flex",
                                mt: "0.5em",
                                ml:'1em'
                              }}
                            >
                              <ErrorOutlineOutlined
                                sx={{ marginRight: "0.2em", fontSize: "1em" }}
                              />
                              <Typography
                                color="error"
                                sx={{ fontSize: "0.8em" }}
                              >
                                {
                                  (
                                    errors9[
                                      field.key as keyof typeof errors9
                                    ] as any
                                  )?.message
                                }
                              </Typography>
                            </Box>
                          )}
                        </CustomTab>
                      ))}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Save & Next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                  {/* <TabPanel value={2} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
                        handleNext();
                      })}
                    >
                      {Infrastructure.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel
                            sx={{ width: "15em" }}
                            htmlFor={`custom-input-title-${index}`}
                          >
                            {field.label}
                          </FormLabel>
                          <Checkbox
                            label="if yes"
                            {...register(
                              `infrastructureImpact.infrastructure.${field.key}` as Path<IFormInputs>
                            )}
                          />
                        </CustomTab>
                      ))}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="save and next"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          save & next
                        </Button>
                      </Box>
                    </form>
                  </TabPanel> */}
                  <TabPanel value={3} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit10((data) => {
                        console.log(data);
                        setagricultureDamageInCrops(data);
                        combinedData();
                        handleNext();
                      })}
                    >
                      <CustomTab>
                        <FormLabel>Affected agriculture land (in ha)</FormLabel>
                        <Input
                          type="number"
                          placeholder="Enter the number"
                          {...register10(
                            "affectedAgricultureLand"
                          )}
                          onChange={(e) => {
                            e.preventDefault();
                          }}
                        />
                        

                      </CustomTab>
                      {errors10?.affectedAgricultureLand && (
                <Box
                  sx={{ display: "flex", mt: "0.1em", mb: "1em", ml: "15em" }}
                >
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors10.affectedAgricultureLand.message}
                  </Typography>
                </Box>
              )}
                      <br />
                      <br />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="solid"
                          color="success"
                          onClick={handlePrevious}
                          sx={{ alignSelf: "flex-end" }}
                        >
                          previous
                        </Button>
                        <Button
                          variant="solid"
                          color="success"
                          type="submit"
                          sx={{ alignSelf: "flex-end" }}
                        >
                          Submit
                        </Button>
                      </Box>
                    </form>
                  </TabPanel>
                </Tabs>
              </TabPanel>
            </Tabs>
          </Box>
        </>
      )}
      {emergencyAlerts&&(<>
        <Button
        variant="outlined"
        color="success"
        onClick={() => {
          Updateaccord(true);
          UpdateEmergency(false);
        }}
        sx={{ alignSelf: "flex-start" }}
      >
        <ArrowLeft/>
      </Button>
        <EmergencyAlerts/>
      </>
      )}
      {stockpileLocation&&(
        <>
         <Button
        variant="outlined"
        color="success"
        onClick={() => {
          Updateaccord(true);
          Updatestockpile(false);
        }}
        sx={{ alignSelf: "flex-start" }}
      >
        <ArrowLeft/>
      </Button>
        <StockPile/>
        </>
      )}
    </>
  );
}
