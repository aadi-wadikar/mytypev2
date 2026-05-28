import { Routes, Route } from "react-router-dom";
import urlMappings from "./urlConfig";
import Navbar from "./comps/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";

function App() {
  return (
    <div id="app">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path={urlMappings.home} element={<Home />} />
          <Route path={urlMappings.about} element={<About />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
