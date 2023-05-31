const LoginForm = (): React.ReactElement => {
  return (
    <>
      <div className="form-container">
        <form autoComplete="off">
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
