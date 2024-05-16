import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Link, useLocation } from "react-router-dom";
import { Table } from "@mui/joy";
import { Button, Tab, TabList,TabPanel,Tabs, styled } from "@mui/joy";
import { Sheet } from "@mui/joy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from '@mui/icons-material/Person';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EventIcon from '@mui/icons-material/Event';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { Typography } from "@mui/joy";
import { height } from "@mui/system";
export default function CardGroup() {
  const value = useLocation();
  const data = value.state;
  const [addMem, setAddMem] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  React.useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAlert]);
  
  console.log(data);  
  const CustomTab = styled(Tab)({
    fontWeight: 'bold',
    '&.Mui-selected': {
      color: '#458844ba',
      borderBottom: '2px solid #458844ba',
      background: 'none',
    },
  });
  const temp1=data.member;
  const temp2=data.Data;
  // delete data.member;
  // delete data.Data;
  console.log(temp1);
  const groupData = { ...data };
  if ('member' in groupData) {
    delete groupData.member;
  }
  if('Data'in groupData){
    delete groupData.Data;
  }
  const memberData = data.member;
  const Gdata=data.Data;
  const keys = Object.keys(groupData);
  console.log(memberData);
  const data1: string[][] = memberData;
  const data2: string[][] = Gdata;
  return (
    <>
      <Button
      variant="outlined"
        sx={{
          border:'none',
          alignSelf: "flex-start",
          position: "fixed",
          left: "0em",
          color: "white",
          zIndex: "100",
          "&:hover": {
            color: "#a2bc69",
            cursor: "pointer",
          },
        }}
      >
        <Link to={"/"}>
          <ArrowBackIcon />
        </Link>
      </Button>
      <Sheet sx={{height:'100vh',width:'100vw',justifyContent:'center',alignContent:'flex-start'}}>
      <Tabs
        defaultValue="GroupInfo"
        sx={{
          alignItems:'center'
        }}
      >
        <TabList sx={{alignSelf:'center'}}>
          <CustomTab value="GroupInfo">
           Group Info
          </CustomTab>
          <CustomTab  value="Members">
            Members
          </CustomTab>
          <CustomTab  value="Data">
            Data
          </CustomTab>
        </TabList>
        <TabPanel value="GroupInfo" sx={{height: 400,width:'45%',maxHeight: 400}}>
          <Card variant="outlined">
            <CardContent>
              <Table>
                <tbody>
                  {keys.map((key) => (
                    <tr key={key}>
                      <td scope="row">
                        <b>{key}</b>
                      </td>
                      <td>{data[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardContent>
          </Card>
          </TabPanel>
        <TabPanel value="Members" sx={{height: 600,width:'85%',maxHeight: 600}}>
        
        <Sheet  sx={{ height: 600, overflow: 'auto',border:'1px solid #d3d3d3',borderRadius:'1%', pl:1,pr:1}}>
            <Table borderAxis="xBetween" 
            aria-label="table with sticky header"
            stickyFooter stickyHeader variant="plain" hoverRow> 
              <thead>
              <tr >
                <th style={{width:'25%'}}><Typography startDecorator={<PersonIcon/>}>Name</Typography></th>
                <th><Typography startDecorator={<EditCalendarIcon/>}>Last Logged In</Typography></th>
                <th><Typography startDecorator={<EventIcon/>}>Created date</Typography></th>
                <th><Typography startDecorator={<CorporateFareIcon/>}>Organization</Typography></th>
              </tr>
              </thead>
              <tbody >
                {data1.map((member, index) => (
          <tr key={index}>
            {member.map((info, infoIndex) => (
              <td key={infoIndex}>{info}</td>
            ))}
          </tr>
        ))}
              </tbody>
            
            <tfoot >
              <tr>
                <td colSpan={4} style={{textAlign:'end'}}>
            <Button color="success" onClick={() => setAddMem(true)} >Invite members</Button>
            
            </td>
            </tr>
            </tfoot>
            </Table>
            </Sheet>

   
      </TabPanel>
      <TabPanel value="Data" sx={{height: 600,width:'85%',maxHeight: 600,overflowY:'scroll'}}>
        
        <Card variant="outlined">
          <CardContent>
            <Table borderAxis="xBetween" stickyFooter variant="plain" hoverRow> 
              
              <tr >
                <th style={{width:'25%'}}>Data Name</th>
                <th>Owner</th>
                <th>Date Last Modified</th>
                <th>Created</th>
              </tr>
              <tbody >
                {data2.map((Data, index) => (
          <tr key={index}>
            {Data.map((info, infoIndex) => (
              <td key={infoIndex}>{info}</td>
            ))}
          </tr>
        ))}
              </tbody>
              <tfoot>
              <tr>
                <td colSpan={4} style={{textAlign:'end'}}>
                <Button color="success" sx={{width:'fit-content',alignSelf:'end'}}>Add Data</Button>
            </td>
            </tr>
            </tfoot>
            </Table>
           
          </CardContent>
        </Card>
     
   
      </TabPanel>
      </Tabs>
      </Sheet>
    </>
  );
}