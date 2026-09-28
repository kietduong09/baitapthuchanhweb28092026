export interface Product {
  id: string;
  name: string;
  price: number; // đơn vị: VND
  image: string; // URL ảnh
  emoji: string; // hiển thị dự phòng khi ảnh không tải được
  description: string;
}
