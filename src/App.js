
import { Route, Routes } from "react-router-dom";
import Main from './Pages/Main';
import Categories from './Pages/Categories';
import Questions from './Views/Questions';
import Answers from './Views/Answers';
import Score from './Views/Score';
import Nav from './Components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome To Jeapordy!</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/> 
				<Route path="/categories" element={<Categories />}/>
				<Route path="/questions" element={<Questions />}/>
        <Route path="/answers" element={<Answers />}/>
        <Route path="/score" element={<Score />}/>
        <Route path="/questions/:id" element={<Questions/>}/>
        <Route path="/answers/:id" element={<Answers/>}/>
      </Routes>
    </div>
  );
}

export default App;
