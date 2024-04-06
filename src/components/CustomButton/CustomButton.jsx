// src/components/CustomButton.jsx

const CustomButton = ({ message, children }) => {
  return <button onClick={() => console.log(message)}>{children}</button>;
};
export default CustomButton;
