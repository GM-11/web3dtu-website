import PropTypes from "prop-types";
import Navbar from "./NavBar";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
