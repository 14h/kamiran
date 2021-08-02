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
                    <span className="text-xs ml-6 pl-0 lg:ml-20 lg:pl-2 font-light">
                        paintings
                    </span>
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
