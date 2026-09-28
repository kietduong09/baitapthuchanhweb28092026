import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import EmptyState from '../components/EmptyState';
import FavoriteItem from '../components/FavoriteItem';
import { useFavoritesStore } from '../store/favoritesStore';
import { colors, spacing } from '../theme/theme';
import { RootTabParamList } from '../navigation/AppNavigator';

type Props = BottomTabScreenProps<RootTabParamList, 'Favorites'>;

export default function FavoritesScreen({ navigation }: Props) {
  // Cùng một store với ProductsScreen -> luôn đồng bộ.
  const favorites = useFavoritesStore((s) => s.favorites);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Yêu thích</Text>
        {favorites.length > 0 && (
          <Text style={styles.subtitle}>{favorites.length} sản phẩm</Text>
        )}
      </View>

      {favorites.length === 0 ? (
        <EmptyState onExplore={() => navigation.navigate('Products')} />
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <FavoriteItem product={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: spacing.lg, paddingTop: spacing.lg, gap: 4 },
  title: { fontSize: 28, fontWeight: '800', color: colors.ink },
  subtitle: { fontSize: 14, color: colors.muted },
  list: { padding: spacing.lg, gap: spacing.md },
});
