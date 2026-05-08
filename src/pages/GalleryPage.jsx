import React, { useState } from "react";
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
} from "@mantine/core";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function GalleryPage() {
  const [opened, setOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryImages = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    title: `Community Impact ${index + 1}`,
    image: `https://picsum.photos/900/1200?random=${index + 1}`,
  }));

  // OPEN MODAL
  const openImage = (index) => {
    setSelectedIndex(index);
    setOpened(true);
  };

  // NEXT IMAGE
  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS IMAGE
  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "80px 0",
      }}
    >
      {/* MODAL */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="90%"
        withCloseButton={false}
        overlayProps={{
          blur: 12,
          backgroundOpacity: 0.8,
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
        {/* CLOSE BUTTON */}
        <ActionIcon
          onClick={() => setOpened(false)}
          radius="xl"
          size={45}
          variant="filled"
          color="dark"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 100,
          }}
        >
          <FaTimes size={18} />
        </ActionIcon>

        {/* PREVIOUS BUTTON */}
        <ActionIcon
          onClick={prevImage}
          radius="xl"
          size={50}
          variant="filled"
          color="dark"
          style={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translateY(-50%)",
            zIndex: 100,
          }}
        >
          <FaChevronLeft size={18} />
        </ActionIcon>

        {/* NEXT BUTTON */}
        <ActionIcon
          onClick={nextImage}
          radius="xl"
          size={50}
          variant="filled"
          color="dark"
          style={{
            position: "absolute",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
            zIndex: 100,
          }}
        >
          <FaChevronRight size={18} />
        </ActionIcon>

        {/* IMAGE SLIDER */}
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
              src={galleryImages[selectedIndex].image}
              alt={galleryImages[selectedIndex].title}
              style={{
                width: "100%",
                maxHeight: "88vh",
                objectFit: "contain",
                borderRadius: "22px",
              }}
            />

            {/* IMAGE INFO */}
            <div
              style={{
                position: "absolute",
                left: 30,
                bottom: 30,
                color: "white",
                zIndex: 10,
                maxWidth: "600px",
              }}
            >
              <Title order={2}>
                {galleryImages[selectedIndex].title}
              </Title>

              <Text
                mt={8}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                }}
              >
                Empowering communities through leadership, education,
                grassroots initiatives, and social transformation.
              </Text>
            </div>
          </motion.div>
        </AnimatePresence>
      </Modal>

      <Container size="xl">
        {/* PAGE HEADER */}
        <Stack align="center" mb={60}>
          <Title
            order={1}
            ta="center"
            style={{
              fontSize: "48px",
              fontWeight: 800,
            }}
          >
            Our Gallery
          </Title>

          <Text
            ta="center"
            c="dimmed"
            maw={800}
            size="lg"
            style={{
              lineHeight: 1.9,
            }}
          >
            Explore moments of empowerment, leadership, education,
            and community transformation through our initiatives.
          </Text>
        </Stack>

        {/* GALLERY GRID */}
        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 3, lg: 4 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card
                radius="28px"
                p={0}
                shadow="lg"
                onClick={() => openImage(index)}
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "white",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: index % 5 === 0 ? "420px" : "320px",
                  }}
                >
                  {/* IMAGE */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* DARK OVERLAY */}
                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)"
                    opacity={1}
                  />

                  {/* TEXT */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      right: 20,
                      color: "white",
                      zIndex: 2,
                    }}
                  >
                    <Title order={4}>
                      {item.title}
                    </Title>

                    <Text
                      size="sm"
                      mt={6}
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.6,
                      }}
                    >
                      Community development and empowerment initiatives.
                    </Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>

        {/* OPTIONAL IMAGE COUNTER */}
        <Group justify="center" mt={50}>
          <Text c="dimmed">
            Showing {galleryImages.length} gallery items
          </Text>
        </Group>
      </Container>
    </div>
  );
}