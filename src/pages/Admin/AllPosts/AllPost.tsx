import { useFetch } from '../../../hooks/useFetch';
import Header from '../../../components/Header/Header';
import AromasItem from '../../../components/AromasItem/AromasItem';
import Loader from '../../../components/Loader/Loader';

import { path } from '../../../../path';

import s from './AllPosts.module.scss';
import { useEffect, useState } from 'react';

const AllPost = () => {
    const { data, loading, error } = useFetch(`${path}`);
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        setLocalData(data);
    }, [loading]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h1>Error</h1>;
    }

    const deleteItem = (id: number) => {
        fetch(`https://630fd20e36e6a2a04ee2254c.mockapi.io/api/aromas/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((res) => console.log(res));

        setLocalData(localData.filter((item: any) => item.id !== id));
    };

    return (
        <div className={s.container}>
            <Header />
            <h1>Все ароматы</h1>
            <div className={s.items}>
                {localData.map((item: any) => (
                    <div key={item.id} onClick={() => deleteItem(item.id)}>
                        <span className={s.exit}>❌</span>
                        <AromasItem aroma={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPost;
