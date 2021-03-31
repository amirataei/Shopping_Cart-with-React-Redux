export const Addtocart = (id) => ({
  type: "ADD_TOCART",
  id,
});
export const DeleteCard = (id1) => ({
  type: "DELETE_CARD",
  id1,
});
export const increase = (id) => ({
  type: "INCREASE_CARD",
  id,
});
export const reduction = (id2) => ({
  type: "REDUCTION",
  id2,
});
