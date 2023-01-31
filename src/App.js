import { Route, Routes } from "react-router-dom";
import { Header, Footer, Error } from "./container/index";
import { Home } from "./Website/pages/index";
import { Login, Registor } from "./Auth/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<Registor />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
