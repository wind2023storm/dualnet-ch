import { Box } from '@mui/material';

import "assets/Dashboard.style.css"

// ==============================|| Dot ||============================== //

const Dot = ({color}) => {
    return(
        <Box className='dot' component="span" sx={{backgroundColor: color ? color : '#34f703'}} />
    );
}

export default Dot;
