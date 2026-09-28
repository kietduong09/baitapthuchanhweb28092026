import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { colors, spacing } from '../theme/theme';

export default function ProductsScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Sản phẩm</Text>
            <Text style={styles.subtitle}>Chạm vào trái tim để lưu món bạn thích</Text>
          </View>
        }
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  list: { padding: spacing.lg, gap: spacing.md },
  column: { gap: spacing.md },
  header: { marginBottom: spacing.md, gap: 4 },
  title: { fontSize: 28, fontWeight: '800', color: colors.ink },
  subtitle: { fontSize: 14, color: colors.muted },
});
