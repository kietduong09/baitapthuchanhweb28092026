import { create } from 'zustand';
import { Product } from '../types/product';

interface FavoritesState {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (product: Product) => void;
}

/**
 * Nguồn dữ liệu duy nhất cho sản phẩm yêu thích.
 * Mọi component đều đọc/ghi qua store này, không giữ state favorite riêng.
 */
export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  addFavorite: (product) =>
    set((state) =>
      // Chặn trùng: nếu đã có thì giữ nguyên state
      state.favorites.some((p) => p.id === product.id)
        ? state
        : { favorites: [...state.favorites, product] },
    ),

  removeFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((p) => p.id !== productId),
    })),

  isFavorite: (productId) => get().favorites.some((p) => p.id === productId),

  toggleFavorite: (product) => {
    const { isFavorite, addFavorite, removeFavorite } = get();
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  },
}));
