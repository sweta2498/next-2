import Navbar from "./Navbar/Navbar";
import TopPannel from "./TopPannel/TopPannel";

// import dynamic from "next/dynamic";

// const DynamicComponent = dynamic(() => import("./Navbar/Navbar"), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// });

import { useTheme, useMediaQuery } from "@mui/material";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!isMobile && <TopPannel />}
      {/* <DynamicComponent /> */}
      <Navbar />
      {isMobile && <TopPannel />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
