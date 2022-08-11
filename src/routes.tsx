import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<div>404</div>} />
    <Route path="/" element={<Welcome />} />
  </Routes>
);

export default AppRouter;
