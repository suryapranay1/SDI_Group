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
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";


interface StockPileLocationInputs {
  title: string;
  date: string;
  locationLatitude: number | null;
  locationLongitude: number | null;
  status: string | null;
  last: string;
  name: string;
  units: string | null;
}

const geoDefaultValues: StockPileLocationInputs = {
  title: "",
  date: "",
  locationLatitude: null,
  locationLongitude: null,
  status: null,
  last: "",
  name: "",
  units: null,
};

// Define validation schema using Yup
const validationSchema: Yup.ObjectSchema<StockPileLocationInputs> =
  Yup.object().shape({
    title: Yup.string().required("Title is required"),
    date: Yup.string().required("Date is required"),
    locationLatitude: Yup.number()
      .nullable()
      .required("Latitude is required")
      .typeError("Enter a valid number"),
    locationLongitude: Yup.number()
      .nullable()
      .required("Longitude is required")
      .typeError("Enter a valid number"),
    status: Yup.string().nullable().required("Status is required"),
    last: Yup.string().required("Last date modification is required"),
    name: Yup.string().required("Name is required"),
    units: Yup.string().nullable().required("Units are required"),
  });

export default function StockPile() {

  const [submit, updateSubmit] = React.useState(true);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StockPileLocationInputs>({
    defaultValues: geoDefaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: StockPileLocationInputs) => {
    console.log(data);
    updateSubmit(false);
  };

  const CustomTabs = styled(Tab)({
    fontWeight: "bold",
    "&.Mui-selected": {
      color: "#458844ba",
    },
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

  return (
    <>
      <Typography sx={{ fontWeight: "700", mb: "1%", mt: "1%" }}>
        Committee of Emergency Situation(CoES)/StockPile Location
      </Typography>
      <Box sx={{ width: "55%" }}>
        <Tabs
          aria-label="Basic tabs"

          sx={{ backgroundColor: "white" }}
        >
          <TabList
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <CustomTabs disableIndicator color="success" variant="plain">
              Stockpile Location
            </CustomTabs>
          </TabList>
          <TabPanel
            value={0}
            sx={{
              backgroundColor: "white",
              width: "60%",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <FormLabel>Title</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter the title"
                      {...register("title")}
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </CustomTab>
                  {errors.title && (
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
                      <Typography color="error" sx={{ fontSize: "0.8em" }}>
                        {errors.title.message}
                      </Typography>
                    </Box>
                  )}
                  <CustomTab>
                    <FormLabel>Date</FormLabel>
                    <Input
                      type="date"
                      placeholder="Enter the date"
                      {...register("date")}
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </CustomTab>
                  {errors.date && (
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
                      <Typography color="error" sx={{ fontSize: "0.8em" }}>
                        {errors.date.message}
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
                          type='number'
                          {...register("locationLatitude")}
                          onChange={(e) => {
                            e.preventDefault();
                          }}
                        />
                        {errors.locationLatitude && (
                          <Box sx={{ display: "flex", mt: "0.1em", mb: "1em" }}>
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors.locationLatitude.message}
                            </Typography>
                          </Box>
                        )}
                      </Box>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Input
                          placeholder="Longitude"
                          type='number'
                          {...register("locationLongitude")}
                          onChange={(e) => {
                            e.preventDefault();
                          }}
                        />
                        {errors.locationLongitude && (
                          <Box sx={{ display: "flex", mt: "0.1em", mb: "1em" }}>
                            <ErrorOutlineOutlined
                              sx={{ marginRight: "0.2em", fontSize: "1em" }}
                            />
                            <Typography
                              color="error"
                              sx={{ fontSize: "0.8em" }}
                            >
                              {errors.locationLongitude.message}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </CustomTab>
                  <CustomTab>
                    <FormLabel>Status</FormLabel>
                    <Controller
                      name="status"
                      control={control}
                      defaultValue={null}
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
                  {errors.status && (
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
                      <Typography color="error" sx={{ fontSize: "0.8em" }}>
                        {errors.status.message}
                      </Typography>
                    </Box>
                  )}
                  <CustomTab>
                    <FormLabel>Last</FormLabel>
                    <Input
                      type="date"
                      placeholder="Enter the date"
                      {...register("last")}
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </CustomTab>
                  {errors.last && (
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
                      <Typography color="error" sx={{ fontSize: "0.8em" }}>
                        {errors.last.message}
                      </Typography>
                    </Box>
                  )}
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
                    <Input
                      sx={{ width: "8em" }}
                      placeholder="Enter Name"
                      {...register("name")}
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </CustomTab>
                  {errors.name && (
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
                      <Typography color="error" sx={{ fontSize: "0.8em" }}>
                        {errors.name.message}
                      </Typography>
                    </Box>
                  )}
                  <CustomTab>
                    <FormLabel>Units</FormLabel>
                    <Controller
                      name="units"
                      control={control}
                      defaultValue={null}
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
                  {errors.units && (
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
                      <Typography color="error" sx={{ fontSize: "0.8em" }}>
                        {errors.units.message}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", ml: "20em" }}
              >

      
                  <Button variant="outlined" color="success" type="submit">
                    Submit
                  </Button>
              
              </Box>
            </form>
          </TabPanel>
        </Tabs>
      </Box>
    </>
  );
}
