import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './pages/layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './components/ProductDetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          {/* Home page */}
          <Route index element={<Home />} />

          {/* Product detail page */}
          <Route
            path="product/:id"
            element={<ProductDetails />}
          />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;