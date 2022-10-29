import type { NextPage } from 'next'
import { type } from 'os';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'

interface TProps {
    
}

const Movies: NextPage<TProps> = () => {
  return (
    <ApplicationWrapper title='Movies' description='Movies of the rootlab catalog website'>

      <h1 className="text-3xl font-bold underline">
        Movies
      </h1>

    </ApplicationWrapper>
  );
};

export default Movies