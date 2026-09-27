import { Button, Heading } from "../components/Molecules/TextComponent";
import {
  loginViaBackend,
  userSchema,
} from "../components/services/LoginService";
import { useNavigate } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { UserStore } from "../store/UserStore";
import { LoginModel } from "../types/loginModel";
// import { useLoginStore } from "../store/LoginStore";

export const Login = () => {
  // const isLogin = useLoginStore((state) => state.isLogin);
  const setSessionId = UserStore((state) => state.setSessionId);
  const setCurrentUser = UserStore((state) => state.setCurrentUser);
  const navigate = useNavigate();

  const handleLogin = async (values: LoginModel) => {
    try {
      const user = await loginViaBackend(values);
      setSessionId(user.token);
      setCurrentUser({ name: user.name, email: user.email, role: user.role });
      alert(`Hi ${user.name} !!`);
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : "Login failed");
    }
  };

  return (
    <div className="relative mx-auto my-8 max-w-5xl overflow-hidden rounded-2xl border border-[#dedbd2] bg-white shadow-xl md:my-16">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-black md:block"></div>

      {/* Login form */}
      <div className="relative grid min-h-[520px] gap-10 p-6 md:grid-cols-2 md:p-12">
        <div className="flex  flex-col p-4 justify-center items-center">
          <h1 className="mb-2 text-3xl font-bold text-[#181818]">Login</h1>

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
                    className="rounded-lg border border-[#dedbd2] p-3 text-black"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    className="rounded-lg border border-[#dedbd2] p-3 text-black"
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
                  className="w-full"
                >
                  Login
                </Button>

                <div className="flex flex-col items-center text-sm text-slate-500">
                  <p>Don't have an account?</p>
                  <button className="cursor-pointer p-1 text-amber-700 underline">
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
