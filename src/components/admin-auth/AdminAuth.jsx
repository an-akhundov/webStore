import "./adminAuth.css";
import CustomInput from "../custom-input/CustomInput.jsx";
import MenuButton from "../menu-button/MenuButton.jsx";
import AdminAddGoods from "../admin-add-goods/AdminAddGoods.jsx";
import { useRef, useState } from "react";

const LOGIN = "Anar";
const PASSWORD = "2250602";

export default function AdminAuth() {
  const loginRef = useRef();
  const passwordRef = useRef();
  const [isValid, setIsValid] = useState({
    valid: false,
    message: "Enter the Login and Password :",
  });

  function handleLogin() {
    if (
      loginRef.current.value === LOGIN &&
      passwordRef.current.value === PASSWORD
    ) {
      setIsValid((prev) => {
        return {
          ...prev,
          valid: true,
        };
      });
    } else {
      setIsValid((prev) => {
        return {
          ...prev,
          message: "Login or Password is WRONG. Try one more time.",
        };
      });
    }
  }

  return (
    <>
      {!isValid.valid && (
        <form className="admin-auth">
          <h3>{isValid.message}</h3>
          <CustomInput label="Login" type="text" id="login" ref={loginRef} />
          <CustomInput
            label="Password"
            type="password"
            id="password"
            ref={passwordRef}
          />
          <MenuButton classN="mobile-button" onClick={handleLogin}>
            Login
          </MenuButton>
        </form>
      )}
      {isValid.valid && <AdminAddGoods />}
    </>
  );
}
