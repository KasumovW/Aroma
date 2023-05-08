import { useState } from 'react';
import s from './ChangePost.module.scss';

type Props = {
    type: 'add' | 'change';
};

const ChangePost = ({ type }: Props) => {
    const onSubmit = () => console.log('Done!');

    const [data, setData] = useState({
        id: 1,
        for: null,
        number: null,
        title: null,
        price: null,
        accords: [],
        notes: [],
        image: null,
    });

    const handleChange = (key: string, value: any) => {
        setData({ ...data, [key]: value });
    };

    return (
        <div className={s.container}>
            <h1>{type === 'add' ? 'Добавление нового аромата' : 'Изменение аромата'}</h1>

            <form onSubmit={onSubmit}>
                <div className={s.main}>
                    <h3>Основные критерии</h3>
                    <input
                        onChange={(e) => handleChange('title', e.target.value)}
                        value={data.title || ''}
                        type='text'
                        placeholder='Название'
                    />
                    <input
                        onChange={(e) => handleChange('number', e.target.value)}
                        value={data.number || ''}
                        type='number'
                        placeholder='Номер'
                    />
                    <input
                        onChange={(e) => handleChange('price', e.target.value)}
                        value={data.price || ''}
                        type='number'
                        placeholder='Цена'
                    />
                    <input
                        onChange={(e) => handleChange('image', e.target.value)}
                        value={data.image || ''}
                        type='text'
                        placeholder='Ссылка на картинку'
                    />

                    <select onChange={(e) => handleChange('for', e.target.value)}>
                        <option value='1'>Женские</option>
                        <option value='2'>Мужскиие</option>
                        <option value='3'>Универсальные</option>
                    </select>
                </div>
                <div className={s.akkord}>
                    <h3>Аккорды</h3>
                    <div>
                        <input type='text' placeholder='Аккорды' />
                        <button type='button'>Добавить аккорд</button>
                    </div>
                    <span>Akkord, akkord, akkord, akkord, akkord</span>
                </div>
                <div className={s.notes}>
                    <h3>Ноты</h3>
                    <input type='text' placeholder='Тип ноты' />
                    <input type='text' placeholder='Название ноты' />
                    <input type='text' placeholder='Ссылка на картинку' />
                </div>

                <button type='submit'>Готово</button>
            </form>
        </div>
    );
};

export default ChangePost;
