import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import '../styles/app.css'

// ---------------------------------------------
export default class CustomDocument extends Document {
    render () {
        return (<html lang='en-US'>

            <Head>
            </Head>
            <body className="font-sans relative w-full h-full m-0 p-0 font-normal antialiased tracking-normal text-neutral-900 bg-neutral-900">
            <Main />
            <NextScript />
            </body>
        </html>)
    }
    }