import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProductsScreen from '../screens/ProductsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { useFavoritesStore } from '../store/favoritesStore';
import { colors } from '../theme/theme';

export type RootTabParamList = {
  Products: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  // Badge trên tab lấy trực tiếp từ store
  const favoritesCount = useFavoritesStore((s) => s.favorites.length);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.ink,
          tabBarInactiveTintColor: colors.muted,
          tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
          tabBarLabelStyle: { fontWeight: '600' },
        }}
      >
        <Tab.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            title: 'Sản phẩm',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: 'Yêu thích',
            tabBarBadge: favoritesCount > 0 ? favoritesCount : undefined,
            tabBarBadgeStyle: { backgroundColor: colors.accent },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
