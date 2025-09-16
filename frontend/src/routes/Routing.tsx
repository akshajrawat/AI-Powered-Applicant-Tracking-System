import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const Routin = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routin;
