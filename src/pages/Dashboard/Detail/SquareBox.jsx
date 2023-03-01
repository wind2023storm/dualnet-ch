import { Box } from '@mui/material';

import "assets/Dashboard.style.css"
import Square from 'components/Square';

// ==============================|| SquareBox ||============================== //

const SquareBox = () => {
    return(
        <Box style={{display: 'flex'}} flexDirection={"row"}>
            <Box style={{display: 'flex'}} flexDirection={"column"}>
                <Square color="#FFC107" />
                {/*<Square color="#345664" />*/}
            </Box>
            {/*<Box style={{display: 'flex'}} flexDirection={"column"}>
                <Square color="#712f60" />
                <Square color="#00ff00" />
            </Box>
            <Box style={{display: 'flex'}} flexDirection={"column"}>
                <Square color="#6ac5b9" />
                <Square color="#010580" />
            </Box>
            <Box style={{display: 'flex'}} flexDirection={"column"}>
                <Square color="#ff0000" />
                <Square color="#5ef89d" />
            </Box>*/}
        </Box>
    );
}

export default SquareBox;
