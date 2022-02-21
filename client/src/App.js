// External Modules Imports
import React from 'react';
import {
    Routes,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

// Components Imports
import SplashPage from "./containers/SplashPage";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {
    return (
        // React Dom Router Documentation: https://v5.reactrouter.com/web/guides/quick-start
        <Router>
            <section className='backgroundGradient'></section>
            <section className='websiteContent'>
                <NavBar />
                <Routes>
                    <Route path="" element={<SplashPage />} />
                </Routes>
                <Footer />
            </section>
        </Router>
    )
}