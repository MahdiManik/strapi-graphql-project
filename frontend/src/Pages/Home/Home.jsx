import { useQuery, gql } from "@apollo/client";

const Home = () => {
  // const {data, loading, error} =
  return (
    <>
      <div className="banner md:flex lg:flex flex-none mt-32 text-white">
        <div className="w-full">
          <h3 className="text-xl font-bold">HELLO, I am</h3>
          <h1 className="text-5xl font-bold ">
            Mahdi <span className="text-orange-600">Hasan</span>
          </h1>

          <p className="py-8 text-5xl font-bold">This is my blog platform</p>
        </div>
      </div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </>
  );
};

export default Home;
