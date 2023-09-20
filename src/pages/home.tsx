import { SearchBox } from 'components/base/searchBox';
import { Layout } from '../components/layout';

const HomePage = () => {
  return (
    <Layout loading={false} error={false}>
      <div className='flex flex-col bg-gray-200 p-4 items-center gap-8'>
        <SearchBox />
        <div className='flex flex-wrap'></div>
      </div>
    </Layout>
  );
};

export default HomePage;
