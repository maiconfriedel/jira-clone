import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 280px;
  border-radius: 7px;
  margin-bottom: 7px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  font-size: 14px;
  cursor: pointer;
  border: 0.2px solid rgba(0, 0, 0, 0.1);

  :hover {
    background: #f1f1f1;
  }
`;

export const Title = styled.p`
  margin: 15px 10px 10px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

interface EpicProps {
  r?: string;
  g?: string;
  b?: string;
}

export const Epic = styled.div<EpicProps>`
  background: rgba(
    ${props => props.r},
    ${props => props.g},
    ${props => props.b},
    0.1
  );
  margin: 0px 0px 0px 10px;
  border-radius: 5px;
  padding: 2px 5px;
  display: inline-block;
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  font-weight: bold;
  color: rgba(${props => props.r}, ${props => props.g}, ${props => props.b}, 1);
  font-size: 11px;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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
  margin: 0px 10px 0px 0px;
`;

export const Effort = styled.div`
  background: #e3e3e3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: 0px 6px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;
