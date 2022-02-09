import { BrowserRouter, Route } from "react-router-dom";
import Header from './Components/Header';
import './App.css';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
