import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import React from 'react';
import Header from "../components/header";
import {get_assets, get_main} from "../lib/api";
import Slider from "../components/slider";

export default function Index({main}) {
    if (!main) {
        return null;
    }

    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head>
                    <title>
                        Kamiran Khalil
                    </title>
                </Head>
                <Container>
                    <Header/>
                    <Slider
                        slides={main}
                    />
                </Container>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const main = await get_main();

    return {
        props: {
            main
        },
    }
}
