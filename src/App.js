import Header from "./Header/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "../src/pages/Product";
import Cart from "./Header/Cart";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
          <Route path="/Cart" component={Cart} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
