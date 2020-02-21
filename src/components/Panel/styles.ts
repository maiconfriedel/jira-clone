import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 25px;
`;

export const Body = styled.div`
  background: #f6f6f6;
  margin-left: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: grab;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: rgba(23, 43, 77, 0.85);
`;

export const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
