import {
    Container,
    Group,
    Text,
    Button,
    Burger,
    Drawer,
    Stack,
  } from "@mantine/core";
  import { useDisclosure } from "@mantine/hooks";
  import { Link } from "react-router-dom";
  import { motion } from "framer-motion";
  
  // React Icons
  import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowRight } from "react-icons/fa";
  
  import { theme } from "../../theme";
  
  function Navbar() {
    const [opened, { toggle, close }] = useDisclosure(false);
  
    return (
      <>
        {/* 🔝 Top Bar */}
        <div
          style={{
            background: theme.colors.dark,
            color: "#ffffff80",
            padding: "8px 0",
          }}
        >
          <Container size="lg">
            <Group justify="space-between">
  
              {/* Left */}
              <Group gap="md">
                <Group gap={5}>
                  <FaMapMarkerAlt size={14} />
                  <Text size="sm">123 Street, New York, USA</Text>
                </Group>
                <Group gap={5}>
                  <FaEnvelope size={14} />
                  <Text size="sm">info@example.com</Text>
                </Group>
              </Group>
  
              {/* Right */}
              <Group gap="sm">
                <Text size="sm">Follow us:</Text>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </Group>
            </Group>
          </Container>
        </div>
  
        {/* 🔥 Main Navbar */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: theme.colors.dark,
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Container size="lg">
            <Group justify="space-between" py="md">
  
              {/* Logo */}
              <Text fw={700} size="xl" c={theme.colors.primary}>
                Chari<span style={{ color: "white" }}>Team</span>
              </Text>
  
              {/* Desktop Menu */}
              <Group gap="lg" visibleFrom="md">
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
                <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                  About
                </Link>
                <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                  Contact
                </Link>
              </Group>
  
              {/* Donate Button */}
              <Button
                variant="outline"
                color="orange"
                rightSection={<FaArrowRight size={14} />}
                visibleFrom="md"
              >
                Donate Now
              </Button>
  
              {/* Mobile Burger */}
              <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
            </Group>
          </Container>
        </motion.div>
  
        {/* 📱 Mobile Drawer */}
        <Drawer opened={opened} onClose={close} title="Menu" padding="md" size="75%">
          <Stack>
            <Link to="/" onClick={close}>Home</Link>
            <Link to="/about" onClick={close}>About</Link>
            <Link to="/contact" onClick={close}>Contact</Link>
  
            <Button
              color="orange"
              rightSection={<FaArrowRight size={14} />}
            >
              Donate Now
            </Button>
          </Stack>
        </Drawer>
      </>
    );
  }
  
  export default Navbar;