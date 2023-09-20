import { useParams } from 'react-router-dom';

const Books = () => {
  const { book_id } = useParams();

  console.log(book_id);

  return <div className='w-screen h-screen flex items-center justify-center'>Books Page</div>;
};

export default Books;
