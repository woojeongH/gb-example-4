import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  color: white;
  min-height: 30px;
  min-width: 100px;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    color: grey;
  }
`;

const Button1 = ({ color, isDisable, children, onClick }: any) => {
  return (
    <Button color={color} disabled={isDisable} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Button1;
