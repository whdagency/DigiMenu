import { useState } from "react";
// import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import Login from "./authentification/page";

function App() {
    const [authenticated, setAuthenticated] = useState(false);


    // Fonction pour gérer la connexion
    const handleLogin = () => {
        // Naviguez vers la page Dashboard après une connexion réussie
        setAuthenticated(true); // Mettre à jour l'état d'authentification
        console.log('true');
        history.push("/dashboard"); // Rediriger vers la page Dashboard
    };

    return (
        <Router>
            <Routes>
                {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
                <Route path="/dashboard" element={<Layout />} />
                {/* <Route path="/layouts" element={<Layout />} /> */}
            </Routes>
            {authenticated && <Layout />}
        </Router>
    );
}

export default App;
