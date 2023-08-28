import MobilNav from '../MobilNav/MobilNav';
import './BurgerMenu.css';
import { useState } from 'react';

const BurgerMenu = () => {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <>
            <label className='burger-menu'>
                <input type='checkbox' checked={isChecked}  className='burger-menu__checkbox'></input>
                <span className='burger-menu__burger'></span>
            </label>
            <MobilNav
                isChecked={isChecked}
                 />
        </>
    )
}

export default BurgerMenu;