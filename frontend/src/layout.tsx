import App from "./views/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/privacyPolicy";
import TermsOfService from "./components/termsOfServices";
import { Blog } from "./views/blog";
import { LoginPage } from "./views/loginPage";
import { NotFound } from "./components/notFound";
import { BlogOverview } from "./components/blogOverview";
import DashboardLayout from "./dashboardLayout";
import ProtectedRoute from "./components/privateRoute";
import { ArticleList } from "./components/blog/articleList";
import CreateArticle from "./components/createArticleForm";
import { SingleArticleView } from "./components/singleArticleView";
import { Toaster } from "./components/ui/toaster";
import MainLayout from "./mainLayout";
import { FAQPage } from "./views/faq";
import { FaqSinglePage } from "./views/faqSinglePage";
import { NewsletterEmailFormFlow } from "./forms/newsletterEmailForm";
import { RequestInvitation } from "./views/requestInvitation";
import { LegalNotices } from "./components/legalNotices";

const Layout = () => {

    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route element={<App />} path="/" />
                    <Route element={<Blog />} path="/blog/" />
                    <Route element={<FAQPage />} path="/faq/"/>
                    <Route path="/faq-category/:id/" element={<FaqSinglePage />} />
                    <Route element={<LoginPage />} path="/blog-admin/" />
                    <Route element={<PrivacyPolicy />} path="/privacy-policy/" />
                    <Route element={<LegalNotices />} path="/legal-notices/" />
                    <Route element={<TermsOfService />} path="/terms-of-services/" />
                    <Route path="blog/article/:id/" element={<SingleArticleView/>} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route element={<RequestInvitation />} path="/request-invitation/"/>
  
                <Route element={<DashboardLayout />}>
                    <Route
                        path="dashboard/"
                        element={
                            <ProtectedRoute roleRequired="blog-admin" element={<BlogOverview />} />
                        }
                    />
                    <Route
                        path="articles-list/"
                        element={
                            <ProtectedRoute roleRequired="blog-admin" element={<ArticleList />} />
                        }
                        />
                        <Route
                        path="create-article/"
                        element={
                            <ProtectedRoute roleRequired="blog-admin" element={<CreateArticle onClose={function (): void {
                                throw new Error("Function not implemented here.");
                            } } />} />
                        }
                        />
                    <Route
                        path="email-create/"
                        element={
                            <ProtectedRoute roleRequired="blog-admin" element={<NewsletterEmailFormFlow />} />
                        }
                        />
                </Route>

            </Routes>
            <Routes>
                
            </Routes>
        </BrowserRouter>
    );
};
export default Layout;


