import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
   <div>
       <Component {...pageProps} />
   </div>
  );
}

export default MyApp;
