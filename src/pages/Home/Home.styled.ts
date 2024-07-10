import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 15vh;
  background-color: rgba(70, 130, 180, 0.5);
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: rgba(70, 130, 180, 0.4);

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

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.75rem;
  border: 1px solid gray;
  width: 15vw;
  height: 30vh;

  &:hover{
    background-color: rgba(70, 130, 180, 0.2);
  }
`

export const ButtonTitle = styled.span`
  font-size: 3rem;
`
