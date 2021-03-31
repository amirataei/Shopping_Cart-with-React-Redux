import Product from "../products";

const Shopp = (cart = [], action) => {
  const data = Product.filter((item) => {
    return item._id === action.id;
  });

  const check = cart.every((item) => {
    return item._id !== action.id;
  });

  cart.map((item) => {
    if (item._id === action.id) {
      return (item.count += 1);
    }
  });
  cart.forEach((item) => {
    if (item._id === action.id2) {
      return item.count === 1 ? (item.count = 1) : (item.count -= 1);
    }
  });
  cart.forEach((item, index) => {
    if (item._id === action.id1) {
      return cart.splice(index, 1);
    }
  });
  switch (action.type) {
    case "ADD_TOCART":
      if (check) {
        return [...cart, ...data];
      } else {
        alert("the product has been added");
      }
    case "DELETE_CARD":
      return [...cart];
    case "INCREASE_CARD":
      return [...cart];
    case "REDUCTION":
      return [...cart];
    default:
      return cart;
  }
};

export default Shopp;
