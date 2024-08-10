
import Header from "./components/UI/header";
import Footer from "./components/UI/footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
function App() {
  return(
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App;
