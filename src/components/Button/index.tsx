import { ReactNode } from "react";
import * as S from "./styles";

interface Props {
  text: string;
  rightIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ text, rightIcon, onClick, disabled }: Props) => {
  return (
    <S.ButtonStyle type="button" onClick={onClick} disabled={disabled}>
      {text}
      {rightIcon}
    </S.ButtonStyle>
  );
};
