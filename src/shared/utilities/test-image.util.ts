export function getTestImageUrlForProduct(productName: string, productId: string): string {
  const imageMap: Record<string, string> = {
    // ── Hot Coffee ──
    'Espresso':            'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
    'Americano':           'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&h=300&fit=crop',
    'Cappuccino':          'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    'Café Latte':          'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    'Flat White':          'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=300&fit=crop',
    'Caramel Macchiato':   'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop',
    'Mocha':               'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop',

    // ── Cold Coffee ──
    'Iced Americano':      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop',
    'Iced Latte':          'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    'Cold Brew':           'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=400&h=300&fit=crop',
    'Frappe':              'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    'Iced Mocha':          'https://images.unsplash.com/photo-1553909489-ec62ccaa4938?w=400&h=300&fit=crop',
    'Affogato':            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',

    // ── Tea & Chai ──
    'Masala Chai':         'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop',
    'Green Tea':           'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop',
    'Lemon Iced Tea':      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    'Matcha Latte':        'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop',
    'Chamomile Tea':       'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',

    // ── Smoothies & Shakes ──
    'Mango Smoothie':      'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop',
    'Berry Blast Smoothie': 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
    'Chocolate Milkshake':  'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    'Oreo Shake':          'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400&h=300&fit=crop',
    'Peanut Butter Shake': 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop',

    // ── Pastries ──
    'Butter Croissant':    'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=300&fit=crop',
    'Chocolate Muffin':    'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop',
    'Blueberry Scone':     'https://images.unsplash.com/photo-1558303926-5ff5bbef2db6?w=400&h=300&fit=crop',
    'Cinnamon Roll':       'https://images.unsplash.com/photo-1609127067048-f5fcac24b0c0?w=400&h=300&fit=crop',
    'Almond Danish':       'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop',
    'Banana Bread Slice':  'https://images.unsplash.com/photo-1605090930601-33c4d0b33d3a?w=400&h=300&fit=crop',

    // ── Sandwiches & Wraps ──
    'Grilled Cheese Sandwich': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
    'Chicken Club Sandwich':   'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop',
    'Paneer Tikka Wrap':       'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    'Egg & Mayo Sandwich':     'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    'Veggie Wrap':             'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop',

    // ── Desserts ──
    'Chocolate Brownie':   'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    'Cheesecake Slice':    'https://images.unsplash.com/photo-1524351199432-ca330de50c4c?w=400&h=300&fit=crop',
    'Tiramisu':            'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    'Red Velvet Cake':     'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&h=300&fit=crop',
    'Fruit Tart':          'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop',

    // ── Snacks ──
    'French Fries':        'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    'Garlic Bread':        'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&h=300&fit=crop',
    'Nachos with Salsa':   'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop',
    'Bruschetta':          'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',

    // ── Fresh Juices ──
    'Orange Juice':        'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop',
    'Watermelon Juice':    'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop',
    'Apple Juice':         'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=400&h=300&fit=crop',
    'Pineapple Juice':     'https://images.unsplash.com/photo-1587015990127-424b954b3434?w=400&h=300&fit=crop',

    // ── Add-ons & Extras ──
    'Extra Espresso Shot':     'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=300&fit=crop',
    'Oat Milk Upgrade':        'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop',
    'Whipped Cream':           'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    'Caramel Syrup':           'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
    'Hazelnut Syrup':          'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
    'Vanilla Syrup':           'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
    'Chocolate Sauce Drizzle': 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop'
  };

  const exactImage = imageMap[productName];
  if (exactImage) {
    return exactImage;
  }

  // Fallback — a themed placeholder
  return `https://placehold.co/400x300/FEF3C7/92400E?text=${encodeURIComponent(productName.substring(0, 12))}`;
}
