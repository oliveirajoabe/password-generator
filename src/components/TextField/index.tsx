import { useState } from "react";
import * as S from "./styles";
import { ReactComponent as Logo } from "../../assets/images/icon-copy.svg";
import { copyText } from "../../utils/clipboard";

export const TextField = ({
  placeholder = "P4$5W0rD!",
  value,
}: TextFieldProps) => {
  const [showCopy, setShowCopy] = useState(false);

  const handleCopy = () => {
    if (value) {
      copyText(value);
      setShowCopy(true);

      setTimeout(() => {
        setShowCopy(false);
      }, 2000);
    }
  };

  return (
    <S.Container onClick={handleCopy}>
      {!value && placeholder && (
        <div>
          <S.Placeholder>{placeholder}</S.Placeholder>
        </div>
      )}
      {value && (
        <div>
          <S.Value>{value}</S.Value>
        </div>
      )}
      <S.WrapperCopy>
        {showCopy && <span>COPIED</span>}
        {value && <Logo />}
      </S.WrapperCopy>
    </S.Container>
  );
};
