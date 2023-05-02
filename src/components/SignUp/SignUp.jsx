import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser)
  const signInHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    createUser(email, password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset()
    })
    .catch(error=>{
      console.log(error)
    })
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
                  required
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
                  required
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
                  required
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
                  placeholder="Photo"
                  name="photo"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <div>
                  <p> Already register ? <span><Link to="/login"> Please login  </Link> </span> </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
