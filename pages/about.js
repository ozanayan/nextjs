import Head from "next/head";
import Layout from "../component/layout";

function HomePage() {
    return (
        <Layout>
             <Head>
                <title>Hakkımda</title>
            </Head>
            <h1>about</h1>
        </Layout>
    );
}

export default HomePage;
