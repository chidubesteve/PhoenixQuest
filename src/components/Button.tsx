import { ReactNode } from "react";

interface Props {
  children: ReactNode;
//   ? is used to tell the TS compiler that the props is optional
  color?: "primary" | "secondary" | "warning" | "success";
  onClick: () => void;
}

const Button = ({ children, onClick, color="primary" }: Props) => {


    return (
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    );
};

export default Button;
