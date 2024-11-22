import { FC, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import useStore from './store';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const ServicePage = lazy(() => import('./pages/Services'));
const ServiceRoomPage = lazy(() => import('./pages/ServiceRoomPage'));

const App: FC = () => {
  const { isRefreshing, current } = useStore(state => ({
    isRefreshing: state.isRefreshing,
    current: state.current,
  }));
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      current();
      setIsInitialized(true);
    };
    initialize();
  }, [current]);

  if (isRefreshing || !isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="/services"
          element={<PrivateRoute redirectTo="/" component={<ServicePage />} />}
        />
        <Route
          path="/services/rooms/:roomId"
          element={<PrivateRoute redirectTo="/" component={<ServiceRoomPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
