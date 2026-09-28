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

/** Một dòng trong màn hình Yêu thích. */
export default function FavoriteItem({ product }: Props) {
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);

  return (
    <View style={styles.row}>
      <ProductImage product={product} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.price}>{formatPrice(product.price)}</Text>
      </View>
      <FavoriteButton active onPress={() => removeFavorite(product.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.md,
  },
  image: { width: 72, height: 72, borderRadius: 12 },
  info: { flex: 1, gap: 4 },
  name: { fontSize: 16, fontWeight: '600', color: colors.ink },
  price: { fontSize: 15, fontWeight: '700', color: colors.accent },
});
