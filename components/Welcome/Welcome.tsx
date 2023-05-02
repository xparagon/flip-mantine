import { Title, Text, Anchor, Card, Button, Center } from '@mantine/core';
import useStyles from './Welcome.styles';
import { Grid, Skeleton, Container } from '@mantine/core';
import Link from 'next/link';

const child = <Skeleton height={140} radius="md" animate={false} />;

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        SNAKK MED MEG
      </Title>
      <Container my="md">
        <Grid>
          <Grid.Col xs={6}>
            <Card shadow="md" radius="md" withBorder>
              <Center>

                <Link href="/flip" passHref>
                  <Button component="a">Flip</Button>
                </Link>
              </Center>
            </Card>
          </Grid.Col>
          <Grid.Col xs={6}>
            <Card shadow="md" radius="md" withBorder>
              <Center>

                <Link href="/match" passHref>
                  <Button component="a">Match</Button>
                </Link>
              </Center>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
