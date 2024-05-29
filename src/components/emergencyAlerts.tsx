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
import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorOutlineOutlined } from "@mui/icons-material";

interface EmergencyAlert {
  date: string;
  alertType: string;
  affectedArea: number | null;
  instructions: string;
}

const validationSchema: Yup.ObjectSchema<EmergencyAlert> = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  alertType: Yup.string().required("Alert type is required"),
  affectedArea: Yup.number()
    .nullable()
    .required("Affected area is required")
    .typeError("Enter a Valid Number"),
  instructions: Yup.string().required("Instructions are required"),
});

export default function EmergencyAlerts() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [submit, updateSubmit] = React.useState(true);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmergencyAlert>({
    resolver: yupResolver(validationSchema),
  });

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

  const onSubmit = (data: EmergencyAlert) => {
    console.log(data);
    // Handle form submission here
    updateSubmit(true);
  };

  return (
    <>
      <Typography sx={{ fontWeight: "700", mb: "1%", mt: "2%" }}>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomTab>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  placeholder="Enter Date"
                  {...register("date")}
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                />
              </CustomTab>
              {errors.date && (
                <Box
                  sx={{ display: "flex", mt: "0.1em", mb: "1em", ml: "10em" }}
                >
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors.date.message}
                  </Typography>
                </Box>
              )}
              <CustomTab>
                <FormLabel>Alert type</FormLabel>
                <Controller
                  name="alertType"
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
              {errors.alertType && (
                <Box
                  sx={{ display: "flex", mt: "0.1em", mb: "1em", ml: "10em" }}
                >
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors.alertType.message}
                  </Typography>
                </Box>
              )}
              <CustomTab>
                <FormLabel>Affected area(in Sqkm)</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter Affected area"
                  {...register("affectedArea")}
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                />
              </CustomTab>
              {errors.affectedArea && (
                <Box
                  sx={{ display: "flex", mt: "0.1em", mb: "1em", ml: "10em" }}
                >
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors.affectedArea.message}
                  </Typography>
                </Box>
              )}
              <CustomTab>
                <FormLabel>Instructions</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Instructions"
                  {...register("instructions")}
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                />
              </CustomTab>
              {errors.instructions && (
                <Box
                  sx={{ display: "flex", mt: "0.1em", mb: "1em", ml: "10em" }}
                >
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors.instructions.message}
                  </Typography>
                </Box>
              )}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {submit && (
                  <Button
                    variant="outlined"
                    color="success"
                    type="submit"
                    onClick={() => {
                      updateSubmit(true);
                    }}
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </form>
          </TabPanel>
        </Tabs>
      </Box>
    </>
  );
}
