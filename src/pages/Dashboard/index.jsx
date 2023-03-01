// project imports
import MainCard from 'components/MainCard';
import Pagination from './Pagination'
import Item from './Item'
import TypePanel from './TypePanel'

import "assets/Dashboard.style.css"
import icon_2 from 'assets/images/icon_2.png'
import icon_1 from 'assets/images/icon_1.png'
// ==============================|| TypographyCom ||============================== //

const TypographyCom = () => {
    return(
        <MainCard>
            <TypePanel />
            <Item icon={icon_2} />
            <Item icon={icon_1} />
            <Item icon={icon_1} />
            <Item icon={icon_1} />
            <Pagination />
        </MainCard>
    );
}

export default TypographyCom;
