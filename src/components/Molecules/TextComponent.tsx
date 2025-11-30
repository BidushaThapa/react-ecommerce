import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
//for props
interface Headingprops extends HTMLAttributes <HTMLParagraphElement>{ //interface bata yesari garna sakinxa 
  children:ReactNode //ReactNode covers anything renderable (text, JSX, components, etc.)
}


export const Heading =({children,...rest}:Headingprops)=>{
    return (
    <p className="font-bold text-black text-3xl"{...rest}>
        {children}
        </p>
    );
}
interface Labelprops extends HTMLAttributes <HTMLLabelElement>{
  children:ReactNode
}
export const Label =({children,...rest}:Labelprops)=>{
    return (
    <span className="text-lg font-[400]  hover:text-amber-500 hover:font-bold" {...rest}>  
        {children}
    </span>
    );  
}     
type InputTextProps = InputHTMLAttributes <HTMLInputElement>&{ //type bata chai yesari garna sakinxa
  className?:string
}
export const InputText = ({className,...rest}:InputTextProps) => {
  return (
   
  <div>
      <input  type="text"  className={`border-1 p-2 rounded-xl border-black text-black ${className}`}  {...rest}/>
       
 
  </div>
  );
}
interface Buttonprops extends HTMLAttributes <HTMLButtonElement>{
  children:ReactNode
}
export const Button = ({ children, ...rest }:Buttonprops) => {
  return (
    <button
      {...rest}
      className="flex items-center justify-center px-8 py-2 text-black hover:bg-slate-500  border border-black rounded-2xl bg-slate-300 cursor-pointer transition-colors duration-200"
    >
      {children}
    </button>
  );
};

