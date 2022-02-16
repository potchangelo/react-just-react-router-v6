import { Route, Routes } from 'react-router-dom';
import AppHeader from './AppHeader';
import PageAbout from './PageAbout';
import PageHome from './PageHome';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" exact element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
    </div>
  );
}

export default App;
