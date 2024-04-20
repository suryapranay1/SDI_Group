import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
interface Props{
  labels:Array<string>;
}
export default function SwitchLabels(props:Props) {
  const switchlabel=props.labels;
  return (
    <FormGroup>
      {
        switchlabel.map(lab=><FormControlLabel control={<Switch  color='success' size='small'/>} label={lab} sx={{paddingLeft:'1em'}}/>) 
      }

    </FormGroup>
  );
}
