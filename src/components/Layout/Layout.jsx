import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
