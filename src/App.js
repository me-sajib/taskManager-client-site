import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import EditTask from "./components/AllTask/EditTask";
import CompleteTask from "./components/CompleteTask/CompleteTask";
import Home from "./components/Home/Home";
import AllTask from "./components/AllTask/AllTask";
import Calender from "./components/Calender/Calender";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<AllTask />} />
        <Route path="/complete" element={<CompleteTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/calendar" element={<Calender />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
