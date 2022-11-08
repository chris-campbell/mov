import Navbar from "./styles";
import { Imports } from ".";

export default () => {
  const { IconButton, Image, Link, PeekABooSearch, Search, useState } = Imports;

  const [toggle, setoggle] = useState(false);

  const toggleBar = () => {
    setoggle(!toggle);
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
              <Link href="/movies/watch-list">Watch list</Link>
              <Navbar.WatchCount>3</Navbar.WatchCount>
            </Navbar.WatchList>

            <Navbar.Dropdown>
              <Navbar.Avatar
                src="https://via.placeholder.com/600/d32776"
                width={50}
                height={50}
                alt="User Avatar"
              />
              <Navbar.Menu>
                <ul>
                  <li>Logout</li>
                  <li>Clear List</li>
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
