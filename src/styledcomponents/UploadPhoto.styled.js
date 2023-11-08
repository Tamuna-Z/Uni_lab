import styled from "styled-components";
export const AuthorizationContainer = styled.div`
  width: 694px;
  height: 694px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Title = styled.h1`
  margin: 72px 213px 40px 213px;
`;
export const PhotoWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 45px 297px 1px 257px;
  background-color: #e6ebff;
  position: relative;
`;
export const IconWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;
export const Upload = styled.input`
  position: absolute;
  top: 75px;
  left: 40px;
`;
export const FillName = styled.input`
  background-color: #e6ebff;
  width: 532px;
  height: 101px;
  margin: 15px;
  border: none;
  font-size: 30px;
  padding-left: 30px;
`;
export const SignIn = styled.button`
  background-color: #4980c0;
  width: 395px;
  height: 75px;
  color: white;
  border-radius: 50px;
  border: none;
  font-size: 24px;
  line-height: 30px;
`;
