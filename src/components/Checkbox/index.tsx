import * as CheckboxStyle from "@radix-ui/react-checkbox";

import * as S from "./styles";
import { ReactComponent as Icon } from "../../assets/images/icon-check.svg";
import { useState } from "react";

export const Checkbox = ({ listCheckbox, handleUpdateList }: CheckboxProps) => {
  const [newListCheckbox, setNewListCheckbox] = useState(listCheckbox);

  const handleCheck = (value: string) => {
    const list = newListCheckbox.map((item) => {
      if (item.id === value) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setNewListCheckbox(list);

    if (handleUpdateList) {
      handleUpdateList(list);
    }
  };

  return (
    <S.Container>
      {newListCheckbox.map((item) => (
        <div className="main" key={item.id}>
          <div onClick={() => handleCheck(item.id)}>
            <CheckboxStyle.Root className="checkboxRoot" checked={item.checked}>
              <CheckboxStyle.Indicator className="checkboxIndicator">
                <Icon />
              </CheckboxStyle.Indicator>
            </CheckboxStyle.Root>
            <span className="label">{item.label}</span>
          </div>
        </div>
      ))}
    </S.Container>
  );
};
