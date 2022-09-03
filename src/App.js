import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ChatPage from "./Pages/ChatPage";
import ForgetPassPage from "./Pages/ForgetPassPage";
import ProfilePage from "./Pages/ProfilePage";
import { useState } from "react";

function App() {
  let [userLogin, setUserLogin] = useState(false);

  return (
    <>
      <Routes>
        {userLogin ? (
          <>
            <Route path="/" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forget" element={<ForgetPassPage />} />
          </>
        )}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;

// //Public Pages
// - Login
// - Sign up
// - Forgot Password

// //Private pages
//  - Chat Page
//  - Profile
