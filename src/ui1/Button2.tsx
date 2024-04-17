import styled from "@emotion/styled";

const Button = styled.button`
  background-color: white;
  border: 1px solid ${({ color }) => color};
  color: #333;
  min-height: 30px;
  min-width: 100px;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    color: grey;
  }
`;

const Button2 = ({ color, isDisable, children, onClick }: any) => {
  return (
    <Button color={color} disabled={isDisable} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Button2;
