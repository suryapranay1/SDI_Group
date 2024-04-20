import {
    Box,
    Button,
    Card,
    Grid,
    Input,
    Stack,
    Typography,
    Divider,
  } from '@mui/joy';
  import React, { useState } from 'react';
  import StorageIcon from '@mui/icons-material/Storage';
//   import DataMap from './data-map';
//   import FilterStack from './filter-type';
  
  const cardData = [
    {
      Name: 'Map1',
      DateCreated:'3/2/2024',
      Description:
        'Description',
      tags: 'orthophoto, ortho, aerial, imagery,  GIS',
      dateLastModified: '3/2/2024',
      levelofsharing: 'Public',
    },
    {
      Name: 'Aerial Photography (Orthophoto) - 2021',
      DateCreated:'3/2/2024',
      Description:
        'Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.',
      tags: 'orthophoto, ortho, aerial, imagery,  GIS',
      dateLastModified: '3/2/2024',
      levelofsharing: 'Public',
    },
    {
      Name: 'Aerial Photography (Orthophoto) - 2021',
      DateCreated:'3/2/2024',
      Description:
        'Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.',
      tags: 'orthophoto, ortho, aerial, imagery,  GIS',
      dateLastModified: '3/2/2024',
      levelofsharing: 'Public',
    },
    {
      Name: 'Aerial Photography (Orthophoto) - 2021',
      DateCreated:'3/2/2024',
      Description:
        'Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.',
      tags: 'orthophoto, ortho, aerial, imagery,  GIS',
      dateLastModified: '3/2/2024',
      levelofsharing: 'Public',
    },
    {
      Name: 'Aerial Photography (Orthophoto) - 2021',
      DateCreated:'3/2/2024',
      Description:
        'Aerial Photography Image Service (Orthophoto) of Tajkistan,at 3 inch resolution. Dated 2021.',
      tags: 'orthophoto, ortho, aerial, imagery,  GIS',
      dateLastModified: '3/2/2024',
      levelofsharing: 'Public',
    },
  ];
  
  const DataList = () => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = () => {
      console.log(searchText);
    };
  
    const handleInputChange = (event: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setSearchText(event.target.value);
    };
  
    return (
      <Stack marginLeft={'2rem'}>
        <Grid container spacing={1}>
          {/* <Grid md={1} xs="auto">
            <Divider orientation="vertical" />
          </Grid> */}
          <Grid xs="auto">
            {cardData.map((data, index) => (
              <Card
                variant="outlined"
                key={index}
                sx={{ width: 800, mt: 3, bgcolor: '#fff' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <StorageIcon />
                  <Typography>
                    <b>Dataset</b>
                  </Typography>
                </Box>
                <Typography level="body-sm">{data.Name}</Typography>
                <Stack>
                  <Typography>{data.Description}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                  <Box>
                    <Typography>
                      Level of Sharing : <b>{data.levelofsharing}</b>
                    </Typography>
                    </Box>
                    <Box>
                    <Typography>
                      Date Created : <b>{data.DateCreated}</b>
                    </Typography>
                    </Box>
                  <Box>
                    <Typography>
                      Date Last modified : <b>{data.dateLastModified}</b>
                    </Typography>
                    <Typography/>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Stack>
    );
  };
  
  export default DataList;