import styled from "styled-components";

import Button from "./Button";

interface ButtonProps {
  hollow?: boolean;
}

const BlueButton = styled(Button)<ButtonProps>`
  color: ${props => (props.hollow ? props.theme.colors.blue[500] : `white`)};
  background-color: ${props =>
    props.hollow ? `transparent` : props.theme.colors.blue[500]};
  border-style: solid;
  border-color: ${props => props.theme.colors.blue[500]};
  :hover {
    background-color: ${props => props.theme.colors.blue[300]};
    border-color: ${props => props.theme.colors.blue[300]};
  }
`;

export default BlueButton;
