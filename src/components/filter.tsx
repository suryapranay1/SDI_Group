import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import SwitchLabels from './switch';
interface Props{
    name:String;
    number:String;
    labels:Array<string>;
  }
export default function AccordionIndicator(props:Props) {
    const label=props.labels;
  return (
    <AccordionGroup
      sx={{
        maxWidth: 400,
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: 'rotate(45deg)',
        },
      }}
    >
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}>{props.number}</AccordionSummary>
        <AccordionDetails>
        <SwitchLabels labels={label}/>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
