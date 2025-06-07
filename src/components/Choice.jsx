import styled from "styled-components";

const Paragraph = styled.p``;

export const Choice = ({ choice }) => {
  return <Paragraph>Ваш вибір: {choice}</Paragraph>;
};
