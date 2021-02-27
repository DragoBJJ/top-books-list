import React from "react";
import styled from "styled-components";

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const BookTitle = styled.h2`
  color: #1d1d1d;
  max-width: 350px;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 40px;
  color: #1d1d1d;
  max-width: 80%;
  font-size: 18px;
`;

const Author = styled.p`
  color: #1d1d1d;
  font-size: 20px;
  max-width: 300px;
  text-align: center;
`;

const InfoList = styled.ul`
  list-style: none;
  color: #fffdd0;
  font-size: 16px;
  justify-content: flex-start;
  align-items: center;
`;

const LiElement = styled.li`
  color: #1d1d1d;
  font-size: 16px;
`;

const ElemeDesc = styled.span`
  color: #800000;
  font-size: 22px;
`;

const ListElement = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkElement = styled.a`
  margin-top: 10px;
  text-decoration: none;
  color: #1d1d1d;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #800000;
  }
`;

const Book = ({
  title,
  book_image,
  description,
  author,
  publisher,
  primary_isbn10,
  buy_links
}) => {
  return (
    <BookWrapper>
      <BookTitle>{title}</BookTitle>
      <ImageWrapper>
        <Image src={book_image} />
      </ImageWrapper>
      <Description>{description}</Description>
      <Author>
        <ElemeDesc>Author:</ElemeDesc> {author}
      </Author>

      <InfoList>
        <LiElement>
          <ElemeDesc>Publisher:</ElemeDesc> {publisher}
        </LiElement>
        <LiElement>
          <ElemeDesc>ISBN:</ElemeDesc> {primary_isbn10}
        </LiElement>
      </InfoList>

      <InfoList>
        <ElemeDesc>Buy Now:</ElemeDesc>
        {buy_links.map(link => {
          const { name, url } = link;
          return (
            <ListElement key={name}>
              <LinkElement href={url}>{name}</LinkElement>
            </ListElement>
          );
        })}
      </InfoList>
    </BookWrapper>
  );
};

export default Book;
