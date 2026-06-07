import {
  FaHandsHelping,
  FaUsers,
  FaGraduationCap,
  FaLightbulb,
  FaBuilding,
  FaFolderOpen,
  FaProjectDiagram,
  FaArrowRight,
  FaPlay,
  FaExternalLinkAlt,
  FaBookOpen,
} from "react-icons/fa";

import member1 from "../assets/pages/founder22.webp";
import member2 from "../assets/home/leader2.webp";
import member3 from "../assets/home/homeHero1.webp";
import member4 from "../assets/home/homeHero1.webp";

export const teamMembers = [
  {
    image: member1,
    name: "Vimal Kumar",
    role: "Founder & Social Justice Leader",
    desc: "Leading grassroots movements for equality, dignity, and the eradication of caste-based discrimination across India.",
    instagram: "#",
    linkedin: "#",
  },
  {
    image: member2,
    name: "Kajori",
    role: "Community Program Coordinator",
    desc: "Working closely with local communities to strengthen education, leadership, and women empowerment initiatives.",
    instagram: "#",
    linkedin: "#",
  },
  {
    image: member3,
    name: "Eric",
    role: "Youth Fellowship Mentor",
    desc: "Supporting young leaders through fellowship programs, leadership training, and community engagement.",
    instagram: "#",
    linkedin: "#",
  },
  {
    image: member4,
    name: "Ashish Kumar",
    role: "Education & Outreach Lead",
    desc: "Managing educational initiatives, partnerships, and awareness programs for marginalized communities.",
    instagram: "#",
    linkedin: "#",
  },
];

import centerImg from "../assets/pages/mscCenter.jpg";
import impactImg from "../assets/MSC/imapcted.webp";
import youthImg from "../assets/pages/FS3.jpg";
import volunteerImg from "../assets/home/infoImg2.webp";
export const statsData = [
  {
    number: "6+",
    label: "Community Centers",
    desc: "Safe learning and empowerment spaces across multiple states.",
    icon: <FaBuilding size={22} />,
    image: centerImg,
    color: "#3b82f6",
  },

  {
    number: "5000+",
    label: "Lives Impacted",
    desc: "Families empowered through education, awareness, and advocacy.",
    icon: <FaUsers size={22} />,
    image: impactImg,
    color: "#f97316",
  },

  {
    number: "100+",
    label: "Youth Empowered",
    desc: "Young leaders trained through fellowship and leadership programs.",
    icon: <FaGraduationCap size={22} />,
    image: youthImg,
    color: "#22c55e",
  },

  {
    number: "250+",
    label: "Volunteers",
    desc: "Dedicated changemakers supporting grassroots transformation.",
    icon: <FaHandsHelping size={22} />,
    image: volunteerImg,
    color: "#a855f7",
  },
];

import LeadershipImg from "../assets/pages/Leadership.svg";
import CommunityImg from "../assets/pages/Community.svg";
import SkillImg from "../assets/pages/Skill.avif";
import EducationImg from "../assets/pages/Education.avif";
export const programs = [
  {
    title: "Leadership Workshops",
    image: LeadershipImg,
    icon: <FaUsers />,
    desc: "Interactive leadership sessions designed to build confidence, public speaking, community organizing, and grassroots advocacy skills.",
  },

  {
    title: "Community Projects",
    image: CommunityImg,
    icon: <FaHandsHelping />,
    desc: "Fellows lead impactful projects in their own communities focused on education, awareness, dignity, and social transformation.",
  },

  {
    title: "Skill Development",
    image: SkillImg,
    icon: <FaLightbulb />,
    desc: "Participants receive mentoring, digital literacy training, communication support, and exposure to social innovation models.",
  },

  {
    title: "Educational Support",
    image: EducationImg,
    icon: <FaGraduationCap />,
    desc: "Selected fellows receive guidance, networking opportunities, and financial assistance to continue their learning journey.",
  },
];

import infoImg from "../assets/home/infoImg1.webp";
import projectImg from "../assets/home/infoImg2.webp";
import involvedImg from "../assets/home/infoImg3.jpeg";
export const homeQuickAccessCard = [
  {
    title: "Information",
    description:
      "Explore our initiatives, stories, reports, research, and community-driven impact across India.",
    image: infoImg,
    icon: <FaFolderOpen size={24} />,
    link: "/MSC-Detail",
    color: "#2563eb",
  },
  {
    title: "Our Projects",
    description:
      "Discover transformative programs focused on education, leadership, equality, and empowerment.",
    image: projectImg,
    icon: <FaProjectDiagram size={24} />,
    link: "/Our-Projects",
    color: "#f59e0b",
  },
  {
    title: "Get Involved",
    description:
      "Join us as a volunteer, partner, donor, or advocate to create meaningful social change.",
    image: involvedImg,
    icon: <FaHandsHelping size={24} />,
    link: "/contact",
    color: "#22c55e",
  },
];

import slide1 from "../assets/home/heroHome2.webp"
import slide2 from "../assets/home/heroHome2.webp";
import slide3 from "../assets/home/heroHome3.webp";
import slide4 from "../assets/home/heroHome4.webp";
import slide5 from "../assets/home/heroHome5.webp";
import slide6 from "../assets/home/homeHero6.jpeg";
export const homeHeroSlides = [
  {
    image: slide1,
    title: "Empowering Leaders From The Scavenger Community",
    text: "Through fellowship, mentorship, and collective action, AVRNA is nurturing a new generation of leaders dedicated to equality, dignity, and social transformation.",
  },

  {
    image: slide2,
    title: "Building Futures Through Fellows For Equality",
    text: "Our fellowship program equips young changemakers with leadership skills, community organizing experience, and the confidence to create lasting impact.",
  },

  {
    image: slide3,
    title: "Voices Of Change, Stories Of Resilience",
    text: "From grassroots communities to national platforms, young leaders are raising their voices and challenging barriers through education and advocacy.",
  },

  {
    image: slide4,
    title: "Strengthening Communities Through Collective Leadership",
    text: "AVRNA supports community-driven initiatives that foster education, social justice, and opportunities for future generations.",
  },

  {
    image: slide5,
    title: "Creating Opportunities Beyond Generational Barriers",
    text: "By connecting youth with mentorship, networks, and resources, we help unlock pathways to leadership and sustainable development.",
  },

  {
    image: slide6,
    title: "Together Towards Equality And Human Dignity",
    text: "Every fellowship journey contributes to a stronger movement working towards inclusion, dignity, and equal opportunities for all.",
  },
];

import bbcImg from "../assets/home/BBC2.jpg";
import yourStoryImg from "../assets/home/Yourstory.png";
import bigStoryImg from "../assets/home/BigStory.jpg";
import AZU from "../assets/home/AZU.webp";
export const homeMediaData = [
  {
    title: "BBC",
    subtitle: "International Coverage",
    image: bbcImg,
    link: "https://www.bbc.co.uk/programmes/p04jlc9w",
    icon: <FaExternalLinkAlt size={15} />,
    color: "#f97316",
    textColor: "#ffffff",
  },

  {
    title: "YourStory",
    subtitle: "Founder Story",
    image: yourStoryImg,
    link: "https://yourstory.com/2015/09/vimal-kumar",
    icon: <FaArrowRight size={15} />,
    color: "#3b82f6",
    textColor: "#3c9efa",
  },

  {
    title: "Big Story",
    subtitle: "Video Documentary",
    image: bigStoryImg,
    link: "https://www.youtube.com/watch?v=GF44g6sxqy0",
    icon: <FaPlay size={15} />,
    color: "#ef4444",
    textColor: "#eb1515",
  },
  {
    title: "Arizona State University",
    subtitle: "National Security Lab",
    image: AZU,
    link: "https://ldns.asu.edu/about/vimal-kumar",
    icon: <FaPlay size={15} />,
    color: "#3b0614",
    textColor: "#3b0614",
  },
];

export const homeServicesSectionData = [
  {
    icon: <FaBookOpen size={28} />,
    title: "International Institute for Social Justice",
    short: "Education • Leadership • Research",
    desc: "IISJ empowers marginalized communities through leadership development, fellowships, research, education, and grassroots social justice initiatives that promote equality and dignity.",
    path: "/IISJ",
    gradient: "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
  },

  {
    icon: <FaHandsHelping size={28} />,
    title: "Movement for Scavenger Community",
    short: "Grassroots • Equality • Empowerment",
    desc: "MSC works to eradicate manual scavenging and strengthen sanitation worker communities through education, livelihood support, leadership programs, and community resource centers.",
    path: "/MSC-Detail",
    gradient: "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
  },

  {
    icon: <FaUsers size={28} />,
    title: "Avarna Education & Training Foundation",
    short: "Opportunity • Inclusion • Change",
    desc: "AVARNA supports Dalit, tribal, and marginalized communities through entrepreneurship, policy advocacy, education, and social empowerment initiatives.",
    path: "/Avarna",
    gradient: "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
  },
];

import leader1 from "../assets/home/Vimalpic2.jpg";
import leader2 from "../assets/home/leader2.webp";
import leader3 from "../assets/home/leader3.webp";
export const leaderSectionLeadersData = [
  {
    name: "Dr. Vimal Kumar",
    designation: "Founder & CEO",
    image: leader1,
    description:
      "A passionate social justice leader working to eradicate caste-based discrimination and empower marginalized communities through education, dignity, and leadership.",
  },

  {
    name: "Kajori",
    designation: "Director – Community Programs",
    image: leader2,
    description:
      "Leads grassroots initiatives focused on women empowerment, education access, leadership training, and sustainable community transformation.",
  },

  {
    name: "Eric",
    designation: "Head of Youth Leadership",
    image: leader3,
    description:
      "Works closely with young changemakers to build inclusive leadership networks, fellowship programs, and community-driven innovation projects.",
  },
];
