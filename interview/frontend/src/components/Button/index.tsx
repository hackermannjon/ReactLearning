import React  from "react";
import * as Styled from "./styled";

interface ButtonProps {
 
    onClick: ()=>void;
    text?: string;
}



const Button = ({onClick, text='default'}: ButtonProps) => {


return (
    <Styled.Container
    onClick={onClick}
    >{text}</Styled.Container>



)
}



export default Button