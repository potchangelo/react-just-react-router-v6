import { Route, Routes } from 'react-router-dom';
import AppHeader from './AppHeader';
import Page404 from './Page404';
import PageAbout from './PageAbout';
import PageHome from './PageHome';
import PagePost from './PagePost';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="about/*" element={<PageAbout />} />
        <Route path="post/:postId" element={<PagePost />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
