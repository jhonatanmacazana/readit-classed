import styled from "styled-components";

interface Props {
  readonly errored: boolean;
}

export const Label = styled.div`
  margin-bottom: 0.5rem;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const TextInput = styled.input<Props>`
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(249, 250, 251, 1);
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-width: 1px;

  border-radius: 0.25rem;
  :focus {
    background-color: white;
  }
  :hover {
    background-color: white;
  }
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  border-color: ${props =>
    props.errored ? `rgba(239, 68, 68, 1);` : `rgba(209, 213, 219, 1);`};
`;
