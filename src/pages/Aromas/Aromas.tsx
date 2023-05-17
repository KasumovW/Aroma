import s from './Aromas.module.scss';
import { useFetch } from '../../hooks/useFetch';
import AromasItem from '../../components/AromasItem/AromasItem';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

import { path } from '../../../path';

type Props = {
    aromas: { id: 1 | 2 | 3; title: string };
};

const Aromas = ({ aromas }: Props) => {
    const { data, loading, error } = useFetch(`${path}/aromas?for=${aromas.id}`);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h1>Error</h1>;
    }

    return (
        <div className={s.container}>
            <Header />
            <h1>{aromas.title} ароматы</h1>
            <div className={s.items}>
                {data.map((item) => (
                    <AromasItem aroma={item} />
                ))}
            </div>
        </div>
    );
};

export default Aromas;
