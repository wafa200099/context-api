import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import {ProductProdider} from "./ProductContext"
function App() {
  return (
<ProductProdider>
<Router>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/p" element={<ProductsPage/>}/>
</Routes>
</Router>
</ProductProdider>
  )
}

export default App;
