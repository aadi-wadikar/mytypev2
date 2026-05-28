import { Link } from "react-router-dom";
import navStyles from "../styles/Navbar.module.css";
import urlMappings from "../urlConfig";

function Navbar() {
  return (
    <nav>
      <div className={`${navStyles.container} flexRowCenter`}>
        <section className={navStyles.logo}>
          <Link to={urlMappings.home}>mytype</Link>
        </section>
        <section className={navStyles.menu}>account</section>
      </div>
    </nav>
  );
}

export default Navbar;
