import Container from "./styles";
import { Imports } from ".";

const PeekABooSearch = ({ toggle }) => {
  const { useSearch, useRouter } = Imports;

  const { setSearch } = useSearch();
  const { push, pathname } = useRouter();

  const handleChange = (e) => {
    pathname !== "/movies" && push("/");
    setSearch(e.target.value);
  };

  return (
    <Container toggle={toggle}>
      <input placeholder="Search by title" onChange={(e) => handleChange(e)} />
    </Container>
  );
};

export default PeekABooSearch;
