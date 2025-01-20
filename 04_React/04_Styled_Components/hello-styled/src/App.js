import styled from "styled-components";
import Input from "./Input";

const Container = styled.div`
  margin: 0 auto;
  width: 400px;

  ${Input} {
    box-sizing: border-box;
    display: block;
    margin: 8px 0 16px;
    width: 100%;
  }
`;

function App() {
  return (
    <Container>
      <h1>로그인</h1>
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="styled@codeit.kr" />
      <label htmlFor="password">Password</label>
      <Input type="password" id="password" placeholder="비밀번호" />
    </Container>
  );
}

export default App;
