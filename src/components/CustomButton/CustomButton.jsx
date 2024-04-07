// src/components/CustomButton.jsx
// Reading props/Читання props

const CustomButton = ({ message, children }) => {
  return <button onClick={() => console.log(message)}>{children}</button>;
};
export default CustomButton;
