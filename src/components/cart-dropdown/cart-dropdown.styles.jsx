import styled from 'styled-components';
import { BaseButton, GoogleSignIn, Inverted } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  background: linear-gradient(to left, #00c9ff, #92fe9d);

  ${BaseButton},${GoogleSignIn},${Inverted} {
    margin-top: auto;
  }
`
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 108px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`