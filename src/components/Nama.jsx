import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function InputNama(dataNama) {
  const [nama, setNama] = React.useState('');
  const tes = dataNama;
  const handleChange = (event) => {
    event.preventDefault();
    setNama(event.target.value);
  };

  return (
    <>
      <div className='w-[50%] p-2 my-1'>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Nama</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nama}
              label="Nama"
              onChange={handleChange}
            >
              <MenuItem value={1}>Aloysius Juan</MenuItem>
              <MenuItem value={2}>Budi Rudianto</MenuItem>
              <MenuItem value={3}>Surti Pisoanti</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    
    </>
  );
}

export default InputNama;