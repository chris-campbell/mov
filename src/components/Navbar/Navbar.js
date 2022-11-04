import Navbar from "./styles";
import Image from "next/image";

import { imports } from ".";

export default () => {
  return (
    <Navbar>
      <Navbar.Logo>
        <a href="/movies">Mov</a>
      </Navbar.Logo>

      <div
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Image src={imports.Search} width={20} height={20} />
      </div>

      <Navbar.PrimaryLinks>
        <Navbar.WatchList>
          <a href="/movies/watch-list">Watch list</a>
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
