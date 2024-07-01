import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import LocomotiveScroll from 'locomotive-scroll';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const ServicePage = lazy(() => import('./pages/Services'));
const ServiceRoomPage = lazy(() => import('./pages/ServiceRoomPage'));

const App: FC = () => {
  new LocomotiveScroll();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/rooms/:roomId" element={<ServiceRoomPage />} />
      </Route>
    </Routes>
  );
};

export default App;
