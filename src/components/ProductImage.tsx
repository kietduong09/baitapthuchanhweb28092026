import React, { useState } from 'react';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Product } from '../types/product';
import { colors } from '../theme/theme';

interface Props {
  product: Product;
  style?: StyleProp<ViewStyle>;
}

/** Ảnh sản phẩm; nếu tải lỗi (mất mạng) thì hiện emoji thay thế. */
export default function ProductImage({ product, style }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <View style={[styles.box, style]}>
      {failed ? (
        <Text style={styles.emoji}>{product.emoji}</Text>
      ) : (
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
          onError={() => setFailed(true)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
  emoji: { fontSize: 44 },
});
