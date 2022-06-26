import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import styles from "./Header.module.css";
import Link from "next/link";
import { Store } from "../../utils/Store";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { ImLibrary } from "react-icons/im";

export default function Header() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { userInfo } = state || {};
  // console.log(userInfo)

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    router.push("/");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/" as={Link}>
            <Image src={logo} alt="Logo " width={120} height={60}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav "
            className="justify-content-end   align-items-center"
          >
            <Nav className="align-items-center">
              <Link href={"/#section_1"}>
                <a className={styles.navLink}>হোম</a>
              </Link>
              <Link href={"/#section_2"}>
                <a className={styles.navLink}>কোর্স</a>
              </Link>
              <Link href={"/#section_3"}>
                <a className={styles.navLink}>আমাদের সম্পর্কে</a>
              </Link>
              <Link href={"/#section_4"}>
                <a className={styles.navLink}>যোগাযোগ</a>
              </Link>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {userInfo ? (
                  <>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <Link href="/login">
                    <a className={styles.navLink}> লগইন </a>
                  </Link>
                )}
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> {userInfo ? userInfo.name : ""}
                </MenuItem>
                {userInfo?.isAdmin ? (
                  <MenuItem>
                  <ListItemIcon>
                    <ImLibrary />
                  </ListItemIcon>
                  Dashboard
                </MenuItem>
                ):(
                  ""
                ) }
                
                <Divider />
                <MenuItem onClick={logoutClickHandler}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <Link href={"/result"}>
                <a className={`${styles.navLink}  ${styles.course}`}>
                  ব্রাউজ কোর্স রেসাল্ট
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
