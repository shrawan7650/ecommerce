/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}
    
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
