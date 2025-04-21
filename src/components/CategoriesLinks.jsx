import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoriesLinks = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryClick = async (categoryId) => {
    try {
      setSelectedCategory(categoryId);
     const response = await axios.get(`http://localhost:8000/api/quotes/category/${categoryId}`);
     console.log(response.data.quotes);
   
    
      onCategorySelect(response.data.quotes);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  return (
    <div className="px-20 pb-10">
      <button 
        className={`mr-6 pb-2 text-sm font-medium ${!selectedCategory ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
        onClick={() => handleCategoryClick(null)}
      >
        Toutes les citations
      </button>
      {categories.map((category) => (
        <button 
          key={category.id}
          className={`mr-6 pb-2 text-sm ${selectedCategory === category.id ? 'border-b-2 border-gray-800 text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesLinks;
