// pages/reports.tsx
import { Button, Card, Center, Container, Grid, Space } from '@mantine/core';
import Link from 'next/link';
import React, { FC } from 'react';

const Flip: FC = () => {
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
                        <h1>Flip Page</h1>
                        <p>This is the Flip page content.</p>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Flip;
