import { Container, Divider, Group, Text } from "@mantine/core";
import DataCard from "../../components/Card";
import SectionTitle from "../../components/SectionTitle";
import { useMediaQuery } from "@mantine/hooks";

export default function Featured() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Container>
      <SectionTitle title="my featured works" />
      <Group grow={!isMobile} align="stretch" my={16}>
        <DataCard
          src="/assets/img/works/tamlai-logo.jpg"
          alt="tamlai logo"
          title="Tamlai"
          href="https://www.tamlai.com"
          summary="A product-directory for cambodia. Shows the trending products, reviews and price comparisons between stores."
        />
        <DataCard
          src="/assets/img/works/easy-logo.png"
          alt="easy logo"
          title="Easy Estate"
          href="https://www.easyestatemm.com/mm"
          summary="A Myanmar based real-estate website. Supports individual and agent user types."
        />
        <DataCard
          src="/assets/img/works/dh-logo.png"
          alt="dh logo"
          title="Degitic House"
          href="https://www.degitichouse.com"
          summary="A start-up software house collaborated with co-workers."
        />
      </Group>
    </Container>
  );
}
