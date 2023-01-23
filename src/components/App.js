import Header from './Header';
import SignIn from "./SignIn";
import Cart from "./Cart";
import BookstoreControl from './BookstoreControl';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* div below wraps all content into a stylable container that overrides bootstrap */}
      {/* <div style={{backgroundColor: "rgb(220, 228, 220)", width: "80%", margin: "auto"}}> */}
      <div style={{backgroundColor: "rgb(229, 234, 229)"}}> 
    


      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<BookstoreControl />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;