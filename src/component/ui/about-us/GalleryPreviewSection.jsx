import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    title: "Leadership Workshops",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    title: "Community Learning",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    title: "Youth Engagement",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    title: "Education Initiatives",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    title: "Youth Engagement",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    title: "Education Initiatives",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    title: "Education Initiatives",
  },
];

export default function GalleryPreviewSection() {
  return (
    <Box
      py={{ base: 80, md: 110 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071120 0%, #0d1d36 50%, #13284a 100%)",
      }}
    >
      {/* BACKGROUND ORB */}

      <Box
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.25)",
          filter: "blur(120px)",
        }}
      />

      <Container size="xl" pos="relative">
        {/* HEADER */}

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          mb={55}
        >
          <Group justify="space-between" align="end">
            <Box maw={650}>
              <Text
                c="orange.4"
                fw={700}
                tt="uppercase"
                mb="md"
                style={{ letterSpacing: 1 }}
              >
                Photo & Documentary Gallery
              </Text>

              <Title
                order={2}
                c="white"
                fw={900}
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  lineHeight: 1.1,
                }}
              >
                Stories Captured
                <br />
                Through Real Moments
              </Title>

              <Text
                c="gray.3"
                size="lg"
                mt="lg"
                style={{
                  lineHeight: 1.9,
                }}
              >
                A glimpse into workshops, community engagement, leadership
                programs, and the everyday stories shaping social change.
              </Text>
            </Box>

            <Button
              component={Link}
              to="/gallery"
              radius="xl"
              size="lg"
              color="orange"
              rightSection={<FaArrowRight size={14} />}
            >
              View Full Gallery
            </Button>
          </Group>
        </MotionBox>

        {/* GALLERY GRID */}

        <Grid gutter={22}>
          {galleryImages.map((item, index) => (
            <Grid.Col
              key={index}
              span={{
                base: 12,
                sm: index === 0 ? 12 : 6,
                md: index === 0 ? 6 : 3,
              }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Box
                  pos="relative"
                  style={{
                    overflow: "hidden",
                    borderRadius: 30,
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={item.image}
                    h={index === 0 ? 420 : 420}
                    fit="cover"
                    style={{
                      transition: "0.5s",
                    }}
                  />

                  {/* OVERLAY */}

                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.78) 100%)"
                    opacity={1}
                  />

                  {/* CONTENT */}

                  <Box
                    style={{
                      position: "absolute",
                      bottom: 25,
                      left: 25,
                      right: 25,
                      zIndex: 2,
                    }}
                  >
                    <Text c="white" fw={800} size="xl">
                      {item.title}
                    </Text>

                    <Text c="gray.3" size="sm" mt={6}>
                      Documentary moments from IISJ & MSC community initiatives.
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
