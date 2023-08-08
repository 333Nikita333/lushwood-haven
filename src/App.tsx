import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Home = lazy(() => import('./pages/Home/Home'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
