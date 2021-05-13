import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import React from 'react';
import Header from "../components/header";
import {get_assets} from "../lib/api";
import Slider from "../components/slider";

export default function Index({assets}) {

    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head>
                    <title>
                        Kamiran Khalil
                    </title>
                </Head>
                {/*<Container>*/}
                {/*    <Header/>*/}
                {/*    <Slider*/}
                {/*        slides={assets}*/}
                {/*    />*/}
                {/*</Container>*/}
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const assets = await get_assets();

    return {
        props: {
            assets
        },
    }
}
