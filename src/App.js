import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/Aboutus";
import Contact from "./components/Contact";
import { Route, Routes} from "react-router-dom";
import Authguard from "./components/Authguard";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Navbar></Navbar>}></Route>
      <Route path="/signin" exact element={<Signup></Signup>}></Route>
      <Route path="/login" exact element={<Login></Login>}></Route>
      <Route path="/products" exact element={<Products></Products>}></Route>
      <Route path="/about" exact element={<About></About>}></Route>
      <Route path="/contact" exact element={<Contact></Contact>}></Route>
    </Routes>
    </>
  );
}

export default App;
