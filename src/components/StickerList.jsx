import styled from "styled-components";
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

export const StickerList = ({ children }) => {
  return <Ul>{children}</Ul>;
};
