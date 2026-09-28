# Favorites Demo – Sản phẩm yêu thích

## 1. Mục đích
App bán hàng demo nhỏ cho bài tập đại học, tập trung vào **một tính năng duy nhất**:
`Sản phẩm → Thêm/bỏ yêu thích → Màn hình Yêu thích`, với trạng thái được quản lý tập trung bằng **Zustand**.

## 2. Công nghệ
- React Native + Expo (SDK 57)
- TypeScript (strict)
- Zustand (quản lý state)
- React Navigation (bottom tabs)
- @expo/vector-icons (icon trái tim)

## 3. Cấu trúc thư mục
```
src/
├── components/
│   ├── ProductCard.tsx      # Card sản phẩm (đọc/ghi favorite qua store)
│   ├── FavoriteItem.tsx     # Dòng sản phẩm ở màn hình Yêu thích
│   ├── FavoriteButton.tsx   # Nút trái tim (stateless) + animation nhẹ
│   ├── ProductImage.tsx     # Ảnh sản phẩm, fallback emoji khi lỗi mạng
│   └── EmptyState.tsx       # Trạng thái trống
├── screens/
│   ├── ProductsScreen.tsx
│   └── FavoritesScreen.tsx
├── store/
│   └── favoritesStore.ts    # Zustand store – nguồn dữ liệu duy nhất
├── data/products.ts         # 8 sản phẩm mẫu
├── types/product.ts
├── navigation/AppNavigator.tsx
└── theme/theme.ts           # Màu, spacing, format giá
```

## 4. Cài đặt
Yêu cầu: Node.js 20+ và ứng dụng **Expo Go** trên điện thoại (hoặc Android Studio / Xcode Simulator).
```bash
npm install
```

## 5. Chạy
```bash
npx expo start
```
Quét mã QR bằng Expo Go, hoặc nhấn `a` (Android emulator) / `i` (iOS simulator) / `w` (web).
Kiểm tra kiểu: `npx tsc --noEmit`.
> Ảnh sản phẩm tải từ internet; nếu mất mạng, app tự hiện emoji thay thế.

## 6. favoritesStore hoạt động thế nào
- `favorites`: mảng `Product[]` – nơi duy nhất lưu danh sách yêu thích.
- `addFavorite(product)`: thêm sản phẩm, **bỏ qua nếu id đã tồn tại** nên không bị trùng.
- `removeFavorite(id)`: lọc sản phẩm ra khỏi mảng.
- `isFavorite(id)`: kiểm tra một sản phẩm có đang được yêu thích không.
- `toggleFavorite(product)`: nếu đã yêu thích thì gọi `removeFavorite`, ngược lại gọi `addFavorite`.
- `ProductCard`, `FavoriteItem`, `FavoritesScreen` và badge trên tab đều đăng ký (subscribe) vào cùng store,
  nên khi state đổi thì mọi nơi cập nhật ngay, không cần truyền props hay đồng bộ thủ công.

## Zustand vs Redux Toolkit
Zustand có API đơn giản: chỉ cần một hàm `create` là có store dùng được ngay qua hook.
Nó ít boilerplate hơn Redux Toolkit (không cần slice, Provider hay dispatch), nên rất hợp với feature nhỏ như Favorites.
Redux Toolkit có cấu trúc chặt chẽ hơn, với slice, action và reducer được quy ước rõ ràng.
Nhờ đó Redux Toolkit phù hợp hơn với ứng dụng lớn, nhiều người cùng phát triển và có logic phức tạp.
Với bài toán này, Zustand dễ triển khai và dễ đọc hơn, nhưng điều đó không có nghĩa Zustand luôn tốt hơn Redux Toolkit.
Lựa chọn nào tốt hơn còn tùy quy mô và nhu cầu của dự án.
