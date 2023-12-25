import { Form } from "antd";
import { NAME_ONLY_LETTERS, NAME_REQUIRED } from "../constants/messages";
import { editableTableInputConfig } from "../enums";
import CustomButton from "../components/Shared/CustomButton/CustomButton";

export const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
};

// Function to validate names.
export const validateName = (name) => {
  if (!name.trim()) return Promise.reject(new Error(NAME_REQUIRED));

  //Regex for numbers and special characters.
  if (/^[a-zA-Z ]{3,50}$/.test(name)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error(NAME_ONLY_LETTERS));
};

// This function returns the label for a key in an array of object,

// arr is the array
export const getLabelForKey = (arr, key = "active") => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].key === key) {
      return arr[i].label;
    }
  }
  return null;
};

export const EditableCell = ({
  editing,
  dataIndex,
  inputType,
  children,
  inputProps,
  record,
  onPreview,
  ...restProps
}) => {
  const inputConfig = editableTableInputConfig(inputProps);
  let inputNode = inputConfig[inputType];
  const handlePreview = () => {
    onPreview(record);
  };
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} className="m-0" rules={inputProps?.rules}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
