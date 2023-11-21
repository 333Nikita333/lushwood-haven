import { FC, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';

const Layout: FC = () => {
  const location = useLocation();
  const shouldDisplayFooter = location.pathname !== '/';

  return (
    <>
      <Header />
      <ScrollIndicator />

      <Suspense fallback={null}>
        <Outlet />
        {shouldDisplayFooter && <Footer />}
      </Suspense>
    </>
  );
};
export default Layout;
