import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import MainLayout from "./mainLayout";
import ProtectedRoute from "./components/privateRoute";
import { LoadingSpinner } from './components/loadingSpinner';
const App = lazy(() => import('./views/App'));
const Blog = lazy(() => import('./views/blog').then(module => ({ default: module.Blog })));
const FAQPage = lazy(() => import('./views/faq').then(module => ({ default: module.FAQPage })));
const FaqSinglePage = lazy(() => import('./views/faqSinglePage').then(module => ({ default: module.FaqSinglePage })));
const LoginPage = lazy(() => import('./views/loginPage').then(module => ({ default: module.LoginPage })));
const PrivacyPolicy = lazy(() => import('./components/privacyPolicy'));
const TermsOfService = lazy(() => import('./components/termsOfServices'));
const SingleArticleView = lazy(() => import('./components/singleArticleView').then(module => ({ default: module.SingleArticleView })));
const NotFound = lazy(() => import('./components/notFound').then(module => ({ default: module.NotFound })));
const BlogOverview = lazy(() => import('./components/blogOverview').then(module => ({ default: module.BlogOverview })));
const DashboardLayout = lazy(() => import('./dashboardLayout'));
const ArticleList = lazy(() => import('./components/blog/articleList').then(module => ({ default: module.ArticleList })));
const CreateArticle = lazy(() => import('./components/createArticleForm'));
const NewsletterEmailFormFlow = lazy(() => import('./forms/newsletterEmailForm').then(module => ({ default: module.NewsletterEmailFormFlow })));
const RequestInvitation = lazy(() => import('./views/requestInvitation').then(module => ({ default: module.RequestInvitation })));
const LegalNotices = lazy(() => import('./components/legalNotices').then(module => ({ default: module.LegalNotices })));
const AboutUs = lazy(()=> import ('./views/aboutUs').then(module =>({default: module.AboutUs})))
// const Marketplace = lazy(()=> import ('./views/marketplace').then(module =>({default: module.Marketplace})))
const PropertyDetails = lazy(()=> import ('./views/propertyDetailts').then(module =>({default: module.PropertyDetails})))
const ForInvestors = lazy(()=> import ('./views/forInvestor').then(module =>({default:module.ForInvestor})))


const Layout = () => {
    return (
        <BrowserRouter>
            <Toaster />
            {/* Suspense envuelve las rutas que están lazy-loaded */}
            <Suspense fallback={<LoadingSpinner/>}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route element={<App />} path="/" />
                        <Route element={<Blog />} path="/blog/" />
                        {/* <Route element={<Marketplace />} path="/marketplace/" /> */}
                        <Route element={<FAQPage />} path="/faq/" />
                        <Route path="/faq-category/:id/" element={<FaqSinglePage />} />
                        <Route element={<LoginPage />} path="/blog-admin/" />
                        <Route element={<PrivacyPolicy />} path="/privacy-policy/" />
                        <Route element={<LegalNotices />} path="/legal-notices/" />
                        <Route element={<TermsOfService />} path="/terms-of-services/" />
                        <Route path="/blog/article/:id/" element={<SingleArticleView />} />
                        <Route path="/about-us/" element={<AboutUs/>}/>
                        <Route path="how-it-works/" element={<ForInvestors/>}/>
                        <Route path="/property/details/:id/" element={<PropertyDetails/>} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    <Route element={<RequestInvitation />} path="/request-invitation/" />

                    <Route element={<DashboardLayout />}>
                        <Route
                            path="dashboard/"
                            element={<ProtectedRoute roleRequired="blog-admin" element={<BlogOverview />} />}
                        />
                        <Route
                            path="articles-list/"
                            element={<ProtectedRoute roleRequired="blog-admin" element={<ArticleList />} />}
                        />
                        <Route
                            path="create-article/"
                            element={
                                <ProtectedRoute roleRequired="blog-admin" element={<CreateArticle onClose={function (): void {
                                    throw new Error("Function not implemented here.");
                                }} />} />
                            }
                        />
                        <Route
                            path="email-create/"
                            element={<ProtectedRoute roleRequired="blog-admin" element={<NewsletterEmailFormFlow />} />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Layout;
