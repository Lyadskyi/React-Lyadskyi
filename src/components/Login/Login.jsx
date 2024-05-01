import { useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const FakeAPI = {
  async login() {
    // Логіка перевірки автентифікації та отримання відповіді від сервера
    return {
      success: true /* або false, залежно від результату автентифікації */,
    };
  },
  // Інші методи API
};

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const response = await FakeAPI.login(values);
    if (response.success) {
      navigate("/profile", { replace: true });
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

// import { Navigate, useState } from "react-router-dom";

// export const Login = () => {
//   const [isLoginSuccess, setIsLoginSuccess] = useState(false);

//   const handleSubmit = async (values) => {
//     const response = await FakeAPI.login(values);
//     setIsLoginSuccess(response.success);
//   };

//   if (isLoginSuccess) {
//     return <Navigate to="/profile" replace />;
//   }

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };
