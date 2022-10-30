import type { NextPage } from 'next'
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'

const Home: NextPage = () => {
  return (
    <ApplicationWrapper title='Home' description='Home of the rootlab movies website'>
      <div className="grow flex flex-col justify-center items-center bg-[url('/images/home-bg.jpg')]">
        <div className="grow bg-gradient-to-r from-purple-500 to-pink-500 w-full justify-center items-center flex opacity-75">
          <h1 className="text-3xl font-bold underline text-white">
              Bienvenidos a Rootlab Movies
          </h1>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default Home
