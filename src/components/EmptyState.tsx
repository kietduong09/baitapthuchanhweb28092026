import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/theme';

interface Props {
  onExplore: () => void;
}

export default function EmptyState({ onExplore }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.heart}>❤️</Text>
      </View>
      <Text style={styles.title}>Chưa có sản phẩm yêu thích</Text>
      <Text style={styles.subtitle}>
        Hãy thêm những sản phẩm bạn yêu thích để xem lại sau.
      </Text>
      <Pressable style={styles.button} onPress={onExplore}>
        <Text style={styles.buttonText}>Khám phá sản phẩm</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl * 1.5,
    gap: spacing.md,
  },
  circle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  heart: { fontSize: 44 },
  title: { fontSize: 20, fontWeight: '700', color: colors.ink, textAlign: 'center' },
  subtitle: { fontSize: 14, lineHeight: 21, color: colors.muted, textAlign: 'center' },
  button: {
    marginTop: spacing.md,
    backgroundColor: colors.ink,
    paddingHorizontal: spacing.xl,
    paddingVertical: 14,
    borderRadius: 999,
  },
  buttonText: { color: colors.surface, fontSize: 15, fontWeight: '600' },
});
