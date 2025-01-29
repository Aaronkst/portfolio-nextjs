import { Anchor, AspectRatio, Box, Card, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type DataCardProps = {
  src: string;
  alt: string;
  title: string;
  href: string;
  summary: string;
};

export default function DataCard({
  src,
  alt,
  title,
  href,
  summary,
}: DataCardProps) {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      w={isMobile ? "100%" : undefined}
    >
      <Card.Section>
        <Anchor href={href} target="_blank">
          <AspectRatio ratio={1}>
            <Image src={src} alt={alt} fit="contain" />
          </AspectRatio>
        </Anchor>
      </Card.Section>

      <Box my={16}>
        <Anchor size="lg" href={href} weight={700} target="_blank">
          {title}
        </Anchor>
      </Box>

      <Text size="sm" color="dimmed">
        {summary}
      </Text>
    </Card>
  );
}
