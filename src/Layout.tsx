import { FC, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import ScrollIndicator from './components/ScrollIndicator';
import { StyledToastContainer } from './styles/CustomToast.styled';

const Layout: FC = () => {
  const location = useLocation();
  const hideFooterRoutes = ['/'];
  const shouldDisplayFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <ScrollIndicator />

      <Suspense fallback={<Loader />}>
        <Outlet />
        {shouldDisplayFooter && <Footer />}
      </Suspense>

      <StyledToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default Layout;
