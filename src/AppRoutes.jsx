import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Policies from './pages/Policies';
import HireTalents from './pages/HireTalents';
import WebDevelopment from "./pages/services/WebDevelopment";
import SeoServices from "./pages/services/SeoServices";

import Automation from "./pages/services/Automation";
import AiChatbots from "./pages/services/AiChatbots";
import PPCAdvertising from './pages/services/PpcAdvertising';
import PythonDevelopers from './pages/resources/PythonDevelopers';
import LaravelDevelopers from './pages/resources/LaravelDevelopers';
import ReactDevelopers from './pages/resources/ReactDevelopers';
import UiUxDesigners from './pages/resources/UiUxDesigners';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<About />} />
            <Route path="/what-we-do" element={<Services />} />
            <Route path="/what-we-do/web-development" element={<WebDevelopment />} />
            <Route path="/what-we-do/seo-services" element={<SeoServices />} />
            <Route path="/what-we-do/ppc-advertising" element={<PPCAdvertising />} />
            <Route path="/what-we-do/automation" element={<Automation />} />
            <Route path="/what-we-do/ai-chatbots" element={<AiChatbots />} />
            <Route path="/our-work" element={<Portfolio />} />
            <Route path="/our-blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/hiretalents" element={<HireTalents />} />
            <Route path="/hiretalents/python-developers" element={<PythonDevelopers />} />
            <Route path="/hiretalents/laravel-developers" element={<LaravelDevelopers />} />
            <Route path="/hiretalents/react-developers" element={<ReactDevelopers />} />
            <Route path="/hiretalents/uiux-designers" element={<UiUxDesigners />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

