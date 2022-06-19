import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import OCMenu from "./components/OffCanvasMenu";
import Header from "./components/Header";

// import { useSelector } from "react-redux";

function App() {
  return (
    <main>
      <Header />
      <OCMenu />
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
