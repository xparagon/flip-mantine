// pages/ufo.tsx
import { Button, Card, Center, Container, Grid, Space } from '@mantine/core';
import Link from 'next/link';

import React, { FC } from 'react';

const Match: FC = () => {
    return (
        <Container my="md">
            <Grid>
                <Grid.Col xs={12}>
                    <Center>
                        <Link href="/" passHref>
                            <Button component="a">Home</Button>
                        </Link>
                    </Center>
                    <Space h="md" />
                    <Card shadow="md" radius="md" withBorder>
                        <h1>Match Page</h1>
                        <p>This is the Match page content.</p>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Match;
