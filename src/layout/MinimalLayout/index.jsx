import { Outlet, useLocation } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import { Container } from '@mui/material';

// project imports
import Customization from '../Customization';
import chart from 'assets/images/logo.png'

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
    const location = useLocation();
    const { pathname } = location;
    const data = [
        {url: '/admin', title: 'NETWORK'},
        {url: '/signin', title: 'LOG-OUT'},
        {url: '/dashboard', title: 'DASHBOARD'},
        {url: '/exchange', title: 'EXCHANGE'},
    ]
    return (
        <Box>
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1, pt: 2 }}>
                    <img 
                        src={chart}
                        alt="this is chart"
                        style={{width: '160px'}}
                    />
                </Box>
                <Box 
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'left',
                        typography: 'body1',
                        '& > :not(style) + :not(style)': {
                            ml: 2,
                        },
                        ml: '10vh',
                        pb: 2
                    }}
                >
                    {
                        data.map((item, i) => {
                            return (
                                <Link key={i} href={item.url} underline="none" sx={{
                                    color:  pathname === item.url ? "#09fc09" : "#fff",
                                }}>
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </Box>
                <Outlet />
                <Customization />
            </Container>
        </Box>
    )
};

export default MinimalLayout;
