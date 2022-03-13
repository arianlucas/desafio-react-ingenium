import { Routes, Route } from "react-router-dom";
import { Login } from "./PagesLogin/Login";
import { Lists } from "./PageLists";

export function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<Lists />} />
      </Routes>
    </>
  );
}
