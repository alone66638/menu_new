export enum Category {
  TOP = 'TOP排名',
  CHEF_REC = '主厨推荐',
  MEAT = '荤菜',
  VEGETABLE = '素菜',
  COLD_DISH = '凉菜',
  SOUP = '汤类',
  STAPLE = '主食',
  DESSERT = '甜品',
}

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CategoryConfig {
  id: Category;
  label: string;
}