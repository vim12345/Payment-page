import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const productList = [
    {
      price: 99999,
      name: "IPhone 105 Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 105 Max",
      quantity: 0,
    },
  ];
  return (
    <>
      <Navbar />
       <main className="container mt-5">
      <ProductList productList={productList} />
      </main>
    </>
  );
}

export default App;
