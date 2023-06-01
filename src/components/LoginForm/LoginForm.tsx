import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface UserCredentials {
  username: string;
  password: string;
}

interface LoginFormProps {
  handleOnSubmit: () => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleOnSubmit();
    setUserCredentials(userCredentials);
  };

  const isDisabled = !userCredentials.username || !userCredentials.password;

  return (
    <LoginFormStyled className="form-container" onSubmit={handleOnClick}>
      <form autoComplete="off">
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={onChangeUserData}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChangeUserData}
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isDisabled}
          >
            Login
          </button>
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
