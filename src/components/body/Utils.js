export const addToBasket = (basket, setBasket, item) => {
  const existingItem = basket.find((basketItem) => basketItem.id === item.id);

  if (existingItem) {
    setBasket(
      basket.map((basketItem) =>
        basketItem.id === item.id
          ? { ...basketItem, quantity: basketItem.quantity + 1 }
          : basketItem
      )
    );
  } else {
    setBasket([...basket, { ...item, quantity: 1 }]);
  }
};

export const increaseQuantity = (basket, setBasket, item) => {
  setBasket(
    basket.map((basketItem) =>
      basketItem.id === item.id
        ? { ...basketItem, quantity: basketItem.quantity + 1 }
        : basketItem
    )
  );
};

export const decreaseQuantity = (basket, setBasket, item) => {
  if (item.quantity > 1) {
    setBasket(
      basket.map((basketItem) =>
        basketItem.id === item.id
          ? { ...basketItem, quantity: basketItem.quantity - 1 }
          : basketItem
      )
    );
  } else {
    setBasket(basket.filter((basketItem) => basketItem.id !== item.id));
  }
};

export const handleCategoryChange = (setActiveCategory, category) => {
  setActiveCategory(category);
};
