// src/components/HiUser.jsx

import { HiUser } from "react-icons/hi";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="48" /> {name}
      </p>
    </div>
  );
};

export default UserMenu;
