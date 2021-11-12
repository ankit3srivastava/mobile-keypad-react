import styled from "styled-components";

const Maintainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  height: 560px;
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 29px;
`;
const Buttons = styled.button`
  width: 200px;
  height: 120px;
`;
const Divbuttons = styled.div`
  width: 100%;

  @media(max-width: 765px) {
    width: auto;
  }

`;

export {
    Maintainer,
    Input,
    Buttons,
    Divbuttons
}
