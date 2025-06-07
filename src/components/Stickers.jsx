import stickers from "../../stickers.json";
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  background-color: rgb(239, 239, 239);
  padding: 25px 20px;
  border-radius: 15px;
  border: 1px solid black;
  flex-basis: calc((100% - 150px) / 3);
`;

const Img = styled.img`
  margin-bottom: 10px;
`;

const P = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 0;
`;

const Button = styled.button`
  background-color: pink;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-family: Montserrat;
`;

export const Stickers = ({ onClickChange }) => {
  return (
    <>
      {stickers.map((sticker, index) => {
        return (
          <Li key={index}>
            <Img src={sticker.img} alt={sticker.label} />
            <P>{sticker.label}</P>
            <Button onClick={() => onClickChange(sticker.label)}>
              Вибрати
            </Button>
          </Li>
        );
      })}
    </>
  );
};
