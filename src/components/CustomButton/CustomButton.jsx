import { forwardRef } from "react";

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

CustomButton.displayName = "CustomButton";
export default CustomButton;
