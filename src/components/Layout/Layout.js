import dynamic from "next/dynamic";
import { Imports } from ".";

const Navbar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });

export default ({ children }) => {
  const { useSession } = Imports;
  const { data: session } = useSession();

  return (
    <div>
      {session && <Navbar />}
      <main>{children}</main>
    </div>
  );
};
