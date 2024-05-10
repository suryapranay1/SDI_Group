
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Link, useLocation } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { Button, styled } from "@mui/joy";
import { Sheet } from "@mui/joy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import img from '../images/Map-of-Andhra-Pradesh1.jpg';
import { url } from "inspector";

export default function TabsFlexPlacement() {
    const value = useLocation();
    const data = value.state;
    const temp1=data.member;
    delete data.member;
    console.log(temp1);
    
    const keys = Object.keys(data);
    console.log(data);
    const CustomTab = styled(Tab)({
        fontWeight: 'bold',
        '&.Mui-selected': {
          color: '#458844ba',
          borderBottom: '2px solid #458844ba',
          background: 'none',
        },
      });
  return (
    <>
    
    <Button
        sx={{
          backgroundColor: "#458844ba",
          alignSelf: "flex-start",
          position: "fixed",
          top:'0em',
          left: "0em",
          color: "white",
          zIndex: "100",
          "&:hover": {
            backgroundColor: "#a2bc69",
            cursor: "pointer",
          },
        }}
      >
        <Link to={"/"}>
          <ArrowBackIcon />
        </Link>
      </Button>
    
    <Box sx={{marginLeft:40,marginTop:20}}>
      <Tabs
        variant="soft"
        
        aria-label="Placement indicator tabs"
        defaultValue="Data"
        sx={{
          
          height: 350,
          width:800,
          alignSelf:'center',
          
          
        }}
      >
        <TabList sx={{alignSelf:'center'}}>
          <CustomTab value="Data">
           Data
          </CustomTab>
          <CustomTab  value="Members">
            Members
          </CustomTab>
        </TabList>
        <TabPanel value="Data" sx={{height: 400,maxHeight: 400,overflowY:'scroll'}}>
        
          <Card variant="outlined">
            <CardContent>
              <Table>
                <TableBody>
                  {keys.map((key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        <b>{key}</b>
                      </TableCell>
                      <TableCell>{data[key]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
       
     
        </TabPanel>
        <TabPanel value="Members" sx={{height: 400,maxHeight: 400,overflowY:'scroll'}}>
        
        <Card variant="outlined">
          <CardContent>
            <Table>
              <TableBody>
                {temp1.map((element:string,index:number) => (
                  <TableRow key={element}>
                    <TableCell component="th" scope="row">
                      <b>Member{index+1}</b>
                    </TableCell>
                    <TableCell>{element}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
     
   
      </TabPanel>
      </Tabs>
    </Box>
    </>
  );
}
