import {
  Container,
  Group,
  Text,
  Button,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";
import { theme } from "../../theme";

function Navbar() {
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const location = useLocation();

  // 🔥 Detect scroll
  const isScrolled = scroll.y > 20;

  // 🎯 Active link style
  const getLinkStyle = (path) => ({
    color: location.pathname === path ? theme.colors.orange[5] : "white",
    textDecoration: "none",
    fontWeight: 500,
    transition: "0.3s",
  });

  return (
    <>
      {/* 🔥 Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: isScrolled ? theme.colors.darkBlue[9] : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          transition: "0.3s ease",
        }}
      >
        <Container size="lg">
          <Group justify="space-between" py="md">
            {/* 🔶 Logo (LEFT) */}
            <Text fw={700} size="xl">
              <span style={{ color: theme.colors.orange[5] }}>IISJ</span>
              <span style={{ color: "white" }}>Collective</span>
            </Text>

            {/* 🖥 Desktop Menu (RIGHT) */}
            <Group gap="lg" visibleFrom="md">
              <Link to="/" style={getLinkStyle("/")}>
                Home
              </Link>
              <Link to="/about" style={getLinkStyle("/about")}>
                About
              </Link>
              <Link to="/contact" style={getLinkStyle("/contact")}>
                Contact Us
              </Link>
              {/* <Button
                variant="subtle"
                color="orange"
                rightSection={<FaArrowRight size={14} />}

              >
                Donate
              </Button> */}
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                color="orange"
                rightSection={<FaArrowRight size={14} />}
                visibleFrom="md"
              >
                Donate Now
              </Button>
            </Group>

            {/* 📱 Mobile Burger */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              color="white"
            />
          </Group>
        </Container>
      </motion.div>

      {/* 📱 Mobile Drawer (LEFT SIDE) */}
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        padding="md"
        size="60%"
        position="right"
        styles={{
          content: {
            backgroundColor: theme.colors.darkBlue[9],
          },
        }}
      >
        <Stack mt="xl" gap="lg">
          <Link to="/" onClick={close} style={getLinkStyle("/")}>
            Home
          </Link>

          <Link to="/about" onClick={close} style={getLinkStyle("/about")}>
            About
          </Link>

          <Link to="/contact" onClick={close} style={getLinkStyle("/contact")}>
            Contact
          </Link>

          {/* <Button
            variant="light"
            color="orange"
            rightSection={<FaArrowRight size={14} />}
          >
            Donate
          </Button> */}
          <Button
            component={Link}
            to="/contact"
            color="orange"
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
