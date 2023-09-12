import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <ScrollIndicator />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
