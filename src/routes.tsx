import { Routes, Route } from "react-router-dom";
import { Home, Logout, SignIn, SignUp, Welcome } from "./pages";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<div>404</div>} />
    <Route path="/" element={<Welcome />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/signin" element={<SignUp />} />
  </Routes>
);

export default AppRouter;
