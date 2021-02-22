import React from "react";

const SingUp = () => {
  return (
    <>
      <form>
        <div className="formContainer">
          <h1> Register</h1>
          <p>Please fill in this form to create an account.</p>
          <br />
          <hr />
          <br />
          <label for="email">
            <b>Email</b>
          </label>

          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            required
          />
          <br />

          <label for="psw">
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="psw"
            id="psw"
            required
          />
          <br />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <br />

          <input
            type="password"
            placeholder="Repeat Your Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr></hr>
          <p> By creating an account you agree to our terms & privacy.</p>
          <button type="submit" className="registerbtn">
            {" "}
            Register
          </button>
        </div>
        <div className="cantainer signin">
          <p>Already have an account?</p>
        </div>
      </form>
    </>
  );
};

export default SingUp;
