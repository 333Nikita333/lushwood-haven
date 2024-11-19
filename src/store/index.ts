import axios, { AxiosResponse } from 'axios';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import { AuthResponse, AuthStore, ErrorResponse } from '../types';

const initialState: Omit<AuthStore, 'login' | 'register' | 'current' | 'logout'> = {
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
                      return data.data.message || 'Logged in successfully 👌';
                    },
                  },
                  error: {
                    render({ data }: { data: ErrorResponse }) {
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
              await toast
                .promise(
                  axios.get<{ token: string }, AxiosResponse<AuthResponse>>(
                    `${API_URL}/auth/current`,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  ),
                  {
                    pending: 'Fetching user info...',
                    success: {
                      render({ data }: { data: AxiosResponse<AuthResponse> }) {
                        return data.data.message || 'User info fetched 👌';
                      },
                    },
                    error: {
                      render({ data }: { data: ErrorResponse }) {
                        return data.response.data.error.message || 'Failed to fetch user info 🤯';
                      },
                    },
                  }
                )
                .then((response: AxiosResponse<AuthResponse>) => {
                  console.log('Current user response:', response.data);

                  const { user } = response.data.data;

                  set({ user, isLoggedIn: true });
                })
                .catch((error: ErrorResponse) => {
                  console.error('Current user error:', error.response.data.error.message); // Log the error
                  set({
                    isLoggedIn: false,
                    error: error.response.data.error.message || 'Fetching user info failed',
                  });
                });
            } finally {
              set({ isRefreshing: false, isLoading: false });
            }
          } else {
            set({ isLoading: false, isRefreshing: false });
          }
        },

        logout: () => {
          set(() => ({ ...initialState }));
          toast.success('Logged out successfully 👋');
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
