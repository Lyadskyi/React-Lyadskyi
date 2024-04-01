// src/components/Card.jsx

// Властивість props.children

// export default function Card({ text }) {
//   return (
//     <>
//       <h2>Card</h2>
//       <div>{text}</div>
//     </>
//   );
// }

// Оголошення компонента

export default function Card({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
