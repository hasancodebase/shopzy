// Layout is used to wrap all pages with Header and Footer

import Header from "./Header";
import Footer from "./Footer";

// children = the page content that will be injected between header and footer
function Layout({ children }) {
  return (
    <>
      {/* Top Navbar */}
      <Header />

      {/* Main page content */}
      <main style={{ padding: "20px" }}>
        {children}
      </main>

      {/* Bottom Footer */}
      <Footer />
    </>
  );
}

export default Layout;
