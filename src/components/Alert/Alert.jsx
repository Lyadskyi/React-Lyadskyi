// src/components/Alert.jsx
//* src/components/App.jsx *//

import "./Alert.module.css";
import clsx from "clsx";

// Синтаксис імпорту CSS-модуля
// import css from "../Alert/Alert.module.css";

// export default function Alert() {
//   const alertStyles = {
//     margin: 8,
//     padding: "12px 16px",
//     borderRadius: 4,
//     backgroundColor: "gray",
//     color: "white",
//   };
//   return (
//     <>
//       <p style={alertStyles}>Please update your email!</p>
//       <p style={alertStyles}>There was an error during transaction!</p>
//       <p style={alertStyles}>Payment received, thank you for your purchase!</p>
//     </>
//   );
// }

// Вбудовані стилі з атрибутом style

// src/components/App.jsx

// const App = () => {
//   return (
//     <p
//       style={{
//         margin: 8,
//         padding: "12px 16px",
//         borderRadius: 4,
//         backgroundColor: "red",
//         color: "white",
//       }}
//     >
//       Please update your email!
//     </p>
//   );
// };

// export default App;

//src/components/Alert.jsx

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// export const Alert = ({ children }) => {
//   return <p style={alertStyles}>{children}</p>;
// };

// export default Alert;

// src/components/App.jsx

// import { Alert } from "./Alert";

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// src/components/Alert.jsx

export default function Alert({ variant, children }) {
  const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    color: "white",
  };

  const getBgColor = (variant) => {
    switch (variant) {
      case "info":
        return "blue";
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        throw new Error(`Unsupported variant prop value - ${variant}`);
    }
  };
  return (
    <p
      style={{
        ...alertStyles,
        backgroundColor: getBgColor(variant),
      }}
    >
      {children}
    </p>
  );
}

// Стилі компонента імпортуються у файл оголошення компонента, після чого CSS-класи описані у таблиці стилів доступні для
// використання. У React HTML-атрибуту class відповідає JSX-атрибут className, куди можна передати рядок з перерахуванням
// усіх класів елемента.

// src/components/Alert.jsx

// const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };

const className = clsx(
  "first",
  10,
  undefined && "second",
  true && "third",
  // false ? "fourth" : "fifth"
);
console.log(className); // "first 10 third"
