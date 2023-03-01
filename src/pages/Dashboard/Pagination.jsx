import * as React from 'react';
import {Pagination, Box, Grid, PaginationItem, Typography} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Grid container className='pagination'>
      <Grid item>
        <Box className="page-select">
            <Typography sx={{mr: 2}} className='font-14 white'>Per Page</Typography>

            <FormControl sx={{ m: 1, border: "none" }} size="small">
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    onChange={handleChange}
                    variant="outlined"
                    IconComponent={KeyboardArrowDownIcon}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </Box>
      </Grid>
      <Grid item>
        <Pagination
            color='success'
            component="div"
            variant="outlined"
            count={10}
            page={page}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            renderItem={(item) => (
                <PaginationItem
                slots={{
                  previous: KeyboardArrowLeftIcon,
                  next: KeyboardArrowRightIcon,
                  first: KeyboardDoubleArrowLeftIcon,
                  last: KeyboardDoubleArrowRightIcon
                }}
                {...item}
                />
            )}
        />
      </Grid>
    </Grid>
  );
}