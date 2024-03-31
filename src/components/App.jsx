// src/components/App.jsx

// import { Product } from "./Product";

// export default function App() {
  // return (
    // <div>
      // <h1>Best selling</h1>

      // <Product
      //   name="Tacos With Lime"
      //   imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      //   price={10.99}
      // />
      // <Product
      //   name="Fries and Burger"
      //   imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      //   price={14.29}
      // />
//     </div>
//   );
// }

import { Product } from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product
        name="Fruits and Vegetables"
        imgUrl="https://www.shlomosaspen.com/wp-content/uploads/2023/04/fruits-and-vegetables-most-use-in-restaurants.jpeg"
        price={15.74}
      />
    </div>
  );
}
