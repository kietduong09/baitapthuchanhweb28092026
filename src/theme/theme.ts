export const colors = {
  background: '#F6F5F2',
  surface: '#FFFFFF',
  ink: '#1D1D1F',
  muted: '#7A7A80',
  border: '#E8E6E1',
  accent: '#E5484D', // màu trái tim / giá nổi bật
  accentSoft: '#FDECEC',
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 };

export const formatPrice = (value: number): string =>
  `${value.toLocaleString('vi-VN')}₫`;
