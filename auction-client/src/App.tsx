import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { PhonePage } from './components/PhonePage';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path="/phones" element={<PhonePage />} />
        </Routes>
      </main>

      <footer className="footer" />

    </div>
  );
};
