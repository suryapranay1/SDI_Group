import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
  Option,
  styled,
} from "@mui/joy";
import { Typography } from "@mui/material";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";

interface AgencyforHydro1 {
  realWorld: {
    date: string;
    airTemp: number | null;
    precepitationDay: number | null;
    precepitationNight: number | null;
    naturalFactor: number | null;
    snowHeight: number | null;
  };
}
interface AgencyforHydro2 {
  weatherForecast: {
    location: string;
    tempAtNight: number | null;
    tempAtDay: number | null;
    windDirecetion: number | null;
  };
}

const realWorldSchema: Yup.ObjectSchema<AgencyforHydro1> = Yup.object().shape({
  realWorld: Yup.object().shape({
    date: Yup.string().required("Date is required"),
    airTemp: Yup.number().nullable().required().typeError("enter valid air temperature"),
    precepitationDay: Yup.number()
      .nullable()
      .required().typeError("enter valid number"),
    precepitationNight: Yup.number()
      .nullable()
      .required().typeError("enter valid number"),
    naturalFactor: Yup.number()
      .nullable()
      .required().typeError('enter valid factor'),
    snowHeight: Yup.number().nullable().required().typeError("enter valid snow height"),
  }),
});

const weatherForecastSchema: Yup.ObjectSchema<AgencyforHydro2> =
  Yup.object().shape({
    weatherForecast: Yup.object().shape({
      //   region: Yup.string().required("Region is required"),
      location: Yup.string().required("Location is required"),
      tempAtNight: Yup.number()
        .nullable()
        .required().typeError('enter valid temperature at night'),
      tempAtDay: Yup.number()
        .nullable()
        .required().typeError("enter valid air temperature at day"),
      windDirecetion: Yup.number()
        .nullable()
        .required().typeError('enter valid number'),
    }),
  });

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
    marginRight: theme.spacing(5),
    minWidth: "210px",
  },
  "& .MuiInput-root": {
    flexGrow: 1,
  },
}));

export default function Valid() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [realWorldData, setRealWorldData] =
    React.useState<AgencyforHydro1 | null>(null);
  const [weatherForecastData, setWeatherForecastData] =
    React.useState<AgencyforHydro2 | null>(null);

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm<AgencyforHydro1>({
    resolver: yupResolver(realWorldSchema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<AgencyforHydro2>({
    resolver: yupResolver(weatherForecastSchema),
  });

  const handleNext = () => {
    if (horizontalValue >= 0 && horizontalValue < 5) {
      setHorizontalValue((horizontalValue) => horizontalValue + 1);
    } else {
      setHorizontalValue(0);
    }
  };

  const handleRealWorldSubmit = (data: AgencyforHydro1) => {
    setRealWorldData(data);
    handleNext();
  };

  const handleWeatherForecastSubmit = (data: AgencyforHydro2) => {
    setWeatherForecastData(data);
    // Submit the combined data here if necessary
    const combinedData = {
      realWorld: realWorldData,
      weatherForecast: data,
    };
    console.log(combinedData);
    handleNext();
  };

  return (
    <Box sx={{ width: "85%" }}>
      <Typography sx={{ fontWeight: "700", mb: "1%", ml: "33%", mt: "2%" }}>
        Agency for Hydrometeorology The Committee of Environmental Protection
      </Typography>
      <Tabs
        aria-label="Basic tabs"
        value={horizontalValue}
        sx={{ backgroundColor: "white" }}
        onChange={(event, value) => {
          if (typeof value === "number" && value >= 0) {
            setHorizontalValue(value);
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
            Real Weather
            <br /> Data From station
          </CustomTabs>
          <CustomTabs disableIndicator color="success" variant="plain">
            Weather station <br />
            (status,location)
          </CustomTabs>
          <CustomTabs disableIndicator color="success" variant="plain">
            Weather Forecast
          </CustomTabs>
          <CustomTabs disableIndicator color="success" variant="plain">
            Hydro Station(General <br />
            Info,status,location)
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
            alignSelf: "center",
          }}
        >
          <form onSubmit={handleSubmit1(handleRealWorldSubmit)}>
            <CustomTab>
              <FormLabel htmlFor="custom-date">Date</FormLabel>
              <Input
                type="date"
                id="custom-date"
                placeholder="Type in here…"
                {...register1("realWorld.date")}
              />
            </CustomTab>
              {errors1.realWorld?.date && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors1.realWorld.date.message}
                  </Typography>
                  </Box>
                  )}
               
            <CustomTab>
              <FormLabel htmlFor="custom-air-temperature">
                Air temperature<br></br>(in degree celcius)(at night)
              </FormLabel>
              <Input
                type="number"
                id="custom-air-temperature"
                placeholder="Type in here…"
                {...register1("realWorld.airTemp")}
              />
              
            </CustomTab>
              {errors1.realWorld?.airTemp && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors1.realWorld.airTemp.message}
                  </Typography>
                  </Box>
                  )}
            <CustomTab>
              <FormLabel htmlFor="custom-precipitation-day">
                Precipitation<br></br>(mm)(During the day)
              </FormLabel>
              <Input
                type="number"
                id="custom-precipitation-day"
                placeholder="Type in here…"
                {...register1("realWorld.precepitationDay")}
              />
              
            </CustomTab>
              {errors1.realWorld?.precepitationDay && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors1.realWorld.precepitationDay.message}
                  </Typography>
                  </Box>
                  )}
            <CustomTab>
              <FormLabel htmlFor="custom-precipitation-night">
                Precipitation<br></br>(mm)(at night)
              </FormLabel>
              <Input
                type="number"
                id="custom-precipitation-night"
                placeholder="Type in here…"
                {...register1("realWorld.precepitationNight")}
              />
              
            </CustomTab>
            {errors1.realWorld?.precepitationNight && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors1.realWorld.precepitationNight.message}
                  </Typography>
                  </Box>
                  )}
            <CustomTab>
              <FormLabel htmlFor="custom-naturalfactor-night">
                Natural Factor<br></br>(At night)
              </FormLabel>
              <Input
                type="number"
                id="custom-naturalfactor-night"
                placeholder="Type in here…"
                {...register1("realWorld.naturalFactor")}
              />
              
            </CustomTab>
          {errors1.realWorld?.naturalFactor && (
                <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                <ErrorOutlineOutlined
                  sx={{ marginRight: "0.2em", fontSize: "1em" }}
                />
                <Typography color="error" sx={{ fontSize: "0.8em" }}>
                  {errors1.realWorld.naturalFactor.message}
                </Typography>
                </Box>
                )}
            <CustomTab>
              <FormLabel htmlFor="custom-snow-Height">
                Snow Height(cm)
              </FormLabel>
              <Input
                type="number"
                id="custom-snow-Height"
                placeholder="Type in here…"
                {...register1("realWorld.snowHeight")}
              />
              
            </CustomTab>
              {errors1.realWorld?.snowHeight && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors1.realWorld.snowHeight.message}
                  </Typography>
                  </Box>
                  )}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outlined" type="submit" color="success">
                Save&Next
              </Button>
            </Box>
          </form>
        </TabPanel>
        <TabPanel
          value={1}
          sx={{ backgroundColor: "white", width: "40%", alignSelf: "center" }}
        >
          <Box display={"flex"}>
            <Box mr={"2em"}>
              <CustomTab>
                <FormLabel htmlFor="custom-station-Name">Name</FormLabel>
                <Select placeholder="Station List" name="foo">
                  <Option value="station1">station1</Option>
                  <Option value="station2">station2</Option>
                  <Option value="station3">station3</Option>
                  <Option value="station4">station4</Option>
                </Select>
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-location">Location</FormLabel>
                <Input
                  id="custom-location"
                  placeholder="Type in here…"
                  defaultValue={"Location1"}
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-elevation">Elevation</FormLabel>
                <Input
                  type="number"
                  id="custom-elevation"
                  placeholder="Type in here…"
                  defaultValue={"34"}
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-installation-data">
                  Installation Data
                </FormLabel>
                <Input
                  id="custom-installation-data"
                  placeholder="Type in here…"
                  defaultValue={"installation data"}
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
                  defaultValue={"19-11-2023"}
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-status">status</FormLabel>
                <Select placeholder="status" name="foo">
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
                  defaultValue={"condition1"}
                />
              </CustomTab>
            </Box>
            <Box>
              <Box
                width={"15em"}
                height={"15em"}
                border={"2px solid green"}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" color="success" onClick={handleNext}>
              Save&Next
            </Button>
          </Box>
        </TabPanel>
        <TabPanel
          value={2}
          sx={{
            backgroundColor: "white",
            width: "40%",
            alignSelf: "center",
          }}
        >
          <form onSubmit={handleSubmit2(handleWeatherForecastSubmit)}>
            <CustomTab>
              <FormLabel htmlFor="custom-location">Location</FormLabel>
              <Input
                type="text"
                id="custom-location"
                placeholder="Type in here…"
                {...register2("weatherForecast.location")}
              />
              
            </CustomTab>
              {errors2.weatherForecast?.location && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors2.weatherForecast.location.message}
                  </Typography>
                  </Box>
                  )}
            <CustomTab>
              <FormLabel htmlFor="custom-at-night">
                At night(in degree celcius)
              </FormLabel>
              <Input
                type="number"
                id="custom-at-night"
                placeholder="Type in here…"
                {...register2("weatherForecast.tempAtNight")}
              />
              
            </CustomTab>
              {errors2.weatherForecast?.tempAtNight && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors2.weatherForecast.tempAtNight.message}
                  </Typography>
                  </Box>
                  )}
            <CustomTab>
              <FormLabel htmlFor="custom-during-the-day">
                During the day(in degree celcius)
              </FormLabel>
              <Input
                type="number"
                id="custom-during-the-day"
                placeholder="Type in here…"
                {...register2("weatherForecast.tempAtDay")}
              />
              
            </CustomTab>
              {errors2.weatherForecast?.tempAtDay && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors2.weatherForecast.tempAtDay.message}
                  </Typography>
                  </Box>
                  )}
            <CustomTab>
              <FormLabel htmlFor="custom-wind-direction">
                Wind Direction
              </FormLabel>
              <Input
                type="number"
                id="custom-wind-direction"
                placeholder="Type in here…"
                {...register2("weatherForecast.windDirecetion")}
              />
              
            </CustomTab>
              {errors2.weatherForecast?.windDirecetion && (
                  <Box sx={{ display: "flex",ml:'16em',mt:'0.1em',mb:'1em'}}>
                  <ErrorOutlineOutlined
                    sx={{ marginRight: "0.2em", fontSize: "1em" }}
                  />
                  <Typography color="error" sx={{ fontSize: "0.8em" }}>
                    {errors2.weatherForecast.windDirecetion.message}
                  </Typography>
                  </Box>
                  )}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outlined" type="submit" color="success">
                Save&Next
              </Button>
            </Box>
          </form>
        </TabPanel>
        <TabPanel
          value={3}
          sx={{ backgroundColor: "white", width: "40%", alignSelf: "center" }}
        >
          <Box display={"flex"}>
            <Box mr={"2em"}>
              <CustomTab>
                <FormLabel htmlFor="custom-station-Name">Name</FormLabel>
                <Select placeholder="Station List" name="foo">
                  <Option value="station1">station1</Option>
                  <Option value="station2">station2</Option>
                  <Option value="station3">station3</Option>
                  <Option value="station4">station4</Option>
                </Select>
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-location">Location</FormLabel>
                <Input
                  id="custom-location"
                  placeholder="Type in here…"
                  defaultValue={"Location1"}
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-elevation">Elevation</FormLabel>
                <Input
                  type="number"
                  id="custom-elevation"
                  placeholder="Type in here…"
                  defaultValue={"34"}
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-installation-data">
                  Installation Data
                </FormLabel>
                <Input
                  id="custom-installation-data"
                  placeholder="Type in here…"
                  defaultValue={"installation data"}
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
                  defaultValue={"19-11-2023"}
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-status">status</FormLabel>
                <Select placeholder="status" name="foo">
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
                  defaultValue={"condition1"}
                />
              </CustomTab>
            </Box>
            <Box>
              <Box
                width={"15em"}
                height={"15em"}
                border={"2px solid green"}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" color="success" onClick={handleNext}>
              Save&Next
            </Button>
          </Box>
        </TabPanel>
        <TabPanel
          value={4}
          sx={{ backgroundColor: "white", width: "40%", alignSelf: "center" }}
        >
          <CustomTab>
            <FormLabel htmlFor="custom-station-Name">Watershed</FormLabel>
            <Select placeholder="pick Base on the Station Location" name="foo">
              <Option value="station1">station1</Option>
              <Option value="station2">station2</Option>
              <Option value="station3">station3</Option>
              <Option value="station4">station4</Option>
            </Select>
          </CustomTab>
          <CustomTab>
            <FormLabel htmlFor="custom-river-name">River Name</FormLabel>
            <Input
              id="custom-rikver-name"
              placeholder="Type in here…"
              defaultValue={"River1"}
            />
          </CustomTab>
          <CustomTab>
            <FormLabel htmlFor="custom-hydrostation">Hydrostation</FormLabel>
            <Input
              id="custom-hydrostation"
              placeholder="Type in here…"
              defaultValue={"hydrostation"}
            />
          </CustomTab>
          <CustomTab>
            <FormLabel htmlFor="custom-water-level">water level(cm)</FormLabel>
            <Input
              type="number"
              id="custom-water-level"
              placeholder="Type in here…"
              defaultValue={"40"}
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
              defaultValue={"10"}
            />
          </CustomTab>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" color="success" onClick={handleNext}>
              Save&Next
            </Button>
          </Box>
        </TabPanel>
      </Tabs>
    </Box>
  );
}
