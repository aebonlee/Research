import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Learning path pages
const ResearchDesign = lazy(() => import('../pages/research-design/ResearchDesign'));
const Sampling = lazy(() => import('../pages/sampling/Sampling'));
const Measurement = lazy(() => import('../pages/measurement/Measurement'));
const Survey = lazy(() => import('../pages/survey/Survey'));
const Experiment = lazy(() => import('../pages/experiment/Experiment'));
const Qualitative = lazy(() => import('../pages/qualitative/Qualitative'));
const Statistics = lazy(() => import('../pages/statistics/Statistics'));
const Ethics = lazy(() => import('../pages/ethics/Ethics'));
const QuantitativeMethods = lazy(() => import('../pages/quantitative-methods/QuantitativeMethods'));
const QualitativeMethodsPage = lazy(() => import('../pages/qualitative-methods/QualitativeMethods'));
const Ahp = lazy(() => import('../pages/ahp/Ahp'));

const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<MyPage />} />

            {/* Learning Paths */}
            <Route path="/research-design" element={<ResearchDesign />} />
            <Route path="/sampling" element={<Sampling />} />
            <Route path="/measurement" element={<Measurement />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/experiment" element={<Experiment />} />
            <Route path="/qualitative" element={<Qualitative />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/quantitative-methods" element={<QuantitativeMethods />} />
            <Route path="/qualitative-methods" element={<QualitativeMethodsPage />} />
            <Route path="/ahp" element={<Ahp />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
