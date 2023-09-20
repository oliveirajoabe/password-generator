import { useMemo } from "react";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { SliderRange } from "../../components/SliderRange";
import { Strength } from "../../components/Strength";
import { TextField } from "../../components/TextField";
import { ReactComponent as Icon } from "../../assets/images/icon-arrow-right.svg";

import * as S from "./styles";
import { generatePassword, getPasswordStrength } from "../../utils/password";
import { useState } from "react";

interface PropsTeste {
  length: number | number[];
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

export const Home = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState<Level>("medium");
  const [config, setConfigs] = useState<PropsTeste>({
    length: 10,
    useUppercase: false,
    useLowercase: false,
    useNumbers: false,
    useSymbols: false,
  });

  const listCheckbox = [
    {
      id: "useUppercase",
      label: "Include Uppercase Letters",
      checked: false,
    },
    {
      id: "useLowercase",
      label: "Include Lowercase Letters",
      checked: false,
    },
    {
      id: "useNumbers",
      label: "Include Numbers",
      checked: false,
    },
    {
      id: "useSymbols",
      label: "Include Symbols",
      checked: false,
    },
  ];

  const handleGeneratePassword = () => {
    const { length, useLowercase, useNumbers, useSymbols, useUppercase } =
      config;
    const password = generatePassword(
      length,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );
    const strength = getPasswordStrength(password);
    setPassword(password);
    setStrength(strength);
  };

  const handleChangeSlider = (value: number | number[]) => {
    setConfigs((state) => {
      return { ...state, length: value };
    });
  };

  const handleUpdatedListCheckbox = (value: ListCheckbox[]) => {
    const updatedConfig = { ...config };

    value.forEach((item) => {
      const { id, checked } = item;

      if (id === "useUppercase") {
        updatedConfig.useUppercase = checked;
      } else if (id === "useLowercase") {
        updatedConfig.useLowercase = checked;
      } else if (id === "useNumbers") {
        updatedConfig.useNumbers = checked;
      } else if (id === "useSymbols") {
        updatedConfig.useSymbols = checked;
      }
    });

    setConfigs(updatedConfig);
  };

  const hasTrueValue = useMemo(() => {
    const configValues = Object.values(config);
    return configValues.some((value) => value === true);
  }, [config]);

  return (
    <S.Container>
      <S.Wrapper>
        <span>Password Generator</span>
        <TextField value={password} />
        <S.Main>
          <SliderRange onChange={handleChangeSlider} />

          <Checkbox
            listCheckbox={listCheckbox}
            handleUpdateList={handleUpdatedListCheckbox}
          />

          <Strength strength={strength} />
          <footer>
            <Button
              text="GENERATE"
              rightIcon={<Icon />}
              onClick={handleGeneratePassword}
              disabled={!hasTrueValue}
            />
          </footer>
        </S.Main>
      </S.Wrapper>
    </S.Container>
  );
};
