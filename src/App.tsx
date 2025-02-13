import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeospatialPage from '@pages/GeospatialPage';
import NotFoundPage from '@pages/NotFoundPage';
import ChartPage from '@pages/ChartPage';
import HomePage from '@pages/HomePage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/geospatial" element={<GeospatialPage />} />
      <Route path="/chart" element={<ChartPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
