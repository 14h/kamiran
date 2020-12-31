import Container from '../../components/container';
import Layout from '../../components/layout';
import Head from 'next/head';
import Header from "../../components/header";
import {get_sketches} from "../../lib/api";
import React from "react";
import Grid from "../../components/grid";


export default function Sketches({projects}) {
    return (
        <>
            <Layout>
                <Head>
                </Head>
                <Container>
                    <Header selected='sketches'/>
                    <Grid projects={projects}/>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const projects = await get_sketches();

    return {
        props: {
            projects
        },
    }
}
