import navStyles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={`${navStyles.container} flexRowCenter`}>
        <section className={navStyles.logo}>mytype</section>
        <section className={navStyles.menu}>account</section>
      </div>
    </nav>
  );
}

export default Navbar;
