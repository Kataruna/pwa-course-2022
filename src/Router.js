import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Login from './Login';
import Minigame from './Minigame';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/minigame" element={<Minigame/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;