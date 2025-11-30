
import { users } from "../../Apihooks/constant";
import * as Yup from 'yup' ;
import { LoginModel } from "../../types/loginModel";
export  let userSchema =Yup.object().shape({
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required')
      .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
      "Must Contain 4 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
   email: Yup.string()
     .email('Invalid email')
     .required('Required'),
 });
export const loginLocally = ({ email, password }:LoginModel) => {


  const loginUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (loginUser) {
    return loginUser;
  } else {
    alert("Invalid email or password");
    return null;
  }
};
  
