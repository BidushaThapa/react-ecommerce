import { Button, Heading } from "../components/Molecules/TextComponent";
import { loginLocally, userSchema } from "../components/services/LoginService";
import { useNavigate } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { UserStore } from "../store/UserStore";
import { LoginModel } from "../types/loginModel";
import { useLoginStore } from "../store/LoginStore";

export const Login = () => {
    const isLogin = useLoginStore((state) => state.isLogin);
  const setSessionId = UserStore((state) => state.setSessionId);
  const navigate = useNavigate();

  const handleLogin = (values: LoginModel) => {
    const user = loginLocally(values);
    if (user) {
      setSessionId(user.token);
      alert(`Hi ${user.name} !!`);
      navigate("/");
    }
  };

  return (
        <div className="relative shadow-[0_0_40px_10px_rgba(217,119,6,0.4)]  max-w-5xl mx-auto mt-[8rem]  min-h-[550px] max-h-[550px] h-full border-2 border-amber-600 bg-amber-700 rounded-md p-8 overflow-hidden transition-all duration-700 ease-in-out">
    <div
      className={`relative shadow-[0_0_40px_10px_rgba(217,119,6,0.4)]  max-w-5xl mx-auto mt-[8rem]  min-h-[550px] max-h-[550px] h-full border-2 border-amber-600 bg-linear-to-br ${
        !isLogin ? "from-amber-700 to-black" : "from-black to-amber-700"
      } rounded-md p-8 overflow-hidden transition-all duration-700 ease-in-out`}
    >
      <div
        className={`absolute transition-all duration-700 ease-in-out top-0  w-[200%] h-[200%] bg-black   
          ${
            isLogin
              ? "-left-[920px]  rotate-[50deg]"
              : "-right-[920px] rotate-[-50deg]"
          }
        `}
      ></div>

        {/* Login form */}
           <div
        className={`absolute w-full h-full transition-all duration-700 ease-in-out
      ${
        isLogin
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[50px] pointer-events-none"
      }
    `}
      >
          <div className="flex p-8 m-2 justify-center items-center flex-col gap-4 mt-4 relative z-10">
            <Heading >Login</Heading>

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
                    className="items-center flex justify-center"
                  >
                    Login
                  </Button>

                  <div className="text-black flex flex-col items-center">
                    <p>Don't have an account?</p>
                    <button className="underline p-1 text-slate-500">
                      Sign Up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right side welcome section */}
          <div className="text-black p-6 w-full bg-slate-100 flex flex-col gap-3 justify-center items-end text-right absolute bottom-0 right-0">
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
    </div>
  );
};
 