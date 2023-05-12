import s from './Main.module.scss';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { BsFillCircleFill, BsFillSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Main = () => {
    return (
        <div className={s.container}>
            <img src={logo} alt='Картинка не прогрузилась' />
            <Link to='/aroma/women'>
                <div className={s['block']}>
                    <AiFillCaretUp />
                    <p className={s.title}>Женские ароматы</p>
                </div>
            </Link>
            <Link to='/aroma/man'>
                <div className={s['block']}>
                    <AiFillCaretDown />
                    <p>Мужские ароматы</p>
                </div>
            </Link>
            <Link to='/aroma/uneversal'>
                <div className={s['block']}>
                    <BsFillCircleFill />
                    <p>Универсальные ароматы</p>
                </div>
            </Link>
            <Link to='/aroma/selection'>
                <div className={s['block']}>
                    <BsFillSquareFill />
                    <p>Подбор аромата</p>
                </div>
            </Link>
        </div>
    );
};

export default Main;
