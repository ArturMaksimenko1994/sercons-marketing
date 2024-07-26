import styles from "./app.module.css"

import Header from '../header/header';
import Footer from '../footer/footer';

import PageSignature from '../../pages/page-signature/page-signature';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <PageSignature />
      </main>
      <Footer />
    </div>
  );
}

export default App;