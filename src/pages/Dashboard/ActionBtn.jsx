import { Box, Link } from '@mui/material';

import "assets/Dashboard.style.css"

// ==============================|| ActionBtn ||============================== //

const ActionBtn = ({icon}) => {
    return(
        <Box className='action-btn'>
            <Link href="/detail" underline="none">
                <img src={icon} className='img-20' alt="icon" />
            </Link>
        </Box>

    );
}

export default ActionBtn;
