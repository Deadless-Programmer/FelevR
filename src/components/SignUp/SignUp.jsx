import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // console.log(createUser)
  const signInHandler = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    if (name < 1) {
      toast.error("Input your name");
      setError("Input your name");
      return;
    } else if (email < 1) {
      toast.error("Input your valid email");
      setError("Input your valid email");
      return;
    } else if (password.length < 6) {
      toast.error("Password should have at least 6 character or more");
      setError("Password should have at least 6 character or more");
      return;
    }
    else if(photo < 1 ){
      toast.error("Include your photo url");
      setError("Include your photo url")
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        profileUpdate(result.user, name, photo);
        console.log(loggedUser);

        form.reset();
        setError("");
        toast.success(" New account create successfully");
        setSuccess("User has been create account successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // toast.success(error.message)
        // console.error(error.message);
        // setError(error.message);
      });
  };
  const profileUpdate = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <form
          onSubmit={signInHandler}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <div className="card flex-shrink-0 w-auto max-w-sm shadow-2xl bg-base-100">
            <div className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <div>
                <p>
                  {" "}
                  Already register ?{" "}
                  <span>
                    <Link to="/login" className="text-orange-500">
                      {" "}
                      Please login{" "}
                    </Link>{" "}
                  </span>{" "}
                </p>
                <p className="text-red-500">{error}</p>
                <p className="text-green-500">{success}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
