// src/components/Product.jsx

// export const Product = () => {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="640" />
//       <p>Price: 999 credits</p>
//     </div>
//   );
// };

// src/components/Product.jsx

// export const Product = () => {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="640" />
//       <p>Price: 999 credits</p>
//     </div>
//   );
// };

// src/components/Product.jsx

// export const Product = () => {
//   return (
//     <>
//       <h2>Tacos</h2>
//       <img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="640" />
//       <p>Price: 999 credits</p>
//     </>
//   );
// };

// src/components/Product.jsx

// export const Product = () => {
//   const price = 999;

//   return (
//     <>
//       <h2>Tacos</h2>
//       <img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="640" />
//       <p>Price: {price} credits</p>
//     </>
//   );
// };


// src/components/Product.jsx

export const Product = () => {
  const price = 999;
  const imgUrl = "<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>";

  return (
    <>
      <h2>Tacos</h2>
      <img src={imgUrl} alt="Tacos With Lime" width="640" />
      <p>Price: {price} credits</p>
    </>
  );
};

export default Product;
