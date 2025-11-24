import { Category, MenuItem, CategoryConfig } from './types';

export const CATEGORIES: CategoryConfig[] = [
  { id: Category.TOP, label: 'TOP排名' },
  { id: Category.CHEF_REC, label: '主厨推荐' },
  { id: Category.MEAT, label: '荤菜' },
  { id: Category.VEGETABLE, label: '素菜' },
  { id: Category.COLD_DISH, label: '凉菜' },
  { id: Category.SOUP, label: '汤类' },
  { id: Category.STAPLE, label: '主食' },
  { id: Category.DESSERT, label: '甜品' },
];

// Using loremflickr with specific keywords. 
// We include 'food' in every query to ensure we get food items.
const getRealImg = (keywords: string, id: string) => 
  `https://loremflickr.com/300/300/${keywords},food?lock=${id}`;

export const MENU_ITEMS: MenuItem[] = [
  // --- TOP 排名 (Items moved here are removed from other categories) ---
  { id: 'm2', category: Category.TOP, name: '水煮肉片', price: 58, image: new URL('./img/shuizhuroupian.png', import.meta.url).href },
  { id: 'm_crab', category: Category.TOP, name: '肉蟹煲', price: 128, image: new URL('./img/rouxiebao.png', import.meta.url).href },
  { id: 'm3', category: Category.TOP, name: '油焖大虾', price: 68, image: new URL('./img/youmendaxia.png', import.meta.url).href },
  { id: 'm12', category: Category.TOP, name: '辣炒蚬子', price: 32, image: new URL('./img/lachaoxianzi.png', import.meta.url).href },
  { id: 'm6', category: Category.TOP, name: '辣子鸡', price: 46, image: new URL('./img/laziji.png', import.meta.url).href },
  { id: 'm7', category: Category.TOP, name: '回锅肉', price: 42, image: new URL('./img/huiguorou.png', import.meta.url).href },
  { id: 'm8', category: Category.TOP, name: '蒜泥白肉', price: 45, image: new URL('./img/suannibairou.png', import.meta.url).href },
  { id: 'm16', category: Category.TOP, name: '香煎鸡排', price: 25, image: new URL('./img/xiangjianjipai.png', import.meta.url).href },
  { id: 'top_new_1', category: Category.TOP, name: '香酥饼', price: 10, image: new URL('./img/xiangsubing.png', import.meta.url).href },
  { id: 'v17', category: Category.TOP, name: '炸蘑菇', price: 28, image: new URL('./img/zhamogu.png', import.meta.url).href },
  { id: 'c1', category: Category.TOP, name: '五彩大拉皮', price: 26, image: new URL('./img/wucaidalapi.png', import.meta.url).href },
  { id: 's2', category: Category.TOP, name: '手打牛肉丸汤', price: 32, image: new URL('./img/shoudaniuwantang.png', import.meta.url).href },
  { id: 'k11', category: Category.TOP, name: '瓦香鸡', price: 32, image: new URL('./img/waxiangji.png', import.meta.url).href },
  { id: 'p11', category: Category.TOP, name: '蒜蓉大虾', price: 32, image: new URL('./img/suanrongdaxia.png', import.meta.url).href },
  { id: 'v11', category: Category.TOP, name: '地三鲜', price: 32, image: new URL('./img/disanxian.png', import.meta.url).href },

  // --- 主厨推荐 ---
  { id: 'rec_tofu', category: Category.CHEF_REC, name: '葱烧豆腐', price: 24, image: new URL('./img/congshaodoufu.png', import.meta.url).href },
  { id: 'rec1', category: Category.CHEF_REC, name: '酸菜炖大骨头', price: 58, image: new URL('./img/suancaidundagutou.png', import.meta.url).href },
  { id: 'rec2', category: Category.CHEF_REC, name: '爆炒芸豆丝', price: 28, image: getRealImg('stir_fried_shredded_kidney_beans_chili', 'rec2') },
  { id: 's1', category: Category.CHEF_REC, name: '鸭蛋豆腐汤', price: 22, image: new URL('./img/yadandoufutang.png', import.meta.url).href },

  // --- 荤菜 ---
  { id: 'm1', category: Category.MEAT, name: '锅包肉', price: 48, image: new URL('./img/guobaorou.png', import.meta.url).href },
  { id: 'm4', category: Category.MEAT, name: '酱牛肉', price: 72, image: new URL('./img/jiangniurou.png', import.meta.url).href },
  { id: 'm5', category: Category.MEAT, name: '卤猪蹄', price: 55, image: new URL('./img/luzhuti.png', import.meta.url).href },
  // m6 moved to TOP
  // m7 moved to TOP
  // m8 moved to TOP
  { id: 'm9', category: Category.MEAT, name: '油渣子', price: 38, image: getRealImg('fried_pork_fat_cracklings_crispy', 'm9') },
  { id: 'm10', category: Category.MEAT, name: '鸡爪', price: 35, image: new URL('./img/jizhua.png', import.meta.url).href },
  { id: 'm11', category: Category.MEAT, name: '葱爆肉丝', price: 38, image: getRealImg('stir_fried_shredded_pork_scallion_onion', 'm11') },
  // m12 moved to TOP
  { id: 'm13', category: Category.MEAT, name: '肉沫', price: 28, image: new URL('./img/roumo.png', import.meta.url).href },
  { id: 'm14', category: Category.MEAT, name: '肉末茄子', price: 30, image: new URL('./img/roumoqiezi.png', import.meta.url).href },
  { id: 'm15', category: Category.MEAT, name: '咖喱鸡肉', price: 42, image: new URL('./img/galijirou.png', import.meta.url).href },
  // m16 moved to TOP
  { id: 'm17', category: Category.MEAT, name: '炸鸡排', price: 25, image: new URL('./img/zhajipai.png', import.meta.url).href },
  { id: 'm18', category: Category.MEAT, name: '可乐鸡翅', price: 38, image: new URL('./img/kelejichi.png', import.meta.url).href },
  { id: 'm19', category: Category.MEAT, name: '土豆炖鸡肉', price: 45, image: new URL('./img/tudoudunjirou.png', import.meta.url).href },
  { id: 'm20', category: Category.MEAT, name: '炸鸡腿', price: 18, image: new URL('./img/zhajitui.png', import.meta.url).href },
  { id: 'm21', category: Category.MEAT, name: '鱼香肉丝', price: 36, image: getRealImg('yuxiang_shredded_pork_garlic_spicy_sauce', 'm21') },
  { id: 'm22', category: Category.MEAT, name: '酸菜鱼', price: 58, image: getRealImg('suancaiyu_fish_pickled_cabbage_soup', 'm22') },
  { id: 'm23', category: Category.MEAT, name: '糖醋虾球', price: 52, image: getRealImg('sweet_and_sour_shrimp_balls_red', 'm23') },
  { id: 'm24', category: Category.MEAT, name: '肉沫土豆', price: 32, image: getRealImg('stir_fried_minced_pork_potato_cubes', 'm24') },
  { id: 'm25', category: Category.MEAT, name: '软炸肉', price: 40, image: getRealImg('soft_fried_pork_strips_tempura_batter', 'm25') },
  { id: 'm26', category: Category.MEAT, name: '麻辣香锅', price: 68, image: new URL('./img/malaxiangguo.png', import.meta.url).href },
  { id: 'm27', category: Category.MEAT, name: '尖椒酿肉', price: 38, image: getRealImg('pan_fried_green_peppers_stuffed_pork', 'm27') },
  { id: 'm28', category: Category.MEAT, name: '炸丸子', price: 38, image: new URL('./img/zhawanzi.png', import.meta.url).href },

  // --- 素菜 ---
  { id: 'v1', category: Category.VEGETABLE, name: '鸡蛋羹', price: 18, image: getRealImg('steamed_egg_custard_smooth_bowl', 'v1') },
  { id: 'v2', category: Category.VEGETABLE, name: '烤地瓜', price: 15, image: getRealImg('roasted_sweet_potato_whole', 'v2') },
  { id: 'v3', category: Category.VEGETABLE, name: '蚝油生菜', price: 22, image: new URL('./img/haoyoushengcai.png', import.meta.url).href },
  { id: 'v4', category: Category.VEGETABLE, name: '炒荷兰豆', price: 28, image: new URL('./img/chaohelandou.png', import.meta.url).href },
  { id: 'v5', category: Category.VEGETABLE, name: '西红柿炒鸡蛋', price: 24, image: new URL('./img/xihongshichaojidan.png', import.meta.url).href },
  { id: 'v6', category: Category.VEGETABLE, name: '干煸杏鲍菇', price: 32, image: getRealImg('dry_fried_king_oyster_mushroom_slices', 'v6') },
  { id: 'v7', category: Category.VEGETABLE, name: '炒合菜', price: 26, image: getRealImg('stir_fried_mixed_vegetables_bean_sprouts_vermicelli', 'v7') },
  { id: 'v8', category: Category.VEGETABLE, name: '锡纸粉丝娃娃菜', price: 35, image: getRealImg('steamed_baby_cabbage_glass_noodles_garlic_foil', 'v8') },
  { id: 'v9', category: Category.VEGETABLE, name: '炒蒜薹', price: 28, image: getRealImg('stir_fried_garlic_scapes_green', 'v9') },
  { id: 'v10', category: Category.VEGETABLE, name: '土豆豆角', price: 30, image: new URL('./img/tudoudoujiao.png', import.meta.url).href },
  // v11 moved to TOP
  { id: 'v12', category: Category.VEGETABLE, name: '萝卜丝丸子', price: 36, image: getRealImg('deep_fried_radish_balls_vegetarian', 'v12') },
  { id: 'v13', category: Category.VEGETABLE, name: '炖酸菜', price: 38, image: getRealImg('stewed_pickled_cabbage_pork_belly_north_east', 'v13') },
  { id: 'v14', category: Category.VEGETABLE, name: '炒酸菜', price: 28, image: new URL('./img/chaosuancai.png', import.meta.url).href },
  { id: 'v15', category: Category.VEGETABLE, name: '咖喱土豆', price: 28, image: getRealImg('yellow_curry_potato_chunks_vegetarian', 'v15') },
  { id: 'v16', category: Category.VEGETABLE, name: '炸辣椒', price: 22, image: getRealImg('fried_whole_green_peppers_blistered', 'v16') },
  // v17 moved to TOP
  { id: 'v18', category: Category.VEGETABLE, name: '狼牙土豆', price: 18, image: getRealImg('crinkle_cut_fried_potatoes_spicy_seasoning', 'v18') },
  { id: 'v19', category: Category.VEGETABLE, name: '炒土豆丝', price: 18, image: getRealImg('stir_fried_shredded_potato_vinegar', 'v19') },
  { id: 'v20', category: Category.VEGETABLE, name: '干煸菜花', price: 28, image: getRealImg('dry_pot_cauliflower_chili_pork', 'v20') },
  { id: 'v21', category: Category.VEGETABLE, name: '干锅土豆片', price: 32, image: getRealImg('griddle_cooked_potato_slices_spicy_pot', 'v21') },
  { id: 'v22', category: Category.VEGETABLE, name: '烤韭菜', price: 12, image: getRealImg('grilled_chives_skewers_bbq', 'v22') },
  { id: 'v23', category: Category.VEGETABLE, name: '外婆菜', price: 26, image: new URL('./img/waipocai.png', import.meta.url).href },
  { id: 'v24', category: Category.VEGETABLE, name: '炖南瓜', price: 24, image: getRealImg('braised_pumpkin_chunks_soft', 'v24') },
  { id: 'v25', category: Category.VEGETABLE, name: '土豆泥', price: 22, image: new URL('./img/tudouni.png', import.meta.url).href },
  { id: 'v26', category: Category.VEGETABLE, name: '臭豆腐', price: 15, image: new URL('./img/choudoufu.png', import.meta.url).href },

  // --- 凉菜 ---
  // c1 moved to TOP
  { id: 'c2', category: Category.COLD_DISH, name: '凉拌藕片', price: 22, image: getRealImg('lotus_root_salad_white_slices', 'c2') },
  { id: 'c3', category: Category.COLD_DISH, name: '皮蛋豆腐', price: 20, image: new URL('./img/pidandoufu.png', import.meta.url).href },
  { id: 'c4', category: Category.COLD_DISH, name: '炸花生米', price: 15, image: getRealImg('fried_peanuts_salt_appetizer', 'c4') },
  { id: 'c5', category: Category.COLD_DISH, name: '炝芹菜', price: 18, image: getRealImg('blanched_celery_salad_peppercorn_oil', 'c5') },
  { id: 'c6', category: Category.COLD_DISH, name: '凉拌黄瓜', price: 16, image: getRealImg('smashed_cucumber_salad_garlic_vinegar', 'c6') },
  { id: 'c7', category: Category.COLD_DISH, name: '凉拌豆皮', price: 18, image: getRealImg('tofu_skin_salad_shredded_vegetables', 'c7') },
  { id: 'c8', category: Category.VEGETABLE, name: '手撕柠檬鸡', price: 28, image: new URL('./img/shousiningmengji.png', import.meta.url).href },

  // --- 汤类 ---
  // s1 moved to Chef Rec
  // s2 moved to TOP
  { id: 's3', category: Category.SOUP, name: '紫菜蛋花汤', price: 18, image: getRealImg('seaweed_egg_drop_soup_bowl', 's3') },
  { id: 's4', category: Category.SOUP, name: '西红柿鸡蛋汤', price: 20, image: getRealImg('tomato_egg_drop_soup_red', 's4') },
  { id: 's5', category: Category.SOUP, name: '黄瓜鸡蛋汤', price: 18, image: getRealImg('cucumber_egg_soup_clear_broth', 's5') },

  // --- 主食 ---
  { id: 'st34', category: Category.STAPLE, name: '香酥饼', price: 15, image: new URL('./img/xiangsubing.png', import.meta.url).href },
  { id: 'st1', category: Category.STAPLE, name: '疙瘩汤', price: 15, image: getRealImg('dough_drop_soup_tomato_egg', 'st1') },
  { id: 'st2', category: Category.STAPLE, name: '葱油拌面', price: 16, image: new URL('./img/congyoubanmian.png', import.meta.url).href },
  { id: 'st3', category: Category.STAPLE, name: '油泼面', price: 18, image: getRealImg('biangbiang_noodles_chili_oil_garlic', 'st3') },
  { id: 'st4', category: Category.STAPLE, name: '打卤面', price: 18, image: getRealImg('beijing_noodles_with_gravy_sauce', 'st4') },
  { id: 'st5', category: Category.STAPLE, name: '牛肉面', price: 24, image: getRealImg('beef_noodle_soup_braised_beef_chunks', 'st5') },
  { id: 'st6', category: Category.STAPLE, name: '麻辣肉酱面', price: 20, image: getRealImg('spicy_minced_pork_noodles_sichuan', 'st6') },
  { id: 'st7', category: Category.STAPLE, name: '炒面', price: 16, image: getRealImg('chow_mein_stir_fried_noodles_vegetables', 'st7') },
  { id: 'st8', category: Category.STAPLE, name: '麻酱拌面', price: 15, image: getRealImg('sesame_paste_noodles_cucumber', 'st8') },
  { id: 'st9', category: Category.STAPLE, name: '凉拌面', price: 15, image: getRealImg('cold_noodles_salad_spicy_sauce', 'st9') },
  { id: 'st10', category: Category.STAPLE, name: '春饼', price: 20, image: getRealImg('thin_pancakes_spring_pancakes_stack', 'st10') },
  { id: 'st11', category: Category.STAPLE, name: '肉馅饼', price: 8, image: getRealImg('pan_fried_meat_pie_xianbing', 'st11') },
  { id: 'st12', category: Category.STAPLE, name: '韭菜盒子', price: 6, image: getRealImg('chive_pocket_dumpling_fried_half_moon', 'st12') },
  { id: 'st13', category: Category.STAPLE, name: '饺子', price: 22, image: getRealImg('boiled_chinese_dumplings_jiaozi_plate', 'st13') },
  { id: 'st14', category: Category.STAPLE, name: '奥尔良鸡肉包子', price: 4, image: getRealImg('steamed_bun_baozi_fluffy_white', 'st14') },
  { id: 'st15', category: Category.STAPLE, name: '馄饨', price: 18, image: getRealImg('wonton_soup_bowl_scallions', 'st15') },
  { id: 'st16', category: Category.STAPLE, name: '炸薯条', price: 15, image: getRealImg('french_fries_basket_ketchup', 'st16') },
  { id: 'st17', category: Category.STAPLE, name: '蛋炒饭', price: 18, image: getRealImg('egg_fried_rice_bowl_scallions', 'st17') },
  { id: 'st18', category: Category.STAPLE, name: '麻辣烫', price: 25, image: new URL('./img/malatang.png', import.meta.url).href },
  { id: 'st19', category: Category.STAPLE, name: '麻辣拌', price: 22, image: getRealImg('malaban_spicy_mix_dry_stir_no_soup', 'st19') },
  { id: 'st20', category: Category.STAPLE, name: '土豆饼', price: 12, image: getRealImg('korean_potato_pancake_gamjajeon', 'st20') },
  { id: 'st21', category: Category.STAPLE, name: '里脊大肉饼', price: 15, image: getRealImg('pork_tenderloin_burger_chinese_style', 'st21') },
  { id: 'st22', category: Category.STAPLE, name: '肉松火腿寿司', price: 18, image: getRealImg('sushi_roll_pork_floss_ham', 'st22') },
  { id: 'st23', category: Category.STAPLE, name: '韩式拌饭', price: 26, image: new URL('./img/hanshibanfan.png', import.meta.url).href },
  { id: 'st24', category: Category.STAPLE, name: '茶叶蛋', price: 2, image: getRealImg('chinese_tea_egg_marbled_shell', 'st24') },
  { id: 'st25', category: Category.STAPLE, name: '豆沙饼', price: 8, image: getRealImg('red_bean_paste_pancake_sweet', 'st25') },
  { id: 'st26', category: Category.STAPLE, name: '手作饭团', price: 10, image: new URL('./img/shouzuofantuan.png', import.meta.url).href },
  { id: 'st27', category: Category.STAPLE, name: '手作三明治', price: 12, image: new URL('./img/shouzuosanmingzhi.png', import.meta.url).href },
  { id: 'st28', category: Category.STAPLE, name: '烧麦', price: 16, image: getRealImg('shumai_steamed_dim_sum_basket', 'st28') },
  { id: 'st29', category: Category.STAPLE, name: '手抓饼', price: 10, image: new URL('./img/shouzhuabing.png', import.meta.url).href },
  { id: 'st30', category: Category.STAPLE, name: '花卷', price: 3, image: getRealImg('steamed_flower_bun_scallion_layers', 'st30') },
  { id: 'st31', category: Category.STAPLE, name: '摊鸡蛋饼', price: 8, image: getRealImg('chinese_egg_crepe_jianbing_home_style', 'st31') },
  { id: 'st32', category: Category.STAPLE, name: '皮蛋瘦肉粥', price: 15, image: getRealImg('congee_century_egg_pork_bowl', 'st32') },
  { id: 'st33', category: Category.STAPLE, name: '香肉煲', price: 35, image: getRealImg('claypot_rice_meat_casserole', 'st33') },

  // --- 甜品 ---
  { id: 'd1', category: Category.DESSERT, name: '奶茶', price: 15, image: getRealImg('bubble_milk_tea_tapioca_pearls_plastic_cup', 'd1') },
  { id: 'd2', category: Category.DESSERT, name: '香橙巴巴路亚蛋糕', price: 28, image: getRealImg('orange_mousse_cake_slice_dessert', 'd2') },
  { id: 'd3', category: Category.DESSERT, name: '香橙冰淇淋', price: 18, image: getRealImg('orange_sorbet_ice_cream_scoop', 'd3') },
  { id: 'd4', category: Category.DESSERT, name: '葡萄冰淇淋', price: 18, image: getRealImg('grape_ice_cream_scoop_purple', 'd4') },
  { id: 'd5', category: Category.DESSERT, name: '芒果冰淇淋', price: 18, image: getRealImg('mango_ice_cream_scoop_yellow', 'd5') },
  { id: 'd6', category: Category.DESSERT, name: '酒酿赤豆小圆子', price: 20, image: getRealImg('red_bean_soup_mini_mochi_sweet_fermented_rice', 'd6') },
  { id: 'd7', category: Category.DESSERT, name: '芝士玉米', price: 22, image: new URL('./img/zhishiyumi.png', import.meta.url).href },
  { id: 'd8', category: Category.DESSERT, name: '水果沙拉', price: 24, image: getRealImg('fresh_fruit_salad_bowl_mixed', 'd8') },
  { id: 'd9', category: Category.DESSERT, name: '葡萄汁', price: 12, image: getRealImg('fresh_grape_juice_glass_purple', 'd9') },
  { id: 'd10', category: Category.DESSERT, name: '酸梅汤', price: 10, image: getRealImg('sour_plum_drink_glass_ice_chinese', 'd10') },
  { id: 'd11', category: Category.DESSERT, name: '酸奶麦片', price: 16, image: new URL('./img/suannaimaipian.png', import.meta.url).href },
  { id: 'd12', category: Category.DESSERT, name: '蛋挞', price: 8, image: getRealImg('portuguese_egg_tart_pastry_bakery', 'd12') },
];
