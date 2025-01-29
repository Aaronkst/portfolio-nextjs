import {
  IconBrandAdobe,
  IconBrandFigma,
  IconBrandGit,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandThreejs,
  IconCloud,
  IconDatabase,
} from "@tabler/icons-react";
import SkillCard, { SkillCardProps } from "../../components/SkillCard";
import { Container, Group } from "@mantine/core";
import SectionTitle from "../../components/SectionTitle";

const skills: SkillCardProps[] = [
  {
    icon: <IconBrandNodejs size={64} />,
    name: "Node JS",
    rating: 90,
  },
  {
    icon: <IconBrandReact size={64} />,
    name: "React JS",
    rating: 90,
  },
  {
    icon: <IconBrandPython size={64} />,
    name: "Python",
    rating: 50,
  },
  {
    icon: <IconBrandMongodb size={64} />,
    name: "Mongodb",
    rating: 90,
  },
  {
    icon: <IconBrandMysql size={64} />,
    name: "Mysql",
    rating: 90,
  },
  {
    icon: <IconDatabase size={64} />,
    name: "Postgres",
    rating: 90,
  },
  {
    icon: <IconBrandThreejs size={64} />,
    name: "React Three Fiber",
    rating: 90,
  },
  {
    icon: <IconBrandGit size={64} />,
    name: "Version Control",
    rating: 90,
  },
  {
    icon: <IconBrandFigma size={64} />,
    name: "UI / UX",
    rating: 40,
  },
];

export default function Skills() {
  return (
    <Container>
      <SectionTitle title="my skills" />
      <Group position="center" my={16}>
        {skills.map((skill, i) => (
          <SkillCard {...skill} key={`skill-${i}`} />
        ))}
      </Group>
    </Container>
  );
}
