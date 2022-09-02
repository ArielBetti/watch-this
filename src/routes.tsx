import { Routes, Route } from "react-router-dom";
import { Home, SignIn, SignUp, Welcome } from "./pages";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<div>404</div>} />
    <Route path="/" element={<Welcome />} />
    <Route path="/signin" element={<SignUp />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/home" element={<Home />} />
  </Routes>
);

export default AppRouter;
