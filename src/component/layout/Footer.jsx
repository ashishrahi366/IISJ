import {
  Container,
  Grid,
  Text,
  Title,
  Group,
  ActionIcon,
  TextInput,
  Button,
  Divider,
} from "@mantine/core";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { theme } from "../../theme";

function Footer() {
  const linkStyle = {
    display: "block",
    marginBottom: 6,
    color: "#ffffffcc",
    textDecoration: "none",
    transition: "0.3s",
  };

  const handleHover = (e, hover) => {
    e.currentTarget.style.color = hover ? theme.colors.orange[5] : "#ffffffcc";
  };
  return (
    <div
      style={{
        background: theme.colors.darkBlue[9],
        color: "#ffffffcc",
        marginTop: "80px",
      }}
    >
      <Container size="lg" py={60}>
        <Grid gutter="xl">
          {/* 🔶 Brand */}

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={3} mb="sm">
              <span style={{ color: theme.colors.orange[5] }}>IISJ</span>
              <span style={{ color: "white" }}>Collective</span>
            </Title>

            <Text size="sm" mb="md">
              Helping people in need around the world with dedication and love.
            </Text>

            <Group gap="xs">
              <ActionIcon
                variant="light"
                color="orange"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <FaTwitter size={14} />
              </ActionIcon>
              <ActionIcon
                variant="light"
                color="orange"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <FaFacebookF size={14} />
              </ActionIcon>
              <ActionIcon
                variant="light"
                color="orange"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <FaYoutube size={14} />
              </ActionIcon>
              <ActionIcon
                variant="light"
                color="orange"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <FaLinkedinIn size={14} />
              </ActionIcon>
            </Group>
          </Grid.Col>

          {/* 📍 Address */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={5} mb="md" c="white">
              Address
            </Title>

            <Group align="flex-start" gap="xs" mb="xs">
              <FaMapMarkerAlt />
              <Text size="sm">123 Street, New York, USA</Text>
            </Group>

            <Group gap="xs" mb="xs">
              <FaPhoneAlt />
              <Text size="sm">+012 345 67890</Text>
            </Group>

            <Group gap="xs">
              <FaEnvelope />
              <Text size="sm">info@example.com</Text>
            </Group>
          </Grid.Col>

          {/* 🔗 Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={5} mb="md" c="white">
              Quick Links
            </Title>

            <Text
              component="a"
              href="#"
              size="sm"
              style={linkStyle}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              About Us
            </Text>
            <Text
              component="a"
              href="#"
              size="sm"
              style={linkStyle}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Contact Us
            </Text>
          </Grid.Col>

          {/* 📩 Newsletter */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={5} mb="md" c="white">
              Newsletter
            </Title>

            <Text size="sm" mb="md">
              Subscribe to get latest updates and news.
            </Text>

            <div style={{ position: "relative" }}>
              <TextInput
                placeholder="Your email"
                radius="xl"
                size="md"
                styles={{
                  input: {
                    background: "transparent",
                    borderColor: "#ffffff30",
                    color: "white",
                  },
                }}
              />

              <Button
                radius="xl"
                size="xs"
                color="orange"
                style={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                }}
              >
                Sign Up
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔻 Bottom Bar */}
      <Divider color="#ffffff20" />

      <Container size="lg" py="md">
        <Group justify="space-between" wrap="wrap">
          <Text size="sm">
            © {new Date().getFullYear()} ChariTeam. All rights reserved.
          </Text>

          <Text size="sm">Designed with ❤️ using Mantine</Text>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;
