import { useEffect } from 'react';
import { BaseButton, GoogleSignIn, Inverted } from './button.styles';

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => {
  return (
    {
      [BUTTON_TYPE_CLASS.base]: BaseButton,
      [BUTTON_TYPE_CLASS.google]: GoogleSignIn,
      [BUTTON_TYPE_CLASS.inverted]: Inverted,
    }[buttonType]
  )
}
var i = 0 ;

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;