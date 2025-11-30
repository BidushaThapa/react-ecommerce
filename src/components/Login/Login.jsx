// import React from "react";
// import { FormikFormField } from "../Molecules/FormikFormField";
// import { LoginModel } from "../../types/loginModel";
// import { loginLocally } from "../../services/loginService";
// import { useUserStore } from "../../store/UserStore";
// import { useNavigate } from "react-router-dom";
// import { Form, Formik } from "formik";
// import { LoginSchema } from "../../validationSchemas/Login";
// import { useLoginStore } from "../../store/LoginStore";

// export const LoginForm = () => {
//   const setSessionId = useUserStore((state) => state.setSessionId);
//   const nav = useNavigate();
//   const setIsLogin = useLoginStore((state) => state.setIsLogin);

//   const handleLogin = (
//     { email, password }: LoginModel,
//     setSubmitting: (isSubmitting: boolean) => void
//   ) => {
//     const user = loginLocally({ email: email, password: password });

//     setTimeout(() => {
//       setSubmitting(false);
//       if (user) {
//         setSessionId(user.token);
//         nav("/");
//       }
//     }, 2000);
//   };

//   return (
//     <div className="grid grid-cols-3 grid-flow-col gap-2">
//       <div className="col-span-2 md:col-span-2 lg:col-span-2 p-4 z-20 text-white w-1/2">
//         <Formik
//           validationSchema={LoginSchema}
//           initialValues={{
//             email: "",
//             password: "",
//             friends: ["jared", "ian", "brent"],
//           }}
//           onSubmit={(values, { setSubmitting }) => {
//             setSubmitting(true);
//             handleLogin(values, setSubmitting);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form className="w-full">
//               <h1> Login</h1>
//               <FormikFormField className={""} label="Email" name="email" />
//               <FormikFormField
//                 className={""}
//                 label="Password"
//                 name="password"
//                 type="password"
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-1/2 text-white bg-black rounded-2xl px-4 py-2 flex justify-center"
//               >
//                 {isSubmitting ? "Login in" : "Login"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//         <div className="text-white flex flex-col">
//           Don't have an account?{" "}
//           <div
//             onClick={() => setIsLogin(false)}
//             className="text-orange-400 underline"
//           >
//             Sign up
//           </div>
//         </div>
//       </div>
//       <div className=" flex flex-col justify-center p-4 text-white">
//         <p className="text-3xl">Welcome Back!</p>
//         <p>
//           We are happy to have yopu with us again. if you need anything we are
//           here to provide.
//         </p>
//       </div>
//     </div>
//   );
// };