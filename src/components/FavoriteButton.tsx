import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/theme';

interface Props {
  active: boolean;
  onPress: () => void;
}

/** Nút trái tim thuần hiển thị (stateless), kèm hiệu ứng nảy nhẹ khi bấm. */
export default function FavoriteButton({ active, onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.25, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={8}
      style={styles.button}
      accessibilityRole="button"
      accessibilityLabel={active ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Ionicons
          name={active ? 'heart' : 'heart-outline'}
          size={22}
          color={active ? colors.accent : colors.ink}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
