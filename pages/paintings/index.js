import Container from '../../components/container';
import Layout from '../../components/layout';
import Head from 'next/head';
import Header from "../../components/header";
import {get_paintings} from "../../lib/api";
import React from "react";
import Grid from "../../components/grid";


export default function Projects({projects}) {
    return (
        <>
            <Layout>
                <Head>
                    <title>
                        Kamiran Khalil
                    </title>
                </Head>
                <Container>
                    <Header selected='paintings' />
                    <Grid projects={projects}/>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const projects = await get_paintings()
    return {
        props: {
            projects
        },
    }
}
