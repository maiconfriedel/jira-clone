import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 280px;
  border-radius: 7px;
  margin-bottom: 5px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  font-size: 14px;
`;

export const Title = styled.p`
  margin: 15px 0px 15px 15px;
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

export const Responsible = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 14px;
  margin: 0px 15px 0px 0px;
`;

export const Effort = styled.div`
  background: #eee;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: 0px 3px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
