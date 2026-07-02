import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Portfolio1 from './pages/Portfolio1';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import Policies from './pages/Policies';
import HireTalents from './pages/HireTalents';
import WebDevelopment from "./pages/services/WebDevelopment";
import SeoServices from "./pages/services/SeoServices";
import DigitalEngagement from './pages/DigitalEngagement';


import Automation from "./pages/services/Automation";
import AiChatbots from "./pages/services/AiChatbots";
import PPCAdvertising from './pages/services/PpcAdvertising';
import PythonDevelopers from './pages/resources/PythonDevelopers';
import LaravelDevelopers from './pages/resources/LaravelDevelopers';
import ReactDevelopers from './pages/resources/ReactDevelopers';
import UiUxDesigners from './pages/resources/UiUxDesigners';
import UAEServices from './pages/services/UAEServices';
import ReactDev from './pages/uae/ReactDev';
import PythonDev from './pages/uae/PythonDev';
import LaravelDev from './pages/uae/LaravelDev';
import MobileDev from './pages/uae/MobileDev';
import CloudEng from './pages/uae/CloudEng';
import UiUxDesign from './pages/uae/UiUxDesign';
import UaeWebDev from './pages/uaeServices/UaeWebDev';
import UaeSeo from './pages/uaeServices/UaeSeo';
import UaePpc from './pages/uaeServices/UaePpc';
import UaeAutomation from './pages/uaeServices/UaeAutomaton';
import UaeChatbot from './pages/uaeServices/UaeChatbot';
import SocialMediaHandling from "./pages/Sm";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uaeservices" element={<UAEServices />} />
            <Route path="/uaeservices/uae-react-dev" element={<ReactDev/>}/>
            <Route path="/uaeservices/uae-python-dev" element={<PythonDev/>}/>
            <Route path="/uaeservices/uae-laravel-dev" element={<LaravelDev/>}/>
            <Route path="/uaeservices/uae-mobile-dev" element={<MobileDev/>}/>
            <Route path="/uaeservices/uae-cloud-eng" element={<CloudEng/>}/>
            <Route path="/uaeservices/uae-uiux-design" element={<UiUxDesign/>}/>
            <Route path="/uaeservices/uae-web-dev" element={<UaeWebDev/>}/>
            <Route path="/uaeservices/uae-seo" element={<UaeSeo/>}/>
            <Route path="/uaeservices/uae-ppc" element={<UaePpc/>}/>
            <Route path="/uaeservices/uae-automation" element={<UaeAutomation/>}/>
            <Route path="/uaeservices/uae-chatbots" element={<UaeChatbot/>}/>
            <Route path="/who-we-are" element={<About />} />
            <Route path="/what-we-do" element={<Services />} />
            <Route path="/what-we-do/web-development" element={<WebDevelopment />} />
            <Route path="/what-we-do/seo-services" element={<SeoServices />} />
            <Route path="/what-we-do/ppc-advertising" element={<PPCAdvertising />} />
            <Route path="/what-we-do/automation" element={<Automation />} />
            
            <Route path="/what-we-do/ai-chatbots" element={<AiChatbots />} />
            <Route path="/our-work" element={<Portfolio />} />
            <Route path="/portfolio1" element={<Portfolio1 />} />
            <Route path="/our-work/:projectId" element={<ProjectDetail />} />
            <Route path="/our-blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/hiretalents" element={<HireTalents />} />
            <Route path="/hiretalents/python-developers" element={<PythonDevelopers />} />
            <Route path="/hiretalents/laravel-developers" element={<LaravelDevelopers />} />
            <Route path="/hiretalents/react-developers" element={<ReactDevelopers />} />
            <Route path="/hiretalents/uiux-designers" element={<UiUxDesigners />} />
            <Route path="/digital-engagement" element={<DigitalEngagement  />} />
            <Route path="/what-we-do/social-media-handling" element={<SocialMediaHandling />} />

            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    );
}

