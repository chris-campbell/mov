import Navbar from "./styles";
import Image from "next/image";

import { Imports } from ".";

export default () => {
  return (
    <Navbar>
      <Navbar.Logo>
        <Imports.Link href="/movies">Mov</Imports.Link>
      </Navbar.Logo>

      <Imports.IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Image src={Imports.Search} width={20} height={20} />
      </Imports.IconButton>

      <Navbar.PrimaryLinks>
        <Navbar.WatchList>
          <Imports.Link href="/movies/watch-list">Watch list</Imports.Link>
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
    </Navbar>
  );
};
