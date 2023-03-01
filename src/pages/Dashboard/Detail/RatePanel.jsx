import React from 'react';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "assets/Dashboard.style.css"

// ==============================|| TYPOGRAPHY ||============================== //

const DashboardItem = () => {
    const customization = useSelector((state) => state.customization);
    return(
        <Box className="rate-box">
            <Box className="swap-panel">
                <Box 
                    className='rate-panel'
                    sx={{ 
                        borderRadius: `${customization.borderRadius}px` ,
                        background: `linear-gradient(to right, #49e11f, #1c5603)!important`
                    }}
                    alignItems={'center'}
                >
                    <Box
                        sx= {{
                            padding: '0px 17px',
                        }}
                    >
                        <Typography variant='body1' className='font-18 white'>19.4500</Typography>
                    </Box>
                    <Divider 
                        sx = {{
                            margin: '2px 2px 2px 2px',
                            opacity: .5
                        }}
                        orientation="vertical" 
                        flexItem
                    />

                    <Box
                        sx= {{
                            padding: '0px 17px',
                        }}
                    >
                        <Typography variant='body1' className='font-18 white'>SELL</Typography>
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Box>
                        <Typography variant='body1' className='font-16 white'>USDJPY</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <IconButton aria-label="delete" sx={{ color: '#ffffff' }}>
                            <KeyboardArrowDownIcon />
                        </IconButton>
                        <Typography variant='body1' className='font-14 white'>0.01</Typography>
                        <IconButton aria-label="delete" sx={{ color: '#ffffff' }}>
                            <KeyboardArrowUpIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box 
                    className='rate-panel'
                    sx={{ 
                        borderRadius: `${customization.borderRadius}px` ,
                        background: `linear-gradient(to left, #f51421, #580000)!important`
                    }}
                    alignItems={'center'}
                >
                    <Box
                        sx= {{
                            padding: '0px 17px',
                        }}
                    >
                        <Typography variant='body1' className='font-18 white'>SELL</Typography>
                    </Box>
                    <Divider 
                        sx = {{
                            margin: '2px 2px 2px 2px',
                            opacity: .5
                        }}
                        orientation="vertical" 
                        flexItem 
                    />
                    <Box
                        sx= {{
                            padding: '0px 17px',
                        }}
                    >
                        <Typography variant='body1' className='font-18 white'>19.4500</Typography>
                    </Box>
                </Box>
            </Box>
            <Box 
                className='rate-panel'
                sx={{ 
                    borderRadius: `${customization.borderRadius}px` ,
                    background: `linear-gradient(90deg, hsl(269deg 58% 41%) 0%, hsl(238deg 83% 67%) 54%);`
                }}
                ml={1}
                alignItems={'center'}
            >
                <Box
                    sx= {{
                        padding: '0px 17px',
                    }}
                >
                    <Typography variant='body1' className='font-18 white'>400</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default DashboardItem;
