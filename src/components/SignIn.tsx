const SignIn = () => {
  return (
    <>
      <form action="">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            style={{ width: "max-content" }}
            type="text"
            placeholder="Your id"
          />
          <input
            style={{ width: "max-content" }}
            type="password"
            placeholder="Your password"
            name=""
            id=""
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignIn;
