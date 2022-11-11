import Dashboard from "../../src/components/Dashboard";
import { getSession } from "next-auth/react";

const MoviePage = () => {
  return <Dashboard />;
};

export default MoviePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
