import Head from 'next/head'

export default function Meta() {
    return (
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119401934-1"/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
        
                        gtag('config', 'UA-119401934-1');
                    `
            }}
          />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color="#000000"
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#000"/>
            <link rel="alternate" type="application/rss+xml" href="/feed.xml"/>
        <meta name="title" content="Artist Kamiran Khalil"/>
            <meta
                name="description"
                content={`Kamiran Khalil Portfolio website.`}
            />
            {/*<meta property="og:image" content={HOME_OG_IMAGE_URL}/>*/}
        </Head>
    )
}
