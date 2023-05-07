import { useNavigate } from 'react-router-dom';
import s from './Header.module.scss';

import { AiOutlineLeft } from 'react-icons/ai';
import logo from '../../assets/logo.jpeg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={s.header}>
            <AiOutlineLeft fill='#681205' className={s.iconArrow} onClick={() => navigate(-1)} />
            <img onClick={() => navigate('/')} src={logo} alt='Картинка не прогрузилась' />
        </header>
    );
};

export default Header;
