import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container">
          <img src="./images/logo.png" alt="" />
          {/* <!-- <a className="navbar-brand" href="#"></a> --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item me-2">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#Why-Us">
                  Our Services
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#Why-Us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#FAQ">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary btn-sm"
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  {isLoggedIn ? "Registered" : "Login"}
                </button>
              </li>
            </ul>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h3
                className="offcanvas-title"
                id="offcanvasWithBothOptionsLabel"
              >
                BCR
              </h3>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item me-2">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Our-Services"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="#Why-Us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="#FAQ">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                  ) : (
                    <button><Link to="/Login">Login</Link></button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      {isLoggedIn ? (
                        <a onClick={handleLogout} href>
                          Logout
                        </a>
                      ) : (
                        <Link to="/Login">Login</Link>
                      )}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </nav>
    </div>
  );
};

export default Nav;
