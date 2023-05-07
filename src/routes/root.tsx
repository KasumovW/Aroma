import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Main from '../pages/Main/Main';
import Aromas from '../pages/Aromas/Aromas';
import Aroma from '../pages/Aroma/Aroma';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
    },
    {
        path: '/women',
        element: <Aromas aromas={{ id: 1, title: 'Женские' }} />,
        errorElement: <NotFound />,
    },
    {
        path: '/man',
        element: <Aromas aromas={{ id: 2, title: 'Мужские' }} />,
        errorElement: <NotFound />,
    },
    {
        path: '/uneversal',
        element: <Aromas aromas={{ id: 3, title: 'Уневирсальные' }} />,
        errorElement: <NotFound />,
    },
    {
        path: '/:for/:id',
        element: <Aroma />,
        errorElement: <NotFound />,
    },
]);
