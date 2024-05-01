import { ProductList } from "../components/ProductList/ProductList";
import { getProducts } from "../fakeApi";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const products = getProducts();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const color = searchParams.get("color");
  const maxPrice = searchParams.get("maxPrice");

  return (
    <main>
      <ProductList products={products} />
      <p>Name: {name}</p>
      <p>Color: {color}</p>
      <p>Maximum price: {maxPrice}</p>
    </main>
  );
}

// src/pages/Products.jsx

// import { useSearchParams } from "react-router-dom";

// const Products = () => {
//   const [searchParams] = useSearchParams();
//   const name = searchParams.get("name");
//   const color = searchParams.get("color");
//   const maxPrice = searchParams.get("maxPrice");

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Color: {color}</p>
//       <p>Maximum price: {maxPrice}</p>
//     </div>
//   );
// };
