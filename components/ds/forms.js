import styled from "@emotion/styled";

export const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  width: 500px;
`;

export const Input100 = styled(Input)`
  width: 100px;
  text-align: right;
`;

export const Input400 = styled(Input)`
  width: 400px;
`;
