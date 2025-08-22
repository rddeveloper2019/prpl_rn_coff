import { atom } from 'jotai';
import { CoffeePayload, CoffeeResponse, CoffeeType } from './coffee.model';
import axios, { AxiosError } from 'axios';
import { API } from '../api';

interface CoffeeState {
  coffees: CoffeeType[];
  isLoading: boolean;
  error: string | null;
}

export const coffeesAtom = atom<CoffeeState>({
  coffees: [],
  isLoading: false,
  error: null,
});

export const loadCoffees = atom(
  (_get) => _get(coffeesAtom),
  async (_get, _set, { type, text }: CoffeePayload) => {
    _set(coffeesAtom, { coffees: [], isLoading: true, error: null });
    try {
      const { data = [] } = await axios.get<CoffeeResponse>(API.load, {
        params: {
          type,
          text,
        },
      });

      _set(coffeesAtom, { coffees: data, isLoading: false, error: null });
    } catch (error) {
      if (error instanceof AxiosError) {
        _set(coffeesAtom, {
          coffees: [],
          isLoading: false,
          error: error.response?.data.message || error.message,
        });
      }
    }
  },
);
