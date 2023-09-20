import { Book } from 'types';

export const BookCard = ({ book }: { book: Book }) => {
  return <div>{book.id}</div>;
};
