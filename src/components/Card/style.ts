import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  width: 18rem;
`;

export const LogoCard = styled.img`
  width: 100%;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
`;

export const BodyCard = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;

export const TitleCard = styled.h5`
  margin-bottom: .75rem;
`;

export const TextCadr = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;