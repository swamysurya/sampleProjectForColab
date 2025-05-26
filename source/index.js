const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
  },
];

const filterProducts = (minPrice) => {
  return products.filter((product) => product.price >= minPrice);
};
const filteredProducts = filterProducts(200);
console.log(filteredProducts);
