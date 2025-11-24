import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingBag, Plus, Minus, X, Trash2, ChevronRight, ChefHat, Search, ImageOff, ArrowLeft, Lightbulb, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from './constants';
import { Category, MenuItem, CartItem, CategoryConfig } from './types';

// --- Components defined in the same file for single-file output requirement ---

// 1. Header Component
const Header: React.FC<{ showBack?: boolean; onBack?: () => void; title?: string }> = ({ 
  showBack = false, 
  onBack,
  title = "许娘娘小私厨"
}) => (
  <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div className="px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {showBack ? (
          <button onClick={onBack} className="p-1.5 -ml-2 rounded-full text-gray-600 hover:bg-gray-100">
            <ArrowLeft size={24} />
          </button>
        ) : (
          <div className="bg-brand-500 p-1.5 rounded-lg text-white shadow-brand">
            <ChefHat size={24} />
          </div>
        )}
        <div>
          <h1 className="text-lg font-bold text-gray-900 leading-tight">{title}</h1>
          {!showBack && <p className="text-xs text-gray-500">私房美味，用心烹饪</p>}
        </div>
      </div>
      {!showBack && (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
             <Search size={18} />
          </div>
        </div>
      )}
    </div>
  </header>
);

// 2. Category Navigation Component
interface CategoryNavProps {
  activeCategory: Category;
  onSelect: (c: Category) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onSelect }) => {
  return (
    <div className="sticky top-[60px] z-20 bg-gray-50/95 backdrop-blur-sm py-2 overflow-x-auto no-scrollbar shadow-inner border-b border-gray-100/50">
      <div className="flex px-4 gap-3 min-w-max">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-brand-600 text-white shadow-md transform scale-105'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// 3. Image Component with Fallback
const DishImage: React.FC<{ src: string; alt: string; size?: 'sm' | 'md'; onClick?: () => void }> = ({ src, alt, size = 'md', onClick }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const dimClass = size === 'sm' ? 'w-16 h-16' : 'w-24 h-24';

  if (error) {
    return (
      <div onClick={onClick} className={`${dimClass} bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 shrink-0 cursor-zoom-in`}>
        <ImageOff size={size === 'sm' ? 16 : 24} />
      </div>
    );
  }

  return (
    <div onClick={onClick} className={`${dimClass} rounded-xl bg-gray-100 shrink-0 overflow-hidden relative cursor-zoom-in`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
};

// 4. Menu Item Component
interface MenuItemProps {
  item: MenuItem;
  quantity: number;
  onAdd: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
  onPreview: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemProps> = ({ item, quantity, onAdd, onRemove, onPreview }) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 transition-shadow hover:shadow-md">
      <DishImage src={item.image} alt={item.name} onClick={() => onPreview(item)} />
      
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
            {item.category} | 许娘娘拿手菜
          </p>
        </div>
        <div className="flex items-end justify-between mt-2">
          {/* Prices are hidden as requested */}
          <span className="text-sm font-medium text-gray-400"></span>
          
          {quantity === 0 ? (
            <button
              onClick={() => onAdd(item)}
              className="bg-brand-500 text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform"
            >
              <Plus size={18} strokeWidth={3} />
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-1 py-1 border border-gray-100">
              <button
                onClick={() => onRemove(item)}
                className="bg-white text-gray-600 p-1.5 rounded-full shadow-sm active:scale-90 transition-transform"
              >
                <Minus size={14} />
              </button>
              <span className="font-bold w-4 text-center text-gray-800">{quantity}</span>
              <button
                onClick={() => onAdd(item)}
                className="bg-brand-500 text-white p-1.5 rounded-full shadow-sm active:scale-90 transition-transform"
              >
                <Plus size={14} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 5. Checkout View Component
interface CheckoutViewProps {
  cart: CartItem[];
  onBack: () => void;
  onConfirm: () => void;
}

const CheckoutView: React.FC<CheckoutViewProps> = ({ cart, onBack, onConfirm }) => {
  // Group items by category
  const groupedItems = useMemo(() => {
    const groups: Partial<Record<Category, CartItem[]>> = {};
    CATEGORIES.forEach(cat => {
      const itemsInCat = cart.filter(item => item.category === cat.id);
      if (itemsInCat.length > 0) {
        groups[cat.id] = itemsInCat;
      }
    });
    return groups;
  }, [cart]);

  // Suggestion Logic
  const suggestions = useMemo(() => {
    const msgs: string[] = [];
    const counts = {
      meat: cart.filter(i => i.category === Category.MEAT).length,
      veg: cart.filter(i => i.category === Category.VEGETABLE).length,
      soup: cart.filter(i => i.category === Category.SOUP).length,
      staple: cart.filter(i => i.category === Category.STAPLE).length,
      dessert: cart.filter(i => i.category === Category.DESSERT).length,
    };

    if (counts.meat > 2 && counts.veg === 0) msgs.push("荤菜挺多啦，来点素菜解解腻？🥬");
    if (counts.veg > 2 && counts.meat === 0) msgs.push("全是素菜，不来点肉肉犒劳自己吗？🍖");
    if (counts.soup === 0) msgs.push("吃饭不喝汤，干得慌，来碗热汤顺顺气？🥣");
    if (counts.staple === 0) msgs.push("主食还没点呢，手作面食很不错哦！🍜");
    if (counts.dessert === 0 && (counts.meat + counts.veg) > 0) msgs.push("饭后来点甜品，生活更甜蜜~ 🍰");
    
    return msgs;
  }, [cart]);

  const totalCount = cart.reduce((acc, i) => acc + i.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center p-8">
         <div className="bg-gray-100 p-6 rounded-full mb-4">
            <ShoppingBag size={48} className="text-gray-300" />
         </div>
         <h2 className="text-xl font-bold text-gray-900 mb-2">购物车是空的</h2>
         <p className="text-gray-500 mb-8">快去选点许娘娘的拿手好菜吧！</p>
         <button onClick={onBack} className="bg-brand-500 text-white px-8 py-3 rounded-full font-bold shadow-lg">
            返回点餐
         </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
       <Header showBack onBack={onBack} title="订单确认" />
       
       <div className="p-4 space-y-6">
          {/* Suggestion Card */}
          {suggestions.length > 0 && (
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl">
               <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold">
                  <Lightbulb size={20} />
                  <span>娘娘的贴心建议</span>
               </div>
               <ul className="space-y-1 text-sm text-amber-800 pl-7 list-disc">
                  {suggestions.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                  ))}
               </ul>
            </div>
          )}

          {/* Grouped List */}
          {CATEGORIES.map(cat => {
            const items = groupedItems[cat.id];
            if (!items) return null;
            return (
              <div key={cat.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 border-l-4 border-brand-500 pl-3 flex items-center justify-between">
                   {cat.label}
                   <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                     {items.reduce((a, b) => a + b.quantity, 0)}份
                   </span>
                </h3>
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-start">
                       <div className="flex gap-3">
                          <DishImage src={item.image} alt={item.name} size="sm" />
                          <div>
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-400 mt-1">x {item.quantity}</div>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          
          <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
             <span className="text-gray-600">商品总数</span>
             <span className="text-xl font-bold text-gray-900">{totalCount} 道菜</span>
          </div>

          <div className="h-4"></div>
       </div>

       {/* Bottom Action Bar */}
       <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-xl z-50 max-w-md mx-auto">
          <button 
             onClick={onConfirm}
             className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
             <CheckCircle2 size={24} />
             确认下单给后厨
          </button>
       </div>
    </div>
  );
};

// 6. Cart Summary / Bottom Bar (For Menu View)
interface CartBarProps {
  cart: CartItem[];
  onCheckout: () => void;
  onClear: () => void;
}

const CartBar: React.FC<CartBarProps> = ({ cart, onCheckout }) => {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (totalCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 pointer-events-none">
        <div className="bg-gray-900 text-white rounded-full shadow-2xl p-2 pr-2 flex items-center justify-between pointer-events-auto max-w-md mx-auto">
            <div className="flex items-center gap-3 pl-2">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white animate-bounce-short">
                        <UtensilsCrossed size={24} />
                    </div>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 flex items-center justify-center rounded-full border-2 border-gray-900">
                        {totalCount}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold">已选 {totalCount} 道菜</span>
                    <span className="text-xs text-gray-400">美味即刻享受</span>
                </div>
            </div>
            
            <button 
                className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-bold text-sm transition-colors shadow-lg"
                onClick={onCheckout}
            >
                去结算
                <ChevronRight size={16} className="inline ml-1" />
            </button>
        </div>
      </div>
  );
};

// --- Main App Component ---

type ViewState = 'menu' | 'checkout';

export default function App() {
  const [view, setView] = useState<ViewState>('menu');
  const [activeCategory, setActiveCategory] = useState<Category>(Category.MEAT);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== item.id);
    });
  };

  const clearCart = () => setCart([]);

  const getQuantity = (itemId: string) => {
    return cart.find((i) => i.id === itemId)?.quantity || 0;
  };

  const filteredItems = useMemo(() => 
    MENU_ITEMS.filter((item) => item.category === activeCategory),
  [activeCategory]);

  const handleCheckout = () => {
    setView('checkout');
    window.scrollTo(0, 0);
  };

  const handleConfirmOrder = () => {
     alert('收到啦！许娘娘马上为您准备美味！👩‍🍳');
     setCart([]);
     setView('menu');
  };

  if (view === 'checkout') {
    return <CheckoutView cart={cart} onBack={() => setView('menu')} onConfirm={handleConfirmOrder} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto shadow-2xl relative">
      <Header />
      
      <CategoryNav 
        activeCategory={activeCategory} 
        onSelect={setActiveCategory} 
      />

      <main className="p-4 pb-32 min-h-[80vh]">
        {/* Category Title Banner */}
        <div className="flex items-center gap-2 mb-4 opacity-60">
             <span className="h-px w-4 bg-brand-300"></span>
             <span className="text-xs font-bold tracking-widest text-brand-700 uppercase">{activeCategory}</span>
             <span className="h-px flex-1 bg-brand-100"></span>
        </div>

        <div className="space-y-4">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              quantity={getQuantity(item.id)}
              onAdd={addToCart}
              onRemove={removeFromCart}
              onPreview={setPreviewItem}
            />
          ))}
          
          <div className="py-8 text-center text-gray-300 text-sm">
            <p>—— 许娘娘小私厨 · 用心做菜 ——</p>
          </div>
        </div>
      </main>

      <CartBar 
        cart={cart} 
        onCheckout={handleCheckout}
        onClear={clearCart}
      />
      {previewItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setPreviewItem(null)}
        >
          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-3 -right-3 bg-white text-gray-700 rounded-full p-2 shadow-md"
              onClick={() => setPreviewItem(null)}
            >
              <X size={20} />
            </button>
            <img
              src={previewItem.image}
              alt={previewItem.name}
              className="rounded-xl shadow-2xl max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
