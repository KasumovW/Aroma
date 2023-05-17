import s from './Main.module.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.webp';
import { BsList } from 'react-icons/bs';

const Main = () => {
    return (
        <div className={s.container}>
            <img src={logo} alt='Картинка не прогрузилась' />

            <Link to='/admin'>
                <BsList />
            </Link>

            <Link to='/aroma/women'>
                <div className={s['block']}>
                    <img
                        src='https://app.plmuskus.ru/assets/ipad/img/woman-icon.png'
                        alt='Картинка не пргрузилась'
                    />
                    <p className={s.title}>Женские ароматы</p>
                </div>
            </Link>
            <Link to='/aroma/man'>
                <div className={s['block']}>
                    <img
                        src='https://app.plmuskus.ru/assets/ipad/img/man-icon.png'
                        alt='Картинка не пргрузилась'
                    />
                    <p>Мужские ароматы</p>
                </div>
            </Link>
            <Link to='/aroma/uneversal'>
                <div className={s['block2']}>
                    <img
                        src='https://app.plmuskus.ru/assets/ipad/img/uni-icon.png'
                        alt='Картинка не пргрузилась'
                    />
                    <p>Универсальные ароматы</p>
                </div>
            </Link>
            <Link to='/aroma/selection'>
                <div className={s['block2']}>
                    <img
                        src='https://app.plmuskus.ru/assets/ipad/img/bottles-icon.png'
                        alt='Картинка не пргрузилась'
                    />
                    <p>Подбор аромата</p>
                </div>
            </Link>
        </div>
    );
};

export default Main;
