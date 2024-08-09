import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './../protected-route/protected-route';
import { AuthProvider } from './../../utils/auth-context';
import { ImageProvider } from './../../utils/image-context';

import styles from "./app.module.css";

import Header from '../header/header';
import Footer from '../footer/footer';

// pages
import PageHome from '../../pages/page-home/page-home';
import PageSignature from '../../pages/page-signature/page-signature';
import PageLogin from '../../pages/page-login/page-login';
import PageNotFound from '../../pages/page-not-found/page-not-found';


function App() {
  return (
    <AuthProvider>
      <ImageProvider>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>
            <Routes>
            <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <PageSignature />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signature"
                element={
                  <ProtectedRoute>
                    <PageSignature />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<PageLogin />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </ImageProvider>
    </AuthProvider>
  );
}

export default App;

