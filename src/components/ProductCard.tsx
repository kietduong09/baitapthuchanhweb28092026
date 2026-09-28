import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Product } from '../types/product';
import { useFavoritesStore } from '../store/favoritesStore';
import { colors, formatPrice, spacing } from '../theme/theme';
import FavoriteButton from './FavoriteButton';
import ProductImage from './ProductImage';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  // Chỉ đọc trạng thái + gọi action từ store, không giữ state riêng.
  const isFavorite = useFavoritesStore((s) =>
    s.favorites.some((p) => p.id === product.id),
  );
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <View style={styles.card}>
      <View>
        <ProductImage product={product} style={styles.image} />
        <View style={styles.heart}>
          <FavoriteButton active={isFavorite} onPress={() => toggleFavorite(product)} />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {product.description}
        </Text>
        <Text style={styles.price}>{formatPrice(product.price)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  image: { width: '100%', aspectRatio: 1 },
  heart: { position: 'absolute', top: spacing.sm, right: spacing.sm },
  info: { padding: spacing.md, gap: 2 },
  name: { fontSize: 15, fontWeight: '600', color: colors.ink },
  description: { fontSize: 12, color: colors.muted },
  price: { fontSize: 16, fontWeight: '700', color: colors.accent, marginTop: spacing.xs },
});
