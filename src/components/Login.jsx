import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [err, setErr] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value,
      isSignInForm?null:name.current.value
    );
    setErr(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_medium.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12  p-12 my-36 mx-auto left-0 right-0 text-white bg-black/80 rounded-2xl"
      >
        <h1 className="font-bold  text-3xl py-4 my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInForm ? null : (
          <input
          ref={name}
            type="text"
            placeholder="UserName"
            className="p-2 my-2 w-full bg-gray-900"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-900"
        />
        <p className="text-red-600 font-bold text-lg py-2">{err}</p>
        <button
          className="p-3 my-6 bg-red-600 w-full rounded-2xl cursor-pointer"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix?  Sign Up Now"
            : "Already a member? Sign In Now"}
        </p>
      </form>
    </div>
  );
}
export default Login;
