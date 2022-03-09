import '../components/styles.css';
import type {AppProps} from 'next/app'

const _app = ({Component, pageProps}: AppProps) => <Component {...pageProps} />

export default _app;
