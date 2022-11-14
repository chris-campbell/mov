import React from "react";
import WatchList from "../../src/components/WatchList.js";

import { getSession } from "next-auth/react";

const watchListPage = ({ session }) => {
  return <WatchList session={session} />;
};

export default watchListPage;

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);

    return {
      props: { session },
    };
  } catch (error) {
    console.log({ error });
  }
}
