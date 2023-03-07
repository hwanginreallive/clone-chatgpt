import { Route, Routes } from 'react-router-dom';
import NewChat from '../page/NewChat';
const Router = () => {
    return (
        <Routes>
            <Route path="/chat/:id" element={<NewChat />} />
            <Route path="/" element={<NewChat />} />
        </Routes>
    );
};

export default Router;
