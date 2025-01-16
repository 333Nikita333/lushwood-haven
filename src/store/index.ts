import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import {
  ApiError,
  AuthResponse,
  AuthStore,
  BookingResponse,
  BookRoomData,
  ErrorResponse,
  UserResponse,
} from '../types';

const initialState: Omit<
  AuthStore,
  'login' | 'register' | 'current' | 'logout' | 'reserveRoom' | 'cancelOrder'
> = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};
const API_URL = import.meta.env.VITE_API_URL;

const useStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        login: async (email: string, password: string) => {
          set({ isLoading: true, error: null });

          try {
            await toast
              .promise(
                axios.post<{ email: string; password: string }, AxiosResponse<AuthResponse>>(
                  `${API_URL}/auth/login`,
                  {
                    email,
                    password,
                  }
                ),
                {
                  pending: 'Logging in...',
                  success: {
                    render({ data }: { data: AxiosResponse<AuthResponse> }) {
                      console.log('login toast data =>', data);
                      return data.data.message || 'Logged in successfully 👌';
                    },
                  },
                  error: {
                    render({ data }: { data: ErrorResponse }) {
                      console.log('login toast error =>', data);
                      return data.response.data.error.message || 'Login failed 🤯';
                    },
                  },
                }
              )
              .then((response: AxiosResponse<AuthResponse>) => {
                console.log('Login response data:', response.data);

                const { user, token } = response.data.data;

                set({ user, token, isLoggedIn: true });
              })
              .catch((error: ErrorResponse) => {
                console.error('Login error:', error.response.data.error.message);
                set({
                  isLoggedIn: false,
                  error: error.response.data.error.message || 'Login failed',
                });
              });
          } finally {
            set({ isLoading: false });
          }
        },

        register: async (name: string, email: string, password: string) => {
          set({ isLoading: true, error: null });

          try {
            await toast
              .promise(
                axios.post<
                  { name: string; email: string; password: string },
                  AxiosResponse<AuthResponse>
                >(`${API_URL}/auth/register`, {
                  name,
                  email,
                  password,
                }),
                {
                  pending: 'Registering...',
                  success: {
                    render({ data }: { data: AxiosResponse<AuthResponse> }) {
                      return data.data.message || 'Registration successful 👌';
                    },
                  },
                  error: {
                    render({ data }: { data: ErrorResponse }) {
                      return data.response.data.error.message || 'Registration failed 🤯';
                    },
                  },
                }
              )
              .then((response: AxiosResponse<AuthResponse>) => {
                console.log('Register response data:', response.data);

                const { user, token } = response.data.data;

                set({ user, token, isLoggedIn: true });
              })
              .catch((error: ErrorResponse) => {
                console.error('Register error:', error.response.data.error.message);
                set({
                  isLoggedIn: false,
                  error: error.response.data.error.message || 'Registration failed',
                });
              });
          } finally {
            set({ isLoading: false });
          }
        },

        current: async () => {
          set({ isRefreshing: true, isLoading: true, error: null });

          const { token } = get();

          if (token) {
            try {
              toast.info('Fetching user info...', { autoClose: false });

              const response = await axios.get<UserResponse>(`${API_URL}/auth/current`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              const { data: user } = response.data;

              console.log('Current user data:', user);
              set({
                user,
                isLoggedIn: true,
                error: null,
              });

              toast.dismiss();
              toast.success('User info fetched successfully 👌');
            } catch (error: any) {
              const errorCurrent: ApiError = error.response.data;
              console.error('Current user error:', errorCurrent);
              set({
                isLoggedIn: false,
                error: errorCurrent.error.message || 'Fetching user info failed',
              });

              toast.dismiss();
              toast.error(errorCurrent.error.message || 'Failed to fetch user info 🤯');
            } finally {
              set({ isRefreshing: false, isLoading: false });
            }
          } else {
            set({ isLoading: false, isRefreshing: false });
          }
        },

        logout: async () => {
          set({ isLoading: true, error: null });

          try {
            const { token } = get();
            if (!token) throw new Error('Unauthorized');

            await toast
              .promise(
                axios.post(
                  `${API_URL}/auth/logout`,
                  {},
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  }
                ),
                {
                  pending: 'Logging out...',
                  success: 'Logged out successfully 👋',
                  error: {
                    render({ data }: { data: ErrorResponse }) {
                      console.log('logout toast error =>', data);
                      return data.response.data.error.message || 'Logout failed 🤯';
                    },
                  },
                }
              )
              .then((response: AxiosResponse<AuthResponse>) => {
                console.log('Logout response data:', response.data);
                set(() => ({ ...initialState }));
              })
              .catch((error: ErrorResponse) => {
                console.error('Logout error:', error.response.data.error.message);
                set({ error: error.response.data.error.message || 'Logout failed' });
              });
          } finally {
            set({ isLoading: false });
          }
        },

        reserveRoom: async (data: BookRoomData) => {
          set({ isLoading: true, error: null });

          try {
            const { token, user } = get();
            if (!token) throw new Error('Unauthorized');

            await toast
              .promise(
                axios.post<BookRoomData, AxiosResponse<BookingResponse>>(
                  `${API_URL}/booking/reserve`,
                  data,
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  }
                ),
                {
                  pending: 'Reserving room...',
                  success: {
                    render({ data }: { data: AxiosResponse<BookingResponse> }) {
                      return data.data.message || 'Room reserved successfully 👌';
                    },
                  },
                  error: {
                    render({ data }: { data: ErrorResponse }) {
                      return data.response.data.error.message || 'Room reservation failed 🤯';
                    },
                  },
                }
              )
              .then((response: AxiosResponse<BookingResponse>) => {
                console.log('Room reservation response data:', response.data.data);

                const { data: order } = response.data;

                if (user) {
                  set({
                    user: {
                      ...user,
                      newOrders: user.newOrders ? [...user.newOrders, order] : [order],
                    },
                  });
                }
              })
              .catch((error: ErrorResponse) => {
                console.error('Room reservation error:', error.response.data.error.message);
                set({ error: error.response.data.error.message || 'Room reservation failed' });
              });
          } finally {
            set({ isLoading: false });
          }
        },

        cancelOrder: async (orderId: string) => {
          set({ isLoading: true, error: null });

          try {
            const { token, user } = get();
            if (!token) throw new Error('Unauthorized');

            await toast
              .promise(
                axios.delete(`${API_URL}/booking/cancel/${orderId}`, {
                  headers: { Authorization: `Bearer ${token}` },
                }),
                {
                  pending: 'Canceling booking...',
                  success: 'Booking canceled successfully 👌',
                  error: {
                    render({ data }: { data: ErrorResponse }) {
                      return data.response.data.error.message || 'Order cancellation failed 🤯';
                    },
                  },
                }
              )
              .then((response: AxiosResponse<BookingResponse>) => {
                console.log('Order cancellation response data:', response.data.data);

                if (user) {
                  const canceledOrder = user.newOrders?.find(order => order.id === orderId);

                  set({
                    user: {
                      ...user,
                      newOrders: user.newOrders?.filter(order => order.id !== orderId),
                      oldOrders: canceledOrder
                        ? [...(user.oldOrders || []), canceledOrder]
                        : user.oldOrders,
                    },
                  });
                }
              })
              .catch((error: ErrorResponse) => {
                console.error('Order cancellation error:', error.response.data.error.message);
                set({ error: error.response.data.error.message || 'Order cancellation failed' });
              });
          } finally {
            set({ isLoading: false });
          }
        },
      }),
      {
        name: 'auth-storage',
        getStorage: () => localStorage,
        partialize: state => ({ token: state.token }),
      }
    ),
    { name: 'AuthStore' }
  )
);

export default useStore;
