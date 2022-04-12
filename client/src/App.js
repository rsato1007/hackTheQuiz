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
import RegistrationPage from './containers/RegistrationPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Main App Component
export default function App() {
    return (
        // React Dom Router Documentation: https://v5.reactrouter.com/web/guides/quick-start
        <Router>
            {/* The code below is what actually does the moving background. */}
            <section className='backgroundGradient'></section>
            {/* This code processes the actual web content (quizzes, etc.) */}
            <section className='websiteContent'>
                <NavBar />
                <Routes>
                    <Route path="/" element={<SplashPage />} />
                    <Route path= "register/" element={<RegistrationPage />} />
                </Routes>
                <Footer />
            </section>
        </Router>
    )
}

/*
    Try to append the current key hash onto an existing RPC
    to the desired server that hasn't been sent yet.
*/

const receivedValidHeartbeat = () => {
    // Insert code
}