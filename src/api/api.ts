export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

// This file abstracts the API call for all products, I used the built-in Javascript fetch function in order not to unnecessary inflate the package size of the entire project.
// Installing a third party package would be an overkill I presume.
