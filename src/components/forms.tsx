import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
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
  Input,
  Option,
  Select,
  accordionDetailsClasses,
  accordionSummaryClasses,
  styled,
} from "@mui/joy";
import { Typography } from "@mui/material";
import InputFileUpload from "./fileupload";
import EmergencyAlerts from "./emergencyAlerts";
import StockPile from "./stockpile";
import IncidentInfo from "./IncidentInfo";
export default function TabsBasic() {
  const [incidentInfo, UpdateInfo] = React.useState(false);
  const [emergencyAlerts, UpdateEmergency] = React.useState(false);
  const [stockpileLocation, Updatestockpile] = React.useState(false);
  const [accord, Updateaccord] = React.useState(true);
return (
    <>
      {accord && (
        <AccordionGroup
          variant="outlined"
          transition="0.2s"
          color="success"
          sx={{
            maxWidth: 400,
            borderRadius: "lg",
            mt: "2em",
            [`& .${accordionSummaryClasses.button}:hover`]: {
              bgcolor: "transparent",
            },
            [`& .${accordionDetailsClasses.content}`]: {
              boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
              [`&.${accordionDetailsClasses.expanded}`]: {
                paddingBlock: "0.75rem",
              },
            },
          }}
        >
          <Accordion defaultExpanded>
            <AccordionSummary color="success">
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
        <IncidentInfo/>
      )}

      {emergencyAlerts && (
       <EmergencyAlerts/>
      )}

      {stockpileLocation && (
        <StockPile/>
      )}
    </>
  );
}
