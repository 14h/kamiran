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
                    <title>
                        Kamiran Khalil
                    </title>
                </Head>
                <Container>
                    <Header selected='sketches'/>
                    <span className="text-xs ml-6 pl-0 lg:ml-20 lg:pl-2 font-light">
                        sketches
                    </span>
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
