import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import Header from './BodyHeader'
import Chart from './Chart'
import Footer from './BodyFooter'

import "assets/Dashboard.style.css"

// ==============================|| DetailBody ||============================== //

const DetailBody = () => {
    const customization = useSelector((state) => state.customization);
    return(
        <Box 
            className='dashboard-detail-info'
            sx={{ borderRadius: `${customization.borderRadius}px` }}
        >
            <Header />
            <Chart />
            <Footer />
        </Box>
    );
}

export default DetailBody;
