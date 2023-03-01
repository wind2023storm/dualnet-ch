import { Box, Typography } from '@mui/material';

import Dot from 'components/Dot'

import "assets/Dashboard.style.css"

// ==============================|| TypePanel ||============================== //

const TypePanel = () => {
    const data = [
        {color: '#34f703', title: 'Spread Alert', value: '> 1350'},
        {color: '#ff0000', title: 'Stop Out', value: 'on /off'},
        {color: '#34f703', title: 'Pip Alert Free Pip', value: '< 1100'},
    ]
    return(
        <Box 
            className="type-panel"
        >
            {
                data.map((item, i)=>(
                    <Box className="type-panel-item" key={i}>
                        <Dot color={item.color} />
                        <Typography variant='body1' className='font-14 white width120 ml4'>{item.title}</Typography>
                        <Typography variant='body1' className='font-14 white'>{item.value}</Typography>
                    </Box>
                ))
            }
        </Box>
    );
}

export default TypePanel;
