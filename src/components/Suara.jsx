import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

function InputSuara() {

  const [suara, setSuara] = React.useState('');

  function handleChangeSuaraForOptions(suaraSelected) {
    testingStore = [];
    const url = "http://localhost:3000/" + suaraSelected;
    axios.get(url).then(({data}) => {
      for(let i = 0; i < data.length; i++){
        testingStore[i] = data[i].nama;
      }
    }).catch(err => console.log(err));
  } 


  const handleChangeSuara = (event) => {
    event.preventDefault();
    setSuara(event);
    handleChangeSuaraForOptions(event.target.value);
    console.log(event.target.value);
  };


  return (
    <>
      <div className='w-[50%] p-2 mt-3'>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Suara</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={suara}
              label="Suara"
              onSelect={handleChangeSuara}

            >
              <MenuItem value={"sopran_1"}>Sopran 1</MenuItem>
              <MenuItem value={"sopran_2"}>Sopran 2</MenuItem>
              <MenuItem value={"alto_1"}>Alto 1</MenuItem>
              <MenuItem value={"alto_2"}>Alto 2</MenuItem>
              <MenuItem value={"tenor_1"}>Tenor 1</MenuItem>
              <MenuItem value={"tenor_2"}>Tenor 2</MenuItem>
              <MenuItem value={"bass_1"}>Bass 1</MenuItem>
              <MenuItem value={"bass_2"}>Bass 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
    
  );
}

export default InputSuara;