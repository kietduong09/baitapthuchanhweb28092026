import { Product } from '../types/product';

// Ảnh dùng loremflickr với tham số lock để mỗi sản phẩm luôn ra cùng một ảnh.
const img = (keyword: string, lock: number) =>
  `https://loremflickr.com/400/400/${keyword}?lock=${lock}`;

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Áo thun basic',
    price: 189000,
    image: img('tshirt', 1),
    emoji: '👕',
    description: 'Cotton mềm, form rộng thoải mái.',
  },
  {
    id: 'p2',
    name: 'Giày thể thao',
    price: 1250000,
    image: img('sneakers', 2),
    emoji: '👟',
    description: 'Đế êm, phù hợp đi hằng ngày.',
  },
  {
    id: 'p3',
    name: 'Tai nghe không dây',
    price: 890000,
    image: img('headphones', 3),
    emoji: '🎧',
    description: 'Bluetooth 5.3, pin dùng 30 giờ.',
  },
  {
    id: 'p4',
    name: 'Đồng hồ tối giản',
    price: 1590000,
    image: img('wristwatch', 4),
    emoji: '⌚',
    description: 'Mặt kính chống trầy, dây da.',
  },
  {
    id: 'p5',
    name: 'Ba lô đi học',
    price: 420000,
    image: img('backpack', 5),
    emoji: '🎒',
    description: 'Ngăn laptop 15 inch, chống nước nhẹ.',
  },
  {
    id: 'p6',
    name: 'Túi xách da',
    price: 760000,
    image: img('handbag', 6),
    emoji: '👜',
    description: 'Da PU cao cấp, thiết kế gọn nhẹ.',
  },
  {
    id: 'p7',
    name: 'Kính mát',
    price: 320000,
    image: img('sunglasses', 7),
    emoji: '🕶️',
    description: 'Chống tia UV400, gọng nhẹ.',
  },
  {
    id: 'p8',
    name: 'Nón lưỡi trai',
    price: 149000,
    image: img('cap', 8),
    emoji: '🧢',
    description: 'Vải dày, khóa điều chỉnh phía sau.',
  },
];
