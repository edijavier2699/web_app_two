import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./privacyPolicy";
import TermsOfService from "./termsOfServices";

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/" />
                <Route element={<PrivacyPolicy />} path="/privacy-policy" />
                <Route element={<TermsOfService />} path="/terms-of-services" />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
