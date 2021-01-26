import { FC } from "react";

import { Label, TextInput } from "./InputGroup.styles";

import Error from "#root/components/Shared/ErrorSmall";

interface InputGroupProps {
  error: string | undefined;
  name: string;
  placeholder: string;
  reference: any;
  type: string;
}

const InputGroup: FC<InputGroupProps> = ({
  error,
  name,
  placeholder,
  reference,
  type,
}) => {
  return (
    <Label>
      <TextInput
        errored={!!error}
        name={name}
        placeholder={placeholder}
        ref={reference}
        type={type}
      />
      <Error>{error}</Error>
    </Label>
  );
};

export default InputGroup;
