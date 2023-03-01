import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import "assets/Dashboard.style.css"

// ==============================|| Square ||============================== //

const Square = ({color}) => {
    const customization = useSelector((state) => state.customization);
    return(
        <Box style={{display: 'flex'}} flexDirection={"column"}>
            <Box 
                className='square' 
                component="span" 
                sx={{
                    backgroundColor: color ? color : '#34f703',
                    borderRadius: `${customization.borderRadius-8}px`
                }} 
            />
        </Box>
    );
}

export default Square;
