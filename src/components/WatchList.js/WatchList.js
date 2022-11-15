import { Imports } from ".";
import dynamic from "next/dynamic";

const ListCount = dynamic(() => import("./ListCount/ListCount"), {
  ssr: false,
});

const WatchList = () => {
  const { BackButton, useSelector } = Imports;

  const list = useSelector((state) => state.value);

  return (
    <div
      style={{ maxWidth: "1200px", margin: "0 auto", paddingInline: "1rem" }}
    >
      <BackButton />
      <ListCount listSize={list?.length} />
    </div>
  );
};

export default WatchList;
