import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ececec;
`

export const Image = styled.img`
  margin: 40px 0;
`

export const Content = styled.div`
  height: 100%;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;

  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h1`
  margin-bottom: 80px;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #24285b;
`
export const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 342px;
  height: 54px;

  border: none;
  outline: none;

  border-bottom: 2px solid #e0e0e0;
  margin-top: 12px;

  span {
    flex: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    text-transform: uppercase;

    color: #282828;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  button img {
    opacity: 0.25;
    width: 75%;
  }
`

export const Button = styled.button`
  width: 342px;
  height: 60px;
  margin-top: 50px;

  border: none;
  outline: none;

  background: #f5802f;
  border-radius: 14px;

  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  color: #fff;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(0.98);
  }

  img {
    transform: rotateY(180deg);
  }
`
