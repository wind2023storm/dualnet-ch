import { Box, Typography } from '@mui/material';

import TypePanel from '../TypePanel'

import "assets/Dashboard.style.css"
//import dashboard from 'assets/images/dashboard.png'

// ==============================|| TypePanel ||============================== //

const Header = () => {
    return(
            <Box 
                className="dashboard-header"
            >
                {/*<img src={dashboard} className='img-dashboard' alt="dashboard" />*/}
                <Typography variant='h1' className='detail-header-label'>Dashboard</Typography>
                {/*<TypePanel />*/}
            </Box>
    );
}

export default Header;
