import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/joy';
import { useState } from 'react';
const columns = [
  {
    field: 'name',
    headerName: 'Name',

  },
  {
    field: 'CreatedDate',
    headerName: 'Created Date',
    sortable: false,
    type: 'string',
  },
  {
    field: 'DateModified',
    headerName: 'Date Modified',
    sortable: false,
  },
{
    field: 'Description',
    headerName: 'Description',
    sortable: false,
    type: 'string',
  },
  {
    field: 'LevelOfSharing',
    headerName: 'Level Of Sharing',
    type: 'string',
    sortable: false,
  },
];
const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 12);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  const meridiem = Math.random() < 0.5 ? 'AM' : 'PM';

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`;
};
const generateRandomRows = (numRows: number) => {
  const rows = [];
  for (let i = 1; i <= numRows; i++) {
    rows.push({
      name: `map${i}`,
      UserMailId: `user${i}@example.com`,
      CreatedDate: `${Math.floor(Math.random() * 30) + 1}-${
        Math.floor(Math.random() * 12) + 1
      }-${Math.floor(Math.random() * (2023 - 1990 + 1)) + 1990}`,
      DateModified: `${Math.floor(Math.random() * 30) + 1}-${
        Math.floor(Math.random() * 12) + 1
      }-${Math.floor(Math.random() * (2023 - 1990 + 1)) + 1990}`,
      LevelOfSharing: Math.random() > 0.5 ? 'High' : 'Low',
      Description:Math.random() > 0.5 ? 'Good':'bad',
    });
  }
  return rows;
};
export default function DataTable() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const rows = generateRandomRows(10);
return (
    <Stack sx={{ height:'700', width: '80%', overflow: 'hidden' ,margin:'20px', ml:'8em'}}>
      <TableContainer sx={{ overflow: 'hidden'}} >
        <Table stickyHeader sx={{border:'1px solid #9a9c9b'}}>
          <TableHead>
            <TableRow sx={{ fontWeight: 'bold',}}>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: '900',
                    textAlign: 'center',
                  }}
                >
                  <Stack direction={'row'} gap={'4px'}>
                    <p style={{fontWeight:'bold',fontSize:'1.12em',marginLeft:'1.2em'}}>{column.headerName}</p>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, rowIndex) => (
              <TableRow key={row.name}>
                {columns.map((column, colIndex) => (
                  <TableCell
                    key={colIndex}
                    sx={{
                      borderTop: '1px solid #9a9c9b',
                      textAlign: 'center',
                    }}
                  >
                    {column.field === 'UserMailId' &&
                    row.UserMailId === null ? (
                      '-'
                    ) : (
                      row[column.field as keyof typeof row]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,25]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ overflow: 'hidden' }}
      />
    </Stack>
  );
}