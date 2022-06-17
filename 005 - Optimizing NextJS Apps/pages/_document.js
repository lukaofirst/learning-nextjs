import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    {/* You can add real DOM elements here, to work, for example, with React Portals */}
                    <div id='overlays'></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
