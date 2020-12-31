import Container from '../../components/container';
import Layout from '../../components/layout';
import Head from 'next/head';
import Header from "../../components/header";
import {get_media} from "../../lib/api";
import React from "react";
import Grid from "../../components/grid";


export default function Media({projects}) {
    return (
        <>
            <Layout>
                <Head>
                    <title>
                        Kamiran Khalil
                    </title>
                </Head>
                <Container>
                    <Header selected='media' />
                    <Grid projects={projects}/>
                    <hr/>
                    <h2 className="p-8">MIT ILLUSION , Berlin, 2019 : <a
                        className="gray-400 border-b-2 border-solid border-gray-400 p-2" href="https://www.scribd.com/embeds/399824437/content?start_page=1&view_mode=scroll&access_key=key-6oGg3zGeBZfuimXRTMAZ"> Catalog</a>
                    </h2>
                    <hr/>
                    <h2 className="p-8">1 x 1 – KUNST IM QUADRAT, 2016 : <a
                        className="gray-400 border-b-2 border-solid border-gray-400 p-2" href="https://www.vietinghoff-art.de/wp-content/uploads/2016/01/RZ_1x1_Katalog_Pfade_endLOW.pdf"> Catalog</a>
                    </h2>
                    <hr/>
                    <h2 className="p-8">Artscoops Auction , Beirut, 2016 : <a
                        className="gray-400 border-b-2 border-solid border-gray-400 p-2" href="https://www.scribd.com/embeds/379471297/content?start_page=1&view_mode=scroll&access_key=key-6oGg3zGeBZfuimXRTMAZ"> Catalog</a>
                    </h2>
                    <hr/>
                    <h2 className="p-8">" Syrian Aesthetical Scream" in Konsthallen Sandviken / Sweden 2018 : <a
                        className="gray-400 border-b-2 border-solid border-gray-400 p-2" href="https://www.scribd.com/embeds/380579365/content?start_page=1&view_mode=scroll&access_key=key-pfZd1a7HVV35yAMOCGeq"> Catalog</a>
                    </h2>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const projects = await get_media();

    return {
        props: {
            projects
        },
    }
}
