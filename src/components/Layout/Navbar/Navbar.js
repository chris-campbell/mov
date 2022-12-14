import Navbar from "./styles";
import { Imports } from ".";

export default () => {
  const {
    IconButton,
    Image,
    Link,
    PeekABooSearch,
    Search,
    useState,
    useDispatch,
    useSelector,
    useSession,
    signOut,
    persistor,
    removeAllMovies,
  } = Imports;

  const [toggle, setoggle] = useState(false);
  const dispatch = useDispatch();
  const watchListCount = useSelector((state) => state.value).length;

  const toggleBar = () => {
    setoggle(!toggle);
  };

  const purge = async () => {
    await persistor.purge();

    dispatch(removeAllMovies());
  };

  const { data: session } = useSession();
  const { user } = session;

  const signoutUser = () => {
    purge();
    signOut();
  };

  return (
    <>
      <Navbar>
        <Navbar.Wrapper>
          <Navbar.Logo>
            <Link href="/movies">Mov</Link>
          </Navbar.Logo>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleBar}
          >
            <Image src={Search} width={20} height={20} />
          </IconButton>

          <Navbar.PrimaryLinks>
            <Navbar.WatchList>
              <Link href="/movies/watch-list">List</Link>
              <Navbar.WatchCount>{watchListCount}</Navbar.WatchCount>
            </Navbar.WatchList>

            <Navbar.Dropdown>
              <Navbar.Avatar
                src={user.image}
                width={50}
                height={50}
                alt="User Avatar"
              />
              <Navbar.Menu>
                <ul>
                  <li onClick={() => signoutUser()}>Logout</li>
                  <li onClick={() => purge()}>Clear List</li>
                </ul>
              </Navbar.Menu>
            </Navbar.Dropdown>
          </Navbar.PrimaryLinks>
        </Navbar.Wrapper>
      </Navbar>
      <PeekABooSearch toggle={toggle} />
    </>
  );
};
