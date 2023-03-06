import { Route, Routes } from 'react-router-dom';
import Chatted from '../page/Chatted';
import NewChat from '../page/NewChat';
const Router = () => {
    return (
        <Routes>
            <Route path="/chat/:id" element={<Chatted />} />
            <Route path="/chat" element={<NewChat />} />
        </Routes>
    );
};

export default Router;
