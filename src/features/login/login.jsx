import {useState, useRef} from "react";
export function Login() {
  const [user, setUser] = useState({});

  const buttonRef = useRef(null);

  const userNameRef = useRef(null);

  return (
    <div>
      <h1>Login</h1>

      <label>Username</label>

      <input
        type='text'
        value={user.username}
        ref={userNameRef}
        onChange={(event) => {
          userNameRef.current.value = event.target.value;
          setUser({...user, username: event.target.value});
        }}
      ></input>
      <button ref={buttonRef}>Login</button>
    </div>
  );
}
