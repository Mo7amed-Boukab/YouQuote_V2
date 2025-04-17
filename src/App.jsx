import React, { useState } from 'react';
import { Search, MoreHorizontal, Heart, Bookmark } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Hero />
              <QuotesSection />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">❝</span>
          <span className="text-xl font-bold">YouQuote</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Accueil</a>
          <a href="#" className="hover:text-gray-300">Explorer</a>
          <a href="#" className="hover:text-gray-300">Catégories</a>
          <a href="#" className="hover:text-gray-300">Mes Favoris</a>
        </div>
        
        <div>
          <button className="bg-gray-700 px-4 py-1 rounded text-sm">
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <div className="text-sm breadcrumbs text-gray-500">
          <span>YouQuote</span> / <span>Accueil</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          Découvrez des citations inspirantes
        </h1>
        <p className="text-gray-600">
          Explorez, partagez et sauvegardez vos citations préférées
        </p>
        
        <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full md:w-80 py-2 px-4 rounded-md bg-gray-200 focus:outline-none"
          />
          <button className="absolute right-3 top-2 text-gray-500">
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function QuotesSection() {
  const [activeTab, setActiveTab] = useState('Toutes les citations');
  
  const tabs = [
    'Toutes les citations',
    'Motivation',
    'Amour',
    'Philosophie',
    'Succès'
  ];
  
  const quotes = Array(6).fill({
    user: 'Med Boukab',
    time: 'Il y a 2 heures',
    text: "\"Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.\"",
    author: "Albert Schweitzer",
    tags: ['Motivation', 'Bonheur', 'Succès'],
    likes: 24
  });

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Publications</h2>
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center">
          + Ajouter une citation
        </button>
      </div>
      
      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex overflow-x-auto space-x-4">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`py-2 px-1 whitespace-nowrap ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    </div>
  );
}

function QuoteCard({ quote }) {
  return (
    <div className="bg-white rounded shadow p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="font-medium">{quote.user}</p>
          <p className="text-gray-500 text-sm">{quote.time}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={16} />
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-800">{quote.text}</p>
        <p className="text-gray-600 mt-2">- {quote.author}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {quote.tags.map((tag, idx) => {
          let colorClass;
          switch(tag) {
            case 'Motivation':
              colorClass = 'bg-blue-100 text-blue-800';
              break;
            case 'Bonheur':
              colorClass = 'bg-blue-100 text-blue-800';
              break;
            case 'Succès':
              colorClass = 'bg-green-100 text-green-800';
              break;
            default:
              colorClass = 'bg-gray-100 text-gray-800';
          }
          
          return (
            <span 
              key={idx} 
              className={`px-2 py-1 rounded-md text-xs ${colorClass}`}
            >
              {tag}
            </span>
          );
        })}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
            <Heart size={16} />
            <span>{quote.likes}</span>
          </button>
        </div>
        <button className="text-gray-500 hover:text-blue-600">
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}

export default App;