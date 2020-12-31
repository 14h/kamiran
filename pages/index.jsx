import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';

export default function Index() {

    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head>
                    <title>
                        Kamiran Khalil
                    </title>
                </Head>
                <Container>
                </Container>
            </Layout>
        </div>
    )
}