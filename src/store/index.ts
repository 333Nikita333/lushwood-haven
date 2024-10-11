import axios from 'axios';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IOrder {
  roomeName: string;
  roomType: string;
  dateCheckIn: Date;
  dateCheckOut: Date;
}
interface IUser {
  name: string;
  email: string;
  newOrders: IOrder[];
  oldOrders: IOrder[];
}
interface IAuthStore {
  user: IUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  current: () => Promise<void>;
  logout: () => void;
}

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};
const API_URL = import.meta.env.VITE_API_URL;
console.log('API_URL', API_URL);

const useStore = create<IAuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        login: async (email, password) => {
          set({ isLoading: true, error: null });

          try {
            const response = await axios.post(`${API_URL}/auth/login`, {
              email,
              password,
            });
            console.log('response.data login', response.data);
            const { user, token } = response.data;
            set({ user, token });
          } catch (error: any) {
            console.log('login get store', get());
            console.error('Login failed:', error.response.data.error.message);
            set({
              isLoading: false,
              error: error.response.data.error.message,
              user: null,
              token: null,
            });
          } finally {
            set({ isLoading: false });
          }
        },
        register: async (name, email, password) => {
          set({ isLoading: true, error: null });

          try {
            const response = await axios.post(`${API_URL}/auth/register`, {
              name,
              email,
              password,
            });
            const { user, token } = response.data;
            set({ user, token });
          } catch (error: any) {
            console.error('Register failed:', error);
            set({ isLoading: false, error, user: null, token: null });
          } finally {
            set({ isLoading: false });
          }
        },
        current: async () => {
          console.log('get() fetch current user: ', get());
          const { token } = get();
          if (token) {
            set({ isLoading: true, error: null });
            try {
              const response = await axios.get(`${API_URL}/auth/current`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              const user = response.data;
              set({ user });
            } catch (error: any) {
              console.error('Fetch current failed:', error);
              set({ isLoading: false, error, user: null, token: null });
            } finally {
              set({ isLoading: false });
            }
          }
        },
        logout: () => {
          set(() => ({ ...initialState }));
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
