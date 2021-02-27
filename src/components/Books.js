import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchBooks } from "../API/fetchBooks";
import Book from "./Book";

const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #fffdd0;
`;

const BooksGridWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: auto;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BooksHeader = styled.h1`
  color: #800000;
  font-size: 48px;
  padding: 30px;
  text-align: center;
  letter-spacing: 2px;
`;

const Books = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  return (
    <BooksContainer>
      <BooksHeader>Top 15 The New York Times Bestsellers</BooksHeader>
      <BooksGridWrapper>
        {Books.map(book => {
          return <Book key={book.title} {...book} />;
        })}
      </BooksGridWrapper>
    </BooksContainer>
  );
};

export default Books;
