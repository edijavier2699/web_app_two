import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./privacyPolicy";
import TermsOfService from "./termsOfServices";
import { Blog } from "./blog";
import { LoginPage } from "./loginPage";
import { NotFound } from "./notFound";
import { BlogOverview } from "./components/blogOverview";
import DashboardLayout from "./dashboardLayout";
import ProtectedRoute from "./privateRoute";
import { ArticleList } from "./components/blog/articleList";
import CreateArticle from "./components/createArticleForm";
import { SingleArticleView } from "./components/singleArticleView";
import { Toaster } from "./components/ui/toaster";
import MainLayout from "./mainLayout";

const Layout = () => {

    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route element={<App />} path="/" />
                    <Route element={<Blog />} path="/blog/" />
                    <Route element={<LoginPage />} path="/blog-admin/" />
                    <Route element={<PrivacyPolicy />} path="/privacy-policy/" />
                    <Route element={<TermsOfService />} path="/terms-of-services/" />
                    <Route path="blog/article/:id/" element={<SingleArticleView/>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                
                
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
                </Route>

            </Routes>
            <Routes>
                
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;


