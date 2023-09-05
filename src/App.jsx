import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage.jsx';
import { Galeria } from './Galeria.jsx'
export function App() {

    return (
        <Router>
         
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
                <Route path="/galeria" element={<Galeria/>} />
            </Routes>

        </Router>

    );
};