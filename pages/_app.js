import '../styles/index.css';
import SimpleReactLightbox from 'simple-react-lightbox'
import Footer from "../components/footer";

export default function MyApp({Component, pageProps}) {
    return (
        <SimpleReactLightbox>
            <Component {...pageProps} />
            <Footer />
        </SimpleReactLightbox>
    )
}
