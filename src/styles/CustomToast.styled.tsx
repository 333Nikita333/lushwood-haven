import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { modalBgImage } from '../data/photos';

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    padding: 16px;
    font-family: raleway_r, sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.secondary};
    border-radius: 15px;
    color: #000000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.354);
    background-image: url(${modalBgImage});
    background-blend-mode: multiply;
    background-size: 500px;
  }
  
  .Toastify--animate-icon {
    background-color: #fff;
    border-radius: 50%;
  }

  .Toastify__spinner {
    border-right-color: ${({ theme }) => theme.colors.primaryColor};
  }

  .Toastify__toast--success {
    background-color: #4caf5090;
    border: 2px solid #4caf50;
    box-shadow: 0 4px 12px rgba(7, 82, 1, 0.354);
  }

  .Toastify__toast--error {
    background-color: #f4433690;
    border: 2px solid #f44336;
    box-shadow: 0 4px 12px rgba(213, 3, 3, 0.354);
  }

  .Toastify__toast--info {
    background-color: #2196f390;
    border: 2px solid #2196f3;
    box-shadow: 0 4px 12px rgba(4, 7, 184, 0.354);
  }

  .Toastify__toast--warning {
    background-color: #ff980090;
    border: 2px solid #ff9800;
    box-shadow: 0 4px 12px rgba(115, 60, 2, 0.354);
  }

  .Toastify__progress-bar {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .Toastify__close-button {
    color: #000000;
  }

  .Toastify__close-button--light {
    opacity: 1;
  }
`;
