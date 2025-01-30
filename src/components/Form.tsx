import React, { useState } from 'react';
import {
  Typography,
  Button,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormGroup,
  SelectChangeEvent,
} from '@mui/material';

const Form: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1'); // Default value with type

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '300px',
        maxWidth: '100%',
        border: '1px solid #dbbb1c',
        margin: '0 auto',
        marginBottom: '2rem',
        borderRadius: '5px',
      }}
    >
      <form>
        <Box sx={{ padding: '20px' }}>
          <Typography variant="h2" sx={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            Form
          </Typography>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              label="Text Input"
              helperText="A helpful text"
              error={false}
              variant="outlined"
              sx={{
                marginBottom: '1.2rem',
              }}
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              label="Number Input"
              type="number"
              // helperText="Enter a number"
              error={false}
              variant="outlined"
              // defaultValue={0}
              sx={{
                marginBottom: '1.2rem',
              }}
            />
          </FormControl>
          <FormGroup>
            <FormLabel sx={{ textAlign: 'left', fontSize: '1.2rem' }}>Checkbox buttons</FormLabel>
            <FormControlLabel control={<Checkbox />} label="Option 1" />
            <FormControlLabel control={<Checkbox />} label="Option 2" />
          </FormGroup>
          <RadioGroup sx={{ marginBottom: '1rem' }}>
            <FormLabel>Radio buttons</FormLabel>
            <FormControlLabel value="option1" control={<Radio />} label="Radio 1" />
            <FormControlLabel value="option2" control={<Radio />} label="Radio 2" />
          </RadioGroup>
          <FormControl
            sx={{
              marginBottom: '1rem',
            }}
          >
            <InputLabel
              sx={{
                fontSize: '1.2rem',
                color: '#000',
              }}
            >
              Select
            </InputLabel>
            <Select value={selectedOption} onChange={handleChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
          <Button variant="text" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
