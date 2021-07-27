export const ItemCount = (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.qty, 0);

export const ItemPrice = (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);
