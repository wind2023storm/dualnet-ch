// project imports
import MainCard from 'components/MainCard';
import Item from '../Item'
import Header from './Header'
import Body from './Body'

import icon_2 from 'assets/images/icon_2.png'
import "assets/Dashboard.style.css"
// ==============================|| TypographyCom ||============================== //

const TypographyCom = () => {
    return(
        <MainCard>
            <Header />
            <Item icon={icon_2} />
            <Body />
        </MainCard>
    );
}

export default TypographyCom;
