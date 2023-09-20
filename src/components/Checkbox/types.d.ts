interface ListCheckbox {
  id: string;
  label: string;
  checked: boolean;
}

interface CheckboxProps {
  listCheckbox: ListCheckbox[];
  handleUpdateList?: (value: ListCheckbox[]) => void;
}
