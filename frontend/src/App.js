import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import { Outlet } from "react-router-dom";
import Headers from "./component/Headers";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Headers />
      <main className=" ">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}
export default App;
