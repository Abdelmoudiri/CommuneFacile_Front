import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeTab, setActiveTab] = useState("login");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-amber-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Cercles décoratifs améliorés */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-100 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-yellow-100 rounded-full filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute -bottom-14 -right-14 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      {/* Carte principale avec effet de verre */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 border-t-4 border-red-600 relative z-10"
      >
        {/* Logo et Header */}
        <div>
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="flex justify-center mb-6"
          >
            <div className="h-20 w-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg ring-4 ring-red-200">
              <span className="text-white text-3xl font-bold">CF</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-center text-gray-800"
          >
            CommuneFacile
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-center mt-2"
          >
            Trouvez facilement des informations sur les communes de France
          </motion.p>
        </div>

        {/* Tabs Navigation améliorée */}
        <div className="flex border-b border-gray-200 relative">
          <button
            className={`flex-1 py-3 text-center font-medium transition-all duration-300 ${
              activeTab === "login"
                ? "text-red-600"
                : "text-gray-500 hover:text-red-500"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Connexion
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium transition-all duration-300 ${
              activeTab === "register"
                ? "text-red-600"
                : "text-gray-500 hover:text-red-500"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Inscription
          </button>
          
          {/* Indicateur animé */}
          <motion.div 
            className="absolute bottom-0 h-0.5 bg-red-600"
            initial={false}
            animate={{ 
              left: activeTab === "login" ? "0%" : "50%",
              right: activeTab === "login" ? "50%" : "0%"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Contenu des onglets avec animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "login" ? <Login /> : <Register />}
          </motion.div>
        </AnimatePresence>

        {/* Séparateur avec texte */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">ou continuez avec</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Boutons de connexion sociale améliorés */}
        <div className="grid grid-cols-3 gap-3">
          <motion.button 
            whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ y: 0 }}
            className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.787-1.676-4.139-2.701-6.735-2.701-5.522 0-10.001 4.478-10.001 10s4.479 10 10.001 10c8.396 0 10.249-7.85 9.426-11.748l-9.426 0.081z"/>
            </svg>
          </motion.button>
          <motion.button 
            whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ y: 0 }}
            className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686 0.235 2.686 0.235v2.953h-1.514c-1.491 0-1.956 0.925-1.956 1.874v2.25h3.328l-0.532 3.47h-2.796v8.385c5.737-0.9 10.125-5.864 10.125-11.854z"/>
            </svg>
          </motion.button>
          <motion.button 
            whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ y: 0 }}
            className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.162 5.656c-0.765 0.352-1.584 0.586-2.444 0.697 0.887-0.548 1.56-1.411 1.882-2.432-0.836 0.513-1.757 0.876-2.731 1.072-0.784-0.863-1.9-1.402-3.138-1.402-2.372 0-4.295 1.995-4.295 4.456 0 0.352 0.036 0.696 0.114 1.027-3.575-0.177-6.747-1.953-8.874-4.647-0.368 0.666-0.585 1.431-0.585 2.251 0 1.542 0.766 2.908 1.929 3.708-0.706-0.022-1.377-0.223-1.962-0.551v0.055c0 2.156 1.492 3.952 3.473 4.362-0.357 0.101-0.735 0.157-1.129 0.157-0.275 0-0.547-0.033-0.811-0.087 0.55 1.767 2.149 3.055 4.043 3.093-1.48 1.2-3.347 1.917-5.374 1.917-0.35 0-0.697-0.026-1.034-0.073 1.912 1.274 4.184 2.015 6.627 2.015 7.952 0 12.302-6.83 12.302-12.754 0-0.194-0.007-0.389-0.018-0.577 0.849-0.63 1.585-1.412 2.165-2.305z"/>
            </svg>
          </motion.button>
        </div>

        {/* Footer */}
        <div className="pt-4 text-center text-sm text-gray-500">
          <p>
            CommuneFacile © {new Date().getFullYear()} - Tous droits réservés
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
