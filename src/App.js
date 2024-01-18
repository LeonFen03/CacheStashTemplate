import logo from './logo.svg';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import NavBar from './components/Nav-Bar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import PhotoGallery from './components/Photo-Gallery/PhotoGallery';
function App() {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={<NavBar />}> 
      <Route path="/" element={<LandingPage />} />
      <Route path="/public" element={<PhotoGallery />} />
    </Route>))

  return (
    <AnimatePresence >
  <RouterProvider router={appRouter} />
  </AnimatePresence>);
}

export default App;
