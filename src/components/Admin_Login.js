import email_id_input from "../assests/admin_profile_icon.png";
import password_input from "../assests/password_input.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Admin_Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const userData = await fetch(
      "https://au-hallbooking-backend.onrender.com/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (userData.status === 401) {
      console.log("inavlid credentials...");
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
    }

    if (userData.status === 200) {
      const token = await userData.json();

      localStorage.setItem("authToken", JSON.stringify(token));
      console.log("token generated...");

      navigate("../admin/dashboard");
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 my-20">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Admin Login
            </h1>
            {errorMessage && (
              <div role="alert">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Invalid Credentials !!!
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>Email or Password is incorrect.</p>
                </div>
              </div>
            )}
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email ID
                </label>
                <div className="flex">
                  <div className="bg-sky-500 h-10 w-12 rounded-l-sm flex justify-center items-center">
                    <img
                      src={email_id_input}
                      className="h-5"
                      alt="email-icon"
                    ></img>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="bg-neutral-100 text-blue sm:text-sm rounded-sm block w-full h-10 p-2.5"
                    placeholder="admin@fmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="flex">
                  <div className="bg-sky-500 h-10 w-12 rounded-l-sm flex justify-center items-center">
                    <img
                      src={password_input}
                      className="h-5"
                      alt="lock-icon"
                    ></img>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="bg-neutral-100 rounded-sm block w-full h-10 p-2.5"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="w-full text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Login;
