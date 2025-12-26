import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';

const router = createBrowserRouter([
    { path: '/', element: <Root />, children: [
            { index: true, element: <Accueil /> },
            { path: 'a-propos', element: <APropos /> },
            { path: 'projets', element: <Projets /> },
            { path: 'contact', element: <Contact /> }
        ]}
]);
