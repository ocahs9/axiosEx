import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 15vh;
  background-color: rgba(70, 130, 180, 0.5);
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem
  
`;

export const FixedButton = styled.div`
  position: absolute;
  left: 0;
  margin: 1rem; 

  &:hover{
    background-color: rgba(70, 130, 180, 0.2);
  }
`;

export const Body = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10rem;
  width: 100vw;
  min-height: 85vh;
  background-color: aliceblue;
`