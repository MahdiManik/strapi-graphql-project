import { useQuery, gql } from "@apollo/client";
import ErrorPage from "../ErrorPage/ErrorPage";

const BLOGS = gql`
  query GetBlogs {
    blogs {
      id
      title
      blogImage
      description
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorPage />;

  console.log(data);

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
