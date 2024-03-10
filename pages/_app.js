import Layout from "../component/Layout";
import React, { useEffect } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import "../styles/globals.css";
import axios from "axios";
function MyApp({ Component, pageProps }) {
  const theme = createTheme({});
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_COINMCAPS;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
