import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Main from '../pages/Main/Main';
import Aromas from '../pages/Aromas/Aromas';
import Aroma from '../pages/Aroma/Aroma';
import Admin from '../pages/Admin/Admin/Admin';
import AdminEditPost from '../pages/Admin/AdminEditPost/AdminEditPost';

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
        path: '/aroma/:for/:id',
        element: <Aroma />,
        errorElement: <NotFound />,
    },

    //private routes
    {
        path: '/admin',
        element: <Admin />,
        errorElement: <NotFound />,
    },
    {
        path: '/admin/add-item',
        element: <AdminEditPost type='add' />,
    },
    {
        path: '/admin/change-item',
        element: <AdminEditPost type='change' />,
    },
    {
        path: '/admin/all-items',
        element: <AdminEditPost type='get' />,
    },
]);
