import "../App.css";
import { Suspense } from "react";
import { HomeScreen } from "../Screens/HomeScreen";
import logo from "../assets/images/logo.png";

function App() {
  return (
    <>
      <HomeScreen />
    </>
  );
}

const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

export default function WrappedApp() {
  return (
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  );
}
