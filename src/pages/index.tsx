import type { NextPage } from 'next'
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'

const Home: NextPage = () => {
  return (
    <ApplicationWrapper title='Home' description='Home of the rootlab movies website'>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

    </ApplicationWrapper>
  );
};

export default Home
