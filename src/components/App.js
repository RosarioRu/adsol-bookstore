import Header from './Header';
import SignIn from "./SignIn";
import BookstoreControl from './BookstoreControl';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<BookstoreControl />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;