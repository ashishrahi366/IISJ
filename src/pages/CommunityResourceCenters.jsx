import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconMapPin,
  IconUsers,
  IconBooks,
  IconDeviceDesktop,
} from "@tabler/icons-react";

import CRC1 from "../assets/pages/CRC1.webp";
import CRC2 from "../assets/pages/CRC2.webp";
import wwd2 from "../assets/pages/wwd2.webp";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const centersData = [
  {
    title: "Chennai Community Resource Center",
    location: "Chennai, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    description:
      "A collaborative learning and support space focused on education, leadership, and community empowerment for local youth and families.",
  },
  {
    title: "Madurai Community Resource Center",
    location: "Madurai, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
    description:
      "Providing access to digital learning, mentorship programs, and social development initiatives for underserved communities.",
  },
  {
    title: "Coimbatore Community Resource Center",
    location: "Coimbatore, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
    description:
      "A vibrant local hub where students, volunteers, and community members collaborate through education and skill-building activities.",
  },
  {
    title: "Coimbatore Community Resource Center",
    location: "Coimbatore, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
    description:
      "A vibrant local hub where students, volunteers, and community members collaborate through education and skill-building activities.",
  },
  {
    title: "Coimbatore Community Resource Center",
    location: "Coimbatore, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
    description:
      "A vibrant local hub where students, volunteers, and community members collaborate through education and skill-building activities.",
  },
  {
    title: "Coimbatore Community Resource Center",
    location: "Coimbatore, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
    description:
      "A vibrant local hub where students, volunteers, and community members collaborate through education and skill-building activities.",
  },
];

const features = [
  {
    icon: IconBooks,
    title: "Community Libraries",
    desc: "Access to books, learning resources, and educational materials for children and adults.",
  },
  {
    icon: IconDeviceDesktop,
    title: "Digital Learning",
    desc: "Computers, printers, and modern teaching facilities supporting skill development.",
  },
  {
    icon: IconUsers,
    title: "Community Activities",
    desc: "Safe spaces for cultural programs, workshops, mentoring, and social engagement.",
  },
];

export default function CommunityResourceCenters() {
  return (
    <Box bg="#f8f9fc">
      {/* HERO SECTION */}

      <Box
        py={120}
        pos="relative"
        style={{
          backgroundImage: `url(${CRC1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(5,10,25,0.75) 0%, rgba(8,15,35,0.92) 100%)"
          opacity={1}
          zIndex={1}
        />

        <Container size="xl" pos="relative" style={{ zIndex: 2 }}>
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Text
                  fw={700}
                  c="orange.4"
                  tt="uppercase"
                  mb="md"
                  size="sm"
                  style={{ letterSpacing: 2 }}
                >
                  Community Resource Centers
                </Text>

                <Title
                  order={1}
                  c="white"
                  fw={900}
                  lh={1.1}
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  }}
                >
                  Building Safe Spaces
                  <br />
                  For Growth & Change
                </Title>

                <Text
                  c="gray.2"
                  size="lg"
                  mt="xl"
                  maw={650}
                  style={{ lineHeight: 1.9 }}
                >
                  Our Dr. B. R. Ambedkar Community Resource Centers create
                  inclusive spaces where communities come together to learn,
                  collaborate, and build sustainable solutions for the future.
                </Text>

                <Group mt={40}>
                  <Button
                    size="lg"
                    radius="xl"
                    color="orange"
                    rightSection={<IconArrowRight size={18} />}
                  >
                    Explore Centers
                  </Button>

                  <Button size="lg" radius="xl" variant="white" color="dark">
                    Learn More
                  </Button>
                </Group>
              </MotionBox>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Card
                  radius={30}
                  p="xl"
                  bg="rgba(255,255,255,0.08)"
                  style={{
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Stack gap="xl">
                    {features.map((item, index) => (
                      <Group key={index} align="flex-start" wrap="nowrap">
                        <ThemeIcon
                          size={60}
                          radius="xl"
                          color="orange"
                          variant="light"
                        >
                          <item.icon size={28} />
                        </ThemeIcon>

                        <Box>
                          <Text c="white" fw={700} size="lg">
                            {item.title}
                          </Text>

                          <Text c="gray.3" mt={6} lh={1.8}>
                            {item.desc}
                          </Text>
                        </Box>
                      </Group>
                    ))}
                  </Stack>
                </Card>
              </MotionBox>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 1 */}

      <Container size="xl" py={100}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image src={CRC2} radius={30} h={500} fit="cover" />

              <Text ta="center" mt="md" c="dimmed" fs="italic" size="sm">
                Community members participating in collaborative learning and
                development activities.
              </Text>
            </MotionBox>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text c="orange.6" fw={700} mb="md">
                A Space for Ideas and Work
              </Text>

              <Title order={2} fw={900} size="3rem" mb="xl">
                Empowering Communities Through Shared Spaces
              </Title>

              <Text size="lg" c="dimmed" lh={2}>
                MSC supports the concept of sustainable development by sharing
                experiences with local actors and encouraging the establishment
                of local community centers as spaces for the exchange of ideas.
              </Text>

              <Text size="lg" c="dimmed" lh={2} mt="lg">
                We believe that the capabilities required for transformation
                already exist within the community. However, due to a lack of
                self-esteem and positive opportunities, many community members
                feel discouraged from improving their situation.
              </Text>

              <Text size="lg" c="dimmed" lh={2} mt="lg">
                Our Dr. B. R. Ambedkar Community Resource Centers strengthen
                collaboration, encourage local problem-solving, and provide
                guidance whenever outside support is needed.
              </Text>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>

      {/* DARK SECTION */}

      <Box
        py={110}
        style={{
          background:
            "linear-gradient(135deg, #071120 0%, #0c1b33 50%, #13284a 100%)",
        }}
      >
        <Container size="xl">
          <Grid gutter={70} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Text c="orange.4" fw={700} mb="md">
                  Activities & Organization
                </Text>

                <Title order={2} c="white" fw={900} size="3rem" mb="xl">
                  Creating Long-Term
                  <br />
                  Community Structures
                </Title>

                <Text c="gray.3" size="lg" lh={2}>
                  The centers are equipped with libraries, computers, printers,
                  and teaching materials that support modern education and
                  personal development opportunities.
                </Text>

                <Text c="gray.3" size="lg" lh={2} mt="lg">
                  Through regular activities and functions, the centers also
                  provide spaces where community members can enjoy social life
                  free from daily worries and discrimination.
                </Text>

                <Text c="gray.3" size="lg" lh={2} mt="lg">
                  Our focus lies in autonomy — centers are managed by local
                  committees, while voluntary teachers from the community
                  organize educational support and mentoring activities.
                </Text>
              </MotionBox>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Card
                  radius={32}
                  p={0}
                  bg="transparent"
                  style={{
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Image src={wwd2} h={520} fit="cover" />
                </Card>

                <Text ta="center" mt="md" c="gray.4" fs="italic" size="sm">
                  Students and volunteers engaging in educational and community
                  activities inside the resource center.
                </Text>
              </MotionBox>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* CENTERS SECTION */}

      <Container size="xl" py={110}>
        <Box ta="center" mb={60}>
          <Text c="orange.6" fw={700} mb="sm">
            Our Centers
          </Text>

          <Title order={2} fw={900} size="3rem">
            Community Centers Across Regions
          </Title>

          <Text c="dimmed" size="lg" maw={750} mx="auto" mt="lg">
            Each center acts as a local hub for learning, collaboration,
            leadership, and community-driven transformation.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing={30}>
          {centersData.map((center, index) => (
            <MotionCard
              key={index}
              radius={30}
              p={0}
              shadow="xl"
              bg="white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                overflow: "hidden",
              }}
            >
              <Image src={center.image} h={260} fit="cover" />

              <Box p="xl">
                <Group mb="md">
                  <ThemeIcon
                    color="orange"
                    variant="light"
                    radius="xl"
                    size={42}
                  >
                    <IconMapPin size={20} />
                  </ThemeIcon>

                  <Text fw={700} c="orange.7">
                    {center.location}
                  </Text>
                </Group>

                <Title order={4} fw={800} mb="md">
                  {center.title}
                </Title>

                <Text c="dimmed" lh={1.9}>
                  {center.description}
                </Text>
              </Box>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
