import type { NextPage } from 'next'
import { type } from 'os';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { MovieList } from '../../components/MovieList/MovieList';

interface TProps {

}

const Movies: NextPage<TProps> = () => {
  return (
    <ApplicationWrapper title='Movies' description='Movies of the rootlab catalog website'>

      <div className="grow bg-gradient-to-r from-purple-500 to-pink-500 w-full justify-center items-center flex opacity-75">
        <h1 className="text-3xl font-bold underline text-white">
          what will you see today?
        </h1>
      </div>
      <MovieList>

      </MovieList>
    </ApplicationWrapper>
  );
};

export default Movies