import { useState } from "react";
function LoginPage() {
  const [LoginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  return (
    <form className="plantForm">
      <label>E-mail</label>
      <input
        type="email"
        name="userEmail"
        value={LoginUser.email}
        onChange={(e) => setLoginUser({ ...LoginUser, email: e.target.value })}
      ></input>
      <label>Password</label>
      <input
        type="password"
        name="userPassword"
        value={LoginUser.password}
        onChange={(e) =>
          setLoginUser({ ...LoginUser, password: e.target.value })
        }
      ></input>
      <button className="btn btn-success">Login User</button>
    </form>
  );
}

export default LoginPage;
