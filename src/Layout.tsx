import { FC, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';
import { StyledToastContainer } from './styles/CustomToast.styled';

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

      <StyledToastContainer
        position="top-center"
        autoClose={false}
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
