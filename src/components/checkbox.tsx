import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

interface ListItem {
  key: string;
  value: string;
}

const CheckboxList = () => {
  const items: ListItem[] = [
    { key: '1', value: 'Option 1' },
    { key: '2', value: 'Option 2' },
    { key: '3', value: 'Option 3' },
  ];
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const newSelectedValues = [...selectedValues];

    if (checked) {
      // Add the value if checked
      if (!newSelectedValues.includes(value)) {
        newSelectedValues.push(value);
      }
    } else {
      // Remove the value if unchecked
      const index = newSelectedValues.indexOf(value);
      if (index > -1) {
        newSelectedValues.splice(index, 1);
      }
      
    }
    console.log(newSelectedValues);
    
    setSelectedValues(newSelectedValues);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.key}>
          <FormControlLabel
            control={<Checkbox checked={selectedValues.includes(item.value)} onChange={handleChange} value={item.value} />}
            label={item.value}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
