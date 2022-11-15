import { Imports } from ".";
import dynamic from "next/dynamic";

const ListCount = dynamic(() => import("./ListCount/ListCount"), {
  ssr: false,
});

const WatchList = ({ session }) => {
  const { BackButton, useSelector, WatchWall, useEffect, useRouter } = Imports;

  const list = useSelector((state) => state.value);
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  return (
    <div
      style={{ maxWidth: "1200px", margin: "0 auto", paddingInline: "1rem" }}
    >
      <BackButton />
      <ListCount listSize={list?.length} />

      <WatchWall list={list} />
    </div>
  );
};

export default WatchList;
