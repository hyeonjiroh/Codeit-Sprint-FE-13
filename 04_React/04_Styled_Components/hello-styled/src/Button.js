import styled from "styled-components";
import nailImg from "./nail.png";

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #ffffff;
  padding: 16px;

  & ${Icon} {
    margin-right: 4px;
  }

  &:hover,
  &:active {
    background-color: #463770;
  }
`;

function Button({ children, ...buttonProps }) {
  return (
    <StyledButton {...buttonProps}>
      <Icon src={nailImg} alt="nail icon" />
      {children}
    </StyledButton>
  );
}

export default Button;
