export function getTestImageUrlForProduct(productName: string, productId: string): string {
  const imageMap: Record<string, string> = {
    'Carrot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/250px-Vegetable-Carrot-Bundle-wStalks.jpg',
    'Potato': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/250px-Patates.jpg',
    'Onion': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/250px-Mixed_onions.jpg',
    'Apple': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/250px-Pink_lady_and_cross_section.jpg',
    'Banana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/250px-Bananavarieties.jpg',
    'Mango': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/250px-Mangos_-_single_and_halved.jpg',
    'Basmati Rice': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/250px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg',
    'Sugar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/250px-Sucre_blanc_cassonade_complet_rapadura.jpg',
    'Salt 1kg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rock_salt_%28halitite%29_%28Billianwala_Salt_Member%2C_Salt_Range_Formation%2C_Ediacaran_to_Lower_Cambrian%3B_Khewra_Salt_Mine%2C_Salt_Range%2C_Pakistan%29_14.jpg/250px-Rock_salt.jpg',
    'Cooking Oil': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Olive_oil_from_Oneglia.jpg/250px-Olive_oil_from_Oneglia.jpg',
    'Pure Ghee': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ghee_in_a_jar.jpg/250px-Ghee_in_a_jar.jpg',
    'Amul Milk 1L': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Milk_glass.jpg/250px-Milk_glass.jpg',
    'Fresh Paneer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Paneer_-_cottage_cheese.jpg/250px-Paneer_-_cottage_cheese.jpg',
    'Curd 500g': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Yoghurt_in_a_bowl.jpg/250px-Yoghurt_in_a_bowl.jpg',
    'Tata Tea Premium 250g': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tea_leaves.jpg/250px-Tea_leaves.jpg',
    'Coca Cola 500ml': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Coca-Cola_bottles_in_ice.jpg/250px-Coca-Cola_bottles_in_ice.jpg',
    'Lux Soap 125g': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Soap_bars.jpg/250px-Soap_bars.jpg',
    'Shampoo 500ml': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Shampoo_bottles.jpg/250px-Shampoo_bottles.jpg',
    'Electrical Wire': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Electric_wire.jpg/250px-Electric_wire.jpg',
    'Screwdriver Set': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Screwdrivers.jpg/250px-Screwdrivers.jpg',
    'Parle-G Biscuit 150g': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Marie_biscuit.jpg/250px-Marie_biscuit.jpg',
    'Lays Classic Salted': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Potato_chips_bowl.jpg/250px-Potato_chips_bowl.jpg',
    'Brown Bread': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sliced_bread.jpg/250px-Sliced_bread.jpg',
    'USB-C Cable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/USB_Type-C_plug_20170626.jpg/250px-USB_Type-C_plug_20170626.jpg',
    'Ruled Notebook': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Notebook_and_pen.jpg/250px-Notebook_and_pen.jpg'
  };

  const exactImage = imageMap[productName];
  if (exactImage) {
    return exactImage;
  }
  
  // Fallback
  return `https://placehold.co/200x200/F3E8FF/5B3BEB?text=${encodeURIComponent(productName.substring(0, 10))}`;
}
