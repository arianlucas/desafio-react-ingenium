import "./index.css";
import { LeftLogin } from "../LeftLogin/index";
import { RightLogin } from "../RightLogin/index";

export function Login() {
  return (
    <div className="Login">
      <LeftLogin />
      <RightLogin />
    </div>
  );
}
