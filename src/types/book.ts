export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    publishedDate: string;
    publisher: string;
    description: string;
  };
}

export interface BooksState {
  books: Book[];
  currentBook?: Book;
}

export interface BooksQuery {
  totalItems: number;
  items?: Book[];
}
