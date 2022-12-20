import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ececec;
`

export const Image = styled.img`
  margin: 40px 0;
`

export const Content = styled.div`
  height: calc(100vh - 170px);
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

export const InputLabel = styled.label`
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;

  color: #333881;
  text-transform: uppercase;
`

export const Input = styled.input`
  width: 342px;
  height: 54px;

  border: none;
  outline: none;
  padding-left: 12px;

  background: #ebebeb;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #f5802f;

  font-weight: 400;
  font-size: 18px;
  line-height: 14px;
  text-transform: uppercase;

  color: #282828;

  margin-bottom: 34px;

  :focus {
    border-bottom: 2px solid #f5802f;
  }
`

export const Button = styled.button`
  text-decoration: none;
  width: 342px;
  height: 60px;
  border: none;
  outline: none;

  background: #f5802f;
  border-radius: 14px;

  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;
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
`
