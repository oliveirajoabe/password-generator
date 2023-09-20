import Slider from "rc-slider";
import { useState } from "react";

import * as S from "./styles";
import { defaultTheme } from "../../styles/theme/default";

export const SliderRange = ({
  maxSlider = 20,
  defaultValue = 10,
  onChange,
}: SliderRangeProps) => {
  const [amount, setAmount] = useState<number | number[]>(defaultValue);

  function handleSeek(amount: number | number[]) {
    setAmount(amount);
    if (onChange) {
      onChange(amount);
    }
  }

  return (
    <S.Container>
      <S.Header>
        <span>Character Length</span>
        <span className="rangeAmount">{amount}</span>
      </S.Header>
      <Slider
        max={maxSlider}
        onChange={handleSeek}
        defaultValue={defaultValue}
        trackStyle={{ backgroundColor: `${defaultTheme.colors.neonGreen}` }}
        railStyle={{ backgroundColor: `${defaultTheme.colors.veryDark}` }}
        handleStyle={{
          borderColor: `${defaultTheme.colors.almostWhite}`,
          borderWidth: 5,
        }}
      />
    </S.Container>
  );
};
