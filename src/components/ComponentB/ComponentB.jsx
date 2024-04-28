// ComponentB.jsx
// import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

// const ComponentB = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const openSidebar = () => setIsSidebarOpen(true);

//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <>
//       <button onClick={openSidebar}>Open sidebar</button>
//       <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
//     </>
//   );
// };

// export default ComponentB;

import { useToggle } from "../../hooks/useToggle";

const ComponentB = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <>
      <button onClick={open}>Open sidebar</button>
      <Sidebar isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentB;
