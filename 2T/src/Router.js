import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import Chat from './Chat';
import Chathistory from './Chathistory';
import { useAuthStateContext, LoginComponent } from './context/FirebaseAuthContextProvider';
import ChatStateProvider from "./context/FirebaseChatContextProvider";

function Router(){
    const { authState } = useAuthStateContext();

    if (authState && authState.state === "AUTHENTICATION_LOADING") {
        return <div>Loading...</div>;
      }
      else if (authState && authState.state === "AUTHENTICATED") {
        return (
            <ChatStateProvider self={authState.user}>
              <BrowserRouter>
                <Routes>
                  <Route path="/chat/:uid" element={<Chat />}/>
                  <Route path="/main" element={<Profile />}/>
                  <Route path="/chathistory" element={<Chathistory />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/" element={<Login />}/>
                </Routes>
              </BrowserRouter>
            </ChatStateProvider>
          );
      } else {
        return <LoginComponent />;
      }
}

export default Router;