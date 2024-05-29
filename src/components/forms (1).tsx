import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
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
  Typography,
  accordionDetailsClasses,
  accordionSummaryClasses,
  styled,
} from "@mui/joy";
import { Path, useForm, Controller } from "react-hook-form";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import { BackupOutlined } from "@mui/icons-material";
interface IFormInputs {
  mainInfo: {
    title: string;
    startDate: string;
    endDate: string;
    duration: string;
    typeOfHazard: string;
    location: string;
    region: string;
    harzardLevel: string | null;
    economicLoss: string;
  };
  impact: {
    deaths: {
      deathMale: number | null;
      deathFemale: number | null;
      deathChild: number | null;
      deathAdults: number | null;
      deathElderly: number | null;
      deathDisablePeople: number | null;
      deathPregnancyLacting: number | null;
      totalDeaths: number | null;
    };
    missing: {
      missingMale: number | null;
      missingFemale: number | null;
      missingChild: number | null;
      missingAdults: number | null;
      missingElderly: number | null;
      missingDisablePeople: number | null;
      missingPregnancyLacting: number | null;
      totalMissing: number | null;
    };
    injured: {
      injuredMale: number | null;
      injuredFemale: number | null;
      injuredChild: number | null;
      injuredAdults: number | null;
      injuredElderly: number | null;
      injuredDisablePeople: number | null;
      injuredPregnancyLacting: number | null;
      totalInjured: number | null;
    };
    affected: {
      affectedMale: number | null;
      affectedFemale: number | null;
      affectedChild: number | null;
      affectedAdults: number | null;
      affectedElderly: number | null;
      affectedDisablePeople: number | null;
      affectedPregnancyLacting: number | null;
      totalAffected: number | null;
    };
    relocated: {
      relocatedMale: number | null;
      relocatedFemale: number | null;
      relocatedChild: number | null;
      relocatedAdults: number | null;
      relocatedElderly: number | null;
      relocatedDisablePeople: number | null;
      relocatedPregnancyLacting: number | null;
      totalRelocated: number | null;
    };
    evacuated: {
      evacuatedMale: number | null;
      evacuatedFemale: number | null;
      evacuatedChild: number | null;
      evacuatedAdults: number | null;
      evacuatedElderly: number | null;
      evacuatedDisablePeople: number | null;
      evacuatedPregnancyLacting: number | null;
      totalEvacuated: number | null;
    };
  };
  infrastructureImpact: {
    damagedBuildings: {
      mediumDamagedHouse: number | null;
      heavilyDamangedHouse: number | null;
      total: number | null;
    };
    otherBuildings: {
      affectedEducationFacilities: number | null;
      affectedHealthFacilities: number | null;
      damagedPublicBuildings: number | null;
    };
    infrastructure: {
      damageBridgeOrTunnel: boolean;
      damageWaterSupply: boolean;
      damagePowerAndtransmissionLines: boolean;
      damageTelecommunication: boolean;
      damageAirport: boolean;
      damageRoad: boolean;
      damageIndustrialFacilities: boolean;
      other: boolean;
    };
    agricultureDamageInCrops: {
      affectedAgricultureLand: number | null;
    };
  };
}
const defaultValues: IFormInputs = {
  mainInfo: {
    title: "",
    startDate: "",
    endDate: "",
    duration: "",
    typeOfHazard: "",
    location: "",
    region: "",
    harzardLevel: "",
    economicLoss: "",
  },
  impact: {
    deaths: {
      deathMale: null,
      deathFemale: null,
      deathChild: null,
      deathAdults: null,
      deathElderly: null,
      deathDisablePeople: null,
      deathPregnancyLacting: null,
      totalDeaths: null,
    },
    missing: {
      missingMale: null,
      missingFemale: null,
      missingChild: null,
      missingAdults: null,
      missingElderly: null,
      missingDisablePeople: null,
      missingPregnancyLacting: null,
      totalMissing: null,
    },
    injured: {
      injuredMale: null,
      injuredFemale: null,
      injuredChild: null,
      injuredAdults: null,
      injuredElderly: null,
      injuredDisablePeople: null,
      injuredPregnancyLacting: null,
      totalInjured: null,
    },

    affected: {
      affectedMale: null,
      affectedFemale: null,
      affectedChild: null,
      affectedAdults: null,
      affectedElderly: null,
      affectedDisablePeople: null,
      affectedPregnancyLacting: null,
      totalAffected: null,
    },
    relocated: {
      relocatedMale: null,
      relocatedFemale: null,
      relocatedChild: null,
      relocatedAdults: null,
      relocatedElderly: null,
      relocatedDisablePeople: null,
      relocatedPregnancyLacting: null,
      totalRelocated: null,
    },
    evacuated: {
      evacuatedMale: null,
      evacuatedFemale: null,
      evacuatedChild: null,
      evacuatedAdults: null,
      evacuatedElderly: null,
      evacuatedDisablePeople: null,
      evacuatedPregnancyLacting: null,
      totalEvacuated: null,
    },
  },
  infrastructureImpact: {
    damagedBuildings: {
      mediumDamagedHouse: null,
      heavilyDamangedHouse: null,
      total: null,
    },
    otherBuildings: {
      affectedEducationFacilities: null,
      affectedHealthFacilities: null,
      damagedPublicBuildings: null,
    },
    infrastructure: {
      damageBridgeOrTunnel: false,
      damageWaterSupply: false,
      damagePowerAndtransmissionLines: false,
      damageTelecommunication: false,
      damageAirport: false,
      damageRoad: false,
      damageIndustrialFacilities: false,
      other: false,
    },
    agricultureDamageInCrops: {
      affectedAgricultureLand: null,
    },
  },
};
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
];
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
export default function TabsBasic() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);
  const [incidentInfo, UpdateInfo] = React.useState(false);
  const [accord, Updateaccord] = React.useState(true);
  const [submit, updateSubmit] = React.useState(false);
  const [saveNext, updateSave] = React.useState(true);
  const [emergencyAlerts, UpdateEmergency] = React.useState(false);
  const [stockpileLocation, Updatestockpile] = React.useState(false);
  const { register, handleSubmit, watch, control } = useForm({
    defaultValues,
  });
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
                    onSubmit={handleSubmit((data) => {
                      console.log(data);
                      handleNext();
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
                            {...register("mainInfo.title")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-start-date">
                            Start Date
                          </FormLabel>
                          <Input
                            type="date"
                            {...register("mainInfo.startDate")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-end-date">
                            End Date
                          </FormLabel>
                          <Input
                            type="date"
                            {...register("mainInfo.endDate")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-duration">
                            Duration
                          </FormLabel>
                          <Input
                            type="number"
                            {...register("mainInfo.duration")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-hazard-type">
                            Type Of Hazard
                          </FormLabel>
                           <Controller
        name="mainInfo.typeOfHazard"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Select a hazard"
            onChange={(event, value) => field.onChange(value)}
          >
            <Option value="Hazard1">Hazard1</Option>
            <Option value="Hazard2">Hazard2</Option>
            <Option value="Hazard3">Hazard3</Option>
          </Select>
        )}
      />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-location">
                            Location
                          </FormLabel>
                          <Input
                            {...register("mainInfo.location")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-region">
                            Region
                          </FormLabel>
                          <Input
                            {...register("mainInfo.region")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-hazard-level">
                            Hazard Level
                          </FormLabel>
                          <Input
                            type="number"
                            {...register("mainInfo.harzardLevel")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
                        <CustomTab>
                          <FormLabel htmlFor="custom-input-economic-loss">
                            Economic Loss (TJS)
                          </FormLabel>
                          <Input
                            type="number"
                            {...register("mainInfo.economicLoss")}
                            placeholder="Type in here…"
                          />
                        </CustomTab>
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
                      sx={{ display: "flex", justifyContent: "space-between" }}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
                        handleNext();
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
                            {...register(
                              `impact.deaths.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
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
                            {...register(
                              `impact.missing.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
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
                            {...register(
                              `impact.injured.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
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
                            {...register(
                              `impact.affected.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
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
                            {...register(
                              `impact.relocated.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
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
                            {...register(
                              `impact.evacuated.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
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
                            {...register(
                              `infrastructureImpact.damagedBuildings.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
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
                            type="numeric"
                            {...register(
                              `infrastructureImpact.otherBuildings.${field.key}` as Path<IFormInputs>
                            )}
                            placeholder={field.placeholder}
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
                  </TabPanel>
                  <TabPanel value={3} sx={{ backgroundColor: "white" }}>
                    <form
                      onSubmit={handleSubmit((data) => {
                        console.log(data);
                        handleNext();
                      })}
                    >
                      <CustomTab>
                        <FormLabel>Affected agriculture land (in ha)</FormLabel>
                        <Input
                          type="number"
                          placeholder="Enter the number"
                          {...register(
                            "infrastructureImpact.agricultureDamageInCrops.affectedAgricultureLand"
                          )}
                        />
                      </CustomTab>
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
      {emergencyAlerts && (
        <>
          <Typography sx={{ fontWeight: "700", mb: "1%", mt: "2%" }}>
            {" "}
            Committee of Emergency Situation(CoES)/Emergency Alerts
          </Typography>
          <Box sx={{ width: "55%" }}>
            <Tabs
              aria-label="Basic tabs"
              value={horizontalValue}
              sx={{ backgroundColor: "white" }}
            >
              <TabList
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <Tab disableIndicator color="success" variant="plain">
                  Emergency Alerts
                </Tab>
              </TabList>
              <TabPanel
                value={0}
                sx={{
                  backgroundColor: "white",
                  width: "60%",
                  alignSelf: "center",
                }}
              >
                <CustomTab>
                  <FormLabel>Date</FormLabel>
                  <Input type="date" placeholder="Enter Date" />
                </CustomTab>
                <CustomTab>
                  <FormLabel>Alert type</FormLabel>
                  <Select placeholder="Alert type" name="alert" required>
                    <Option value="alerttype1">alerttype1</Option>
                    <Option value="alerttype2">alerttype2</Option>
                    <Option value="alerttype3">alerttype3</Option>
                    <Option value="alerttype4">alerttype4</Option>
                  </Select>
                </CustomTab>
                <CustomTab>
                  <FormLabel>Affected area(in Sqkm)</FormLabel>
                  <Input type="number" placeholder="No of sqkm Affected" />
                </CustomTab>
                <CustomTab>
                  <FormLabel>Instructions</FormLabel>
                  <Input type="number" placeholder="Enter the Instructions" />
                </CustomTab>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    variant="solid"
                    color="success"
                    onClick={() => {
                      Updateaccord(true);
                      UpdateEmergency(false);
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
                    Submit
                  </Button>
                </Box>
              </TabPanel>
            </Tabs>
          </Box>
        </>
      )}
      {stockpileLocation && (
        <>
          <Typography sx={{ fontWeight: "700", mb: "1%", mt: "1%" }}>
            Committee of Emergency Situation(CoES)/StockPile Location
          </Typography>
          <Box sx={{ width: "55%" }}>
            <Tabs
              aria-label="Basic tabs"
              value={horizontalValue}
              sx={{ backgroundColor: "white" }}
            >
              <TabList
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <Tab disableIndicator color="success" variant="plain">
                  Stockpile Location
                </Tab>
              </TabList>
              <TabPanel
                value={0}
                sx={{
                  backgroundColor: "white",
                  width: "60%",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box ml={1} mr={14}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        mb: "5%",
                        textDecoration: "underline",
                      }}
                    >
                      Main Information
                    </Typography>
                    <CustomTab>
                      <FormLabel>Date</FormLabel>
                      <Input type="date" placeholder="Enter the date" />
                    </CustomTab>
                    <CustomTab>
                      <FormLabel>Location</FormLabel>
                      <Box sx={{ display: "flex" }}>
                        <Input
                          sx={{ mr: "1em", width: "8em" }}
                          type="number"
                          placeholder="Latitude"
                        />

                        <Input
                          sx={{ width: "8em" }}
                          type="number"
                          placeholder="Longitude"
                        />
                      </Box>
                    </CustomTab>
                    <CustomTab>
                      <FormLabel>Status</FormLabel>
                      <Select
                        placeholder="Active/In active"
                        name="status"
                        required
                      >
                        <Option value="Active">Active</Option>
                        <Option value="In active">In active</Option>
                      </Select>
                    </CustomTab>
                    <CustomTab>
                      <FormLabel>Last</FormLabel>
                      <Input type="Date" placeholder="Enter the Date" />
                    </CustomTab>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        mb: "5%",
                        textDecoration: "underline",
                      }}
                    >
                      Items
                    </Typography>
                    <CustomTab>
                      <FormLabel>Name</FormLabel>
                      <Input sx={{ width: "8em" }} placeholder="Enter Name" />
                    </CustomTab>
                    <CustomTab>
                      <FormLabel>Units</FormLabel>
                      <Select placeholder="units" name="units" required>
                        <Option value="unit1">unit1</Option>
                        <Option value="unit2">unit2</Option>
                        <Option value="unit3">unit3</Option>
                        <Option value="unit4">unit4</Option>
                      </Select>
                    </CustomTab>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    variant="solid"
                    color="success"
                    onClick={() => {
                      Updateaccord(true);
                      Updatestockpile(false);
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
                    Submit
                  </Button>
                </Box>
              </TabPanel>
            </Tabs>
          </Box>
        </>
      )}
    </>
  );
}
