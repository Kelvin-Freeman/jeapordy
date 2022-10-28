
import { Route, Routes } from "react-router-dom";
import Main from './Pages/Main';
import Categories from './Pages/Categories';
import Questions from './Pages/Questions';
import Score from './Pages/Score';
import Nav from './Components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/> 
				<Route path="/categories" element={<Categories />}/>
				<Route path="/questions" element={<Questions />}/>
        <Route path="/score" element={<Score />}/>
        <Route path="/questions/:question" element={<Questions/>}/>
      </Routes>
    </div>
  );
}

export default App;
