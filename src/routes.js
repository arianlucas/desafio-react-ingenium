import { Routes, Route } from "react-router-dom";
import { Login } from "./PagesLogin/Login";
import { Lists } from "./PageLists/index";
import { Details } from "./PageDetails/index";

export function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}
