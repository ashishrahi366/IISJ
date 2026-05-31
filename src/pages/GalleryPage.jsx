import React, { useMemo, useState } from "react";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Overlay,
  Stack,
  Modal,
  ActionIcon,
  Group,
  Badge,
  Box,
  Button,
  Tabs,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  communityGallery,
  educationGallery,
  eventGallery,
  impactGallery,
} from "../constants/gallery";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";

import heroImg from "../assets/home/homeHero1.webp";

export default function GalleryPage() {
  const [opened, setOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState("community");

  const activeImages = useMemo(() => {
    switch (activeGallery) {
      case "education":
        return educationGallery;

      case "events":
        return eventGallery;

      case "impact":
        return impactGallery;

      default:
        return communityGallery;
    }
  }, [activeGallery]);

  const openImage = (index) => {
    setSelectedIndex(index);
    setOpened(true);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );
  };

  return (
    <div
      style={{
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <Box
        style={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={heroImg}
          alt="Gallery Hero"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* OVERLAY */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* CONTENT */}
        <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stack align="center" gap="xl">
              <Title
                ta="center"
                c="white"
                fw={900}
                style={{
                  fontSize: "clamp(42px, 7vw, 90px)",
                  lineHeight: 1.05,
                  maxWidth: "1000px",
                }}
              >
                Stories of
                <br />
                Change & Empowerment
              </Title>

              <Text
                ta="center"
                c="rgba(255,255,255,0.82)"
                size="xl"
                maw={850}
                lh={1.9}
              >
                Explore powerful moments from our grassroots movements,
                leadership programs, education initiatives, community events,
                and social transformation campaigns.
              </Text>

              <Group mt="md">
                <Button
                  size="lg"
                  radius="xl"
                  color="orange"
                  rightSection={<FaArrowRight size={14} />}
                >
                  Explore Gallery
                </Button>

                <Button
                  size="lg"
                  radius="xl"
                  variant="white"
                  leftSection={<FaPlay size={12} />}
                  component={Link}
                  to="/blogs"
                >
                  Watch Stories
                </Button>
              </Group>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* STATS SECTION */}
      <Container size="xl" py={90}>
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl">
          {[
            {
              number: "500+",
              label: "Photos",
            },
            {
              number: "25+",
              label: "Programs",
            },
            {
              number: "12+",
              label: "States Reached",
            },
            {
              number: "50K+",
              label: "Lives Impacted",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                radius="32px"
                p="xl"
                shadow="lg"
                style={{
                  textAlign: "center",
                  background: "white",
                }}
              >
                <Title
                  order={2}
                  fw={900}
                  style={{
                    fontSize: "52px",
                    color: "#f97316",
                  }}
                >
                  {item.number}
                </Title>

                <Text mt={5} fw={600} c="dimmed">
                  {item.label}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/* GALLERY TABS */}

      <Container size="xl" py={20}>
        <Tabs value={activeGallery} onChange={setActiveGallery} radius="xl">
          <Tabs.List grow>
            <Tabs.Tab value="community">Community</Tabs.Tab>

            <Tabs.Tab value="education">Education</Tabs.Tab>

            <Tabs.Tab value="events">Events</Tabs.Tab>

            <Tabs.Tab value="impact">Impact</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Container>

      {/* GALLERY SECTION */}
      <Container size="xl" py={80}>
        <Group justify="space-between" mb={40}>
          <div>
            <Text c="orange" fw={700} tt="uppercase" size="sm" mb={6}>
              Photo Collection
            </Text>

            <Title
              order={2}
              fw={900}
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
              }}
            >
              Featured Gallery
            </Title>
          </div>

          <Badge size="xl" radius="xl" variant="light" color="orange">
            {activeImages.length} Photos
          </Badge>
        </Group>

        {/* GALLERY GRID */}
        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 3, lg: 4 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {activeImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card
                radius="32px"
                p={0}
                shadow="xl"
                onClick={() => openImage(index)}
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: index % 5 === 0 ? 460 : 340,
                  }}
                >
                  {/* IMAGE */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* OVERLAY */}
                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.85) 100%)"
                    opacity={1}
                  />

                  {/* CATEGORY */}
                  <Badge
                    radius="xl"
                    color="orange"
                    variant="filled"
                    style={{
                      position: "absolute",
                      top: 18,
                      left: 18,
                      zIndex: 5,
                    }}
                  >
                    {item.category}
                  </Badge>

                  {/* CONTENT */}
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      right: 20,
                      zIndex: 5,
                    }}
                  >
                    <Title
                      order={3}
                      c="white"
                      style={{
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </Title>

                    <Text mt={8} size="sm" c="rgba(255,255,255,0.82)" lh={1.7}>
                      Inspiring moments captured from our social impact
                      initiatives and community transformation programs.
                    </Text>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/*CTA SECTION*/}

      <Container size="lg" py={100}>
        <Card
          radius="40px"
          p={50}
          shadow="xl"
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            color: "white",
            textAlign: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge size="xl" radius="xl" variant="white" color="dark">
              Join The Movement
            </Badge>

            <Title
              order={2}
              mt={25}
              fw={900}
              style={{
                fontSize: "clamp(32px, 5vw, 58px)",
              }}
            >
              Every Photo Represents
              <br />A Story of Change
            </Title>

            <Text
              mt="xl"
              size="lg"
              maw={700}
              mx="auto"
              style={{
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.9,
              }}
            >
              Become part of a growing movement dedicated to dignity, equality,
              education, and grassroots empowerment.
            </Text>

            <Group justify="center" mt={35}>
              <Button
                component={Link}
                to="/contact"
                size="lg"
                radius="xl"
                variant="white"
                color="dark"
              >
                Become a Volunteer
              </Button>

              <Button
                size="lg"
                radius="xl"
                variant="outline"
                color="white"
                component={Link}
                to="/Support-MSC"
              >
                Donate Now
              </Button>
            </Group>
          </motion.div>
        </Card>
      </Container>
      {/* MODAL */}

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="90%"
        withCloseButton={false}
        overlayProps={{
          blur: 12,
          backgroundOpacity: 0.85,
        }}
        styles={{
          content: {
            background: "transparent",
            boxShadow: "none",
          },
          body: {
            padding: 0,
          },
        }}
      >
        {/* CLOSE */}
        <ActionIcon
          onClick={() => setOpened(false)}
          radius="xl"
          size={48}
          variant="filled"
          color="dark"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 200,
          }}
        >
          <FaTimes size={18} />
        </ActionIcon>

        {/* PREV */}
        <ActionIcon
          onClick={prevImage}
          radius="xl"
          size={52}
          variant="filled"
          color="dark"
          style={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translateY(-50%)",
            zIndex: 200,
          }}
        >
          <FaChevronLeft size={18} />
        </ActionIcon>

        {/* NEXT */}
        <ActionIcon
          onClick={nextImage}
          radius="xl"
          size={52}
          variant="filled"
          color="dark"
          style={{
            position: "absolute",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
            zIndex: 200,
          }}
        >
          <FaChevronRight size={18} />
        </ActionIcon>

        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.35 }}
            style={{
              position: "relative",
            }}
          >
            <img
              src={activeImages[selectedIndex]?.image}
              alt={activeImages[selectedIndex]?.title}
              style={{
                width: "100%",
                maxHeight: "88vh",
                objectFit: "contain",
                borderRadius: "24px",
              }}
            />

            {/* INFO */}
            <Box
              style={{
                position: "absolute",
                left: 30,
                bottom: 30,
                color: "white",
                maxWidth: "650px",
              }}
            >
              <Badge radius="xl" color="orange" variant="filled" mb={15}>
                {activeImages[selectedIndex]?.category}
              </Badge>

              <Title
                order={2}
                style={{
                  fontSize: "clamp(28px, 4vw, 52px)",
                }}
              >
                {activeImages[selectedIndex]?.title}
              </Title>

              <Text
                mt={12}
                size="lg"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.8,
                }}
              >
                Capturing moments of dignity, leadership, education, and social
                transformation from our grassroots work.
              </Text>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Modal>
    </div>
  );
}
