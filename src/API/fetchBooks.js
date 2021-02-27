import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

export const fetchBooks = async setBooks => {
  const { data } = await axios.get(API_URL);
  const { results } = data;
  const { books } = results;
  setBooks(books);
};
