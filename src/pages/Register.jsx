// Register

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import GoogleLogin from "../components/login-registration/GoogleLogin";

const Register = () => {
  // const auth = useContext(AuthContext) --> this work will we complete with hook

  // From hocks --> useAuth
  // not to need all document
  // const auth = useAuth();
  // console.log(auth)

  const { CreateUser } = useAuth();

  // password valitetion korar jonno react er akti library hocks from use korbo -> https://react-hook-form.com/get-started#Quickstart
  // React hock form
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const navigate = useNavigate();

  // onSubmit function
  const onSubmit = (data) => {
    // const email = data.email;
    // const role = data.role;
    // const status = role === "buyer" ? "approved" : "pending";
    // const wishlist = [];

    // const userData = { email, role, status, wishlist };

    CreateUser(data.email, data.password)
    // .then(() => {
    //   axios.post("http://localhost:8000/users", userData).then((res) => {
    //     if (res.data.insertedId) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Registration successful.",
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    //       navigate('/');
    //     }
    //   })

    // })
    navigate('/');






    // console.log(userData);
  };

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-400 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered"
                {...register('email', { required: true })}

              />
              {errors.email && <p className="text-red-500 text-sm font-light">Email is required.</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered"
                {...register('password', { required: true, minLength: 6 })}
              />
              {errors.password?.type === 'required' && <p className="text-red-500 text-sm font-light">Password is required.</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-500 text-sm font-light">Password must have at least 6 characters.</p>}

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered"
                {...register('confirmPassword', {
                  required: true, validate: (value) => {
                    if (watch('password') !== value) {
                      return 'Your passwords do not match.'
                    }
                  }
                })}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm font-light"> Both Password must match.</p>}

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select className="select select-bordered w-full max-w-xs" {...register('role', { require: true })}>

                <option value='buyer'>Buyer</option>
                <option value='seller'>Seller</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm font-light"> You must select a role.</p>}

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary type='submit">Register</button>
            </div>
            <div>
              <GoogleLogin />
            </div>

            <p className="my-4 text-sm font-light">Already Have an account?<Link to='/login' className="text-purple-700">Login</Link></p>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Register;