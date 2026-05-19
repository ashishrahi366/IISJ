import {
  Container,
  Group,
  Text,
  Button,
  Burger,
  Drawer,
  Stack,
  Menu,
  Box,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/navbar.css";
import {
  FaArrowRight,
  FaChevronDown,
  FaImages,
  FaNewspaper,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";

import { theme } from "../../theme";

function Navbar() {
  const navigate = useNavigate();

  const [opened, { toggle, close }] = useDisclosure(false);

  const [scroll] = useWindowScroll();

  const location = useLocation();

  // 🔥 Detect scroll
  const isScrolled = scroll.y > 20;

  // 🔥 ACTIVE ROUTE
  const isActive = (path) => location.pathname === path;

  // 🔥 NAV LINK STYLE
  const navLinkStyle = (path) => ({
    position: "relative",
    color: isActive(path) ? theme.colors.orange[5] : "white",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "15px",
    transition: "0.3s ease",
    paddingBottom: "5px",
  });

  // 🔥 UNDERLINE
  const renderUnderline = (path) =>
    isActive(path) && (
      <motion.div
        layoutId="navbar-underline"
        style={{
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "100%",
          height: "2px",
          background: theme.colors.orange[5],
          borderRadius: "10px",
        }}
      />
    );

  return (
    <>
      {/* 🔥 NAVBAR */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: isScrolled ? "rgba(7, 16, 35, 0.95)" : "transparent",

          backdropFilter: isScrolled ? "blur(12px)" : "none",

          borderBottom: isScrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "none",

          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          transition: "0.3s ease",
        }}
      >
        <Container size="lg">
          <Group justify="space-between" py="md">
            {/* 🔶 LOGO */}
            <Box
              component={Link}
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <motion.div whileHover={{ scale: 1.03 }}>
                <Text fw={800} size="xl">
                  <span style={{ color: theme.colors.orange[5] }}>IISJ</span>

                  <span style={{ color: "white" }}>Collective</span>
                </Text>
              </motion.div>
            </Box>

            {/* 🖥 DESKTOP MENU */}
            <Group gap={30} visibleFrom="md">
              {/* HOME */}
              <Box style={{ position: "relative" }}>
                <Link to="/" style={navLinkStyle("/")}>
                  Home
                </Link>

                {renderUnderline("/")}
              </Box>

              {/* ABOUT */}
              <Box style={{ position: "relative" }}>
                <Link to="/about" style={navLinkStyle("/about")}>
                  About
                </Link>

                {renderUnderline("/about")}
              </Box>

              {/* 🔥 INFORMATION DROPDOWN */}
              <Menu
                trigger="hover"
                openDelay={100}
                closeDelay={200}
                shadow="xl"
                width={250}
                transitionProps={{
                  transition: "pop-top-right",
                  duration: 250,
                }}
              >
                <Menu.Target>
                  <Box
                    style={{
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <Group gap={5}>
                      <Text
                        style={{
                          color:
                            location.pathname.includes("/msc") ||
                            location.pathname.includes("/avarna") ||
                            location.pathname.includes("/iisj") ||
                            location.pathname.includes("/gallery") ||
                            location.pathname.includes("/blogs") ||
                            location.pathname.includes("/vimal-kumar")
                              ? theme.colors.orange[5]
                              : "white",

                          fontWeight: 600,
                          fontSize: "15px",
                          transition: "0.3s",
                        }}
                      >
                        Information
                      </Text>

                      <FaChevronDown
                        size={12}
                        color={
                          location.pathname.includes("/msc") ||
                          location.pathname.includes("/avarna") ||
                          location.pathname.includes("/iisj") ||
                          location.pathname.includes("/gallery") ||
                          location.pathname.includes("/blogs") ||
                          location.pathname.includes("/vimal-kumar")
                            ? theme.colors.orange[5]
                            : "white"
                        }
                      />
                    </Group>

                    {(location.pathname.includes("/msc") ||
                      location.pathname.includes("/avarna") ||
                      location.pathname.includes("/iisj") ||
                      location.pathname.includes("/gallery") ||
                      location.pathname.includes("/blogs") ||
                      location.pathname.includes("/vimal-kumar")) && (
                      <motion.div
                        layoutId="navbar-underline"
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: -7,
                          width: "100%",
                          height: "2px",
                          background: theme.colors.orange[5],
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </Box>
                </Menu.Target>

                {/* DROPDOWN */}
                <Menu.Dropdown
                  style={{
                    background: "rgba(10, 18, 38, 0.96)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "18px",
                    padding: "10px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  }}
                >
                  <Menu.Item
                    component={Link}
                    to="/msc"
                    className="navbar-dropdown-item"
                  >
                    Scavenger Communities
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/avarna"
                    className="navbar-dropdown-item"
                  >
                    Avarna
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/iisj"
                    className="navbar-dropdown-item"
                  >
                    IISJ
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/gallery"
                    className="navbar-dropdown-item"
                  >
                    Gallery
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/blogs"
                    className="navbar-dropdown-item"
                  >
                    News & Stories
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/vimal-kumar"
                    className="navbar-dropdown-item"
                  >
                    About Vimal Kumar
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* 🔥 OUR PROJECT DROPDOWN */}
              <Menu
                trigger="hover"
                openDelay={100}
                closeDelay={200}
                shadow="xl"
                width={250}
                transitionProps={{
                  transition: "pop-top-right",
                  duration: 250,
                }}
              >
                <Menu.Target>
                  <Box
                    style={{
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <Group gap={5}>
                      <Text
                        style={{
                          color:
                            location.pathname.includes(
                              "/Community-Resource-Centers"
                            ) ||
                            location.pathname.includes("/Fellowship-Equality")
                              ? theme.colors.orange[5]
                              : "white",

                          fontWeight: 600,
                          fontSize: "15px",
                          transition: "0.3s",
                        }}
                      >
                        Our Project
                      </Text>

                      <FaChevronDown
                        size={12}
                        color={
                          location.pathname.includes(
                            "/Community-Resource-Centers"
                          ) ||
                          location.pathname.includes("/Fellowship-Equality")
                            ? theme.colors.orange[5]
                            : "white"
                        }
                      />
                    </Group>

                    {(location.pathname.includes(
                      "/Community-Resource-Centers"
                    ) ||
                      location.pathname.includes("/Fellowship-Equality")) && (
                      <motion.div
                        layoutId="navbar-underline"
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: -7,
                          width: "100%",
                          height: "2px",
                          background: theme.colors.orange[5],
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </Box>
                </Menu.Target>

                {/* DROPDOWN */}
                <Menu.Dropdown
                  style={{
                    background: "rgba(10, 18, 38, 0.96)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "18px",
                    padding: "10px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  }}
                >
                  <Menu.Item
                    component={Link}
                    to="/Community-Resource-Centers"
                    className="navbar-dropdown-item"
                  >
                    Community Resource Center
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/Fellowship-Equality"
                    className="navbar-dropdown-item"
                  >
                    Fellows For Equality
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* CONTACT */}
              <Box style={{ position: "relative" }}>
                <Link to="/contact" style={navLinkStyle("/contact")}>
                  Contact Us
                </Link>

                {renderUnderline("/contact")}
              </Box>
              {/* DONATE BUTTON */}
              <Button
                onClick={() => navigate("/contact")}
                variant="gradient"
                gradient={{
                  from: "orange",
                  to: "red",
                }}
                radius="xl"
                px={24}
                rightSection={<FaArrowRight size={13} />}
                style={{
                  boxShadow: "0 10px 25px rgba(249,115,22,0.35)",
                }}
              >
                Donate Now
              </Button>
            </Group>

            {/* 📱 MOBILE BURGER */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              color="white"
            />
          </Group>
        </Container>
      </motion.div>

      {/* 📱 MOBILE DRAWER */}
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        padding="lg"
        size="75%"
        position="right"
        styles={{
          content: {
            background: "linear-gradient(180deg,#071023,#0f172a)",
          },
        }}
      >
        <Stack mt={50} gap="xl">
          <Link to="/" onClick={close} style={navLinkStyle("/")}>
            Home
          </Link>

          <Link to="/about" onClick={close} style={navLinkStyle("/about")}>
            About
          </Link>

          <Link to="/contact" onClick={close} style={navLinkStyle("/contact")}>
            Contact
          </Link>

          <Link to="/blogs" onClick={close} style={navLinkStyle("/blogs")}>
            News & Stories
          </Link>

          {/* MOBILE SUB MENU */}
          <Stack gap="sm">
            <Text fw={700} c="orange" size="sm" tt="uppercase">
              Information
            </Text>

            <Link
              to="/gallery"
              onClick={close}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Gallery
            </Link>

            <Link
              to="/events"
              onClick={close}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Events
            </Link>

            <Link
              to="/reports"
              onClick={close}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Reports
            </Link>

            <Link
              to="/blogs"
              onClick={close}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              News Articles
            </Link>
          </Stack>

          {/* BUTTON */}
          <Button
            component={Link}
            to="/contact"
            color="orange"
            radius="xl"
            rightSection={<FaArrowRight size={14} />}
            onClick={close}
          >
            Donate Now
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}

export default Navbar;
