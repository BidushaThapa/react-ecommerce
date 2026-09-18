import { Button, Heading } from "../components/Molecules/TextComponent";
import { loginLocally, userSchema } from "../components/services/LoginService";
import { useNavigate } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { UserStore } from "../store/UserStore";
import { LoginModel } from "../types/loginModel";
// import { useLoginStore } from "../store/LoginStore";

export const Login = () => {
  // const isLogin = useLoginStore((state) => state.isLogin);
  const setSessionId = UserStore((state) => state.setSessionId);
  const navigate = useNavigate();

  const handleLogin = (values: LoginModel) => {
    const user = loginLocally(values);
    if (user) {
      setSessionId(user.token);
      alert(`Hi ${user.name} !!`);
     
    }
    if (user?.email==="admin@gmail.com"){
      navigate("/admin")
    }
    else
       {
        navigate("/");
      }
  };

  return (
       <div className="relative mx-10 my-15 overflow-hidden ">
        <div className=" rotate-[30deg] skew-y-[5deg] origin-top-right mx-15 relative my-5 h-[80vh]  bg-[linear-gradient(50deg,#60a5fa,#172554)]  from-blue-400 to-blue-950 
transition-all duration-700 ease-in-out  p-4  overflow-hidden right-[-40px] ">
      </div>

        {/* Login form */}
        <div className="h-[80vh] p-4    absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 grid gap-10 grid-cols-2  overflow-hidden
">

          <div  className="flex  flex-col p-4 justify-center items-center">
            <Heading>Login</Heading>

            <Formik
              validationSchema={userSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => handleLogin(values)}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email.."
                      className="text-white p-2 border rounded"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex flex-col">
                    <Field
                      className="text-white p-2 border rounded"
                      type="password"
                      name="password"
                      placeholder="Password..."
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="items-center  flex justify-center"
                  >
                    Login
                  </Button>

                  <div className="text-white flex flex-col items-center">
                    <p>Don't have an account?</p>
                    <button className="underline p-1 text-slate-500 cursor-pointer">
                      Sign Up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right side welcome section */}
          <div className="flex flex-col rounded-4xl text-white  justify-center items-center  p-4">
            <h1 className="font-semibold text-xl">
              WELCOME <br /> BACK!
            </h1>
            <p>
              We are happy to have you with us again, <br />
              if you need anything, <br />
              we are here to help.
            </p>
          </div>
        </div>
      </div>
  );
};
