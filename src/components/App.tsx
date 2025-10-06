import React from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-pink-600 to-yellow-500 text-white">
      {/* Enhanced colorful background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-700 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-300 via-yellow-200 to-purple-400 opacity-40 mix-blend-lighten"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_60%)] opacity-30"></div>
      </div>

      {/* Animated orbs and shapes for poster effect */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1.1, opacity: 0.7 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-16 left-24 w-56 h-56 bg-pink-400 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ scale: 1.2, opacity: 0.6 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-32 right-32 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0.3 }}
        animate={{ scale: 1.05, opacity: 0.5 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Main content box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20 text-center max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Sri Matha Fancy Stores
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl text-white/90 font-medium"
        >
          ✨ Our online store is launching soon — stay tuned! ✨
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-32 h-1 bg-yellow-400 mx-auto mt-6 rounded-full origin-left"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-8 text-sm text-white/70"
        >
          © 2025 Sri Matha Fancy Stores. All Rights Reserved.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default App;