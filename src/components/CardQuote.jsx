import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import axios from '../axios';

const formatTimeAgo = (dateString) => {
  try {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: fr });
  } catch (error) {
    return "Il y a un instant";
  }
};

const CardQuote = ({ quote }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const token = localStorage.getItem("authToken");

  useEffect(() => {

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && quote.likes) {
        setIsLiked(quote.likes.some(like => like.id === user.id));
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du like:", error);
    }
   
    const fetchFavorites = async () => {
      if (!token) return;
      
      try {
        const response = await axios.get('/my-favorites', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (response.data && response.data.favorites) {
          const isInFavorites = response.data.favorites.some(
            fav => fav.id === quote.id
          );
          setIsFavorited(isInFavorites);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des favoris:", error);
      }
    };

    fetchFavorites();
  }, [quote, token]);

  const handleLike = async () => {
    if (!token) {
      console.error("Pas de token d'authentification");
      return;
    }

    try {

      if (isLiked) {
        const response = await axios.delete(`/quotes/${quote.id}/unlike`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        console.log("Réponse unlike:", response.data);

      } else {
        const response = await axios.post(`/quotes/${quote.id}/like`, null, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        console.log("Réponse like:", response.data);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Erreur détaillée lors du like/unlike:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
    }
  };

  const handleFavorite = async () => {
    if (!token) return;
    try {
      if (isFavorited) {
        await axios.delete(`/quotes/${quote.id}/unfavorite`, {
          headers: { Authorization: `Bearer ${token}` },
        });

      } else {
        await axios.post(`/quotes/${quote.id}/favorite`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error("Erreur lors de l'ajout/suppression des favoris:", error);
    }
  };

  if (!quote) return null;

  return (
    <div className="relative p-6 bg-white rounded-md shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-medium">Med Boukab</p>
          <p className="text-sm text-gray-500">{formatTimeAgo(quote.created_at)}</p>
        </div>
        <button className="text-gray-500">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="my-4">
        <p className="italic">"{quote.content}"</p>
      </div>
      <p className="mb-4 text-gray-600">- {quote.author}</p>

      <div className="flex mb-4 space-x-2">
        {quote.tags?.map((tag, index) => {
          const colors = [
            { bg: "bg-purple-100", text: "text-purple-700" },
            { bg: "bg-blue-100", text: "text-blue-700" },
            { bg: "bg-green-100", text: "text-green-700" }
          ];
          const colorIndex = index % colors.length;
          const { bg, text } = colors[colorIndex];

          return (
            <span
              key={tag.id}
              className={`px-3 py-1 text-xs rounded-full ${bg} ${text}`}
            >
              {tag.name}
            </span>
          );
        })}
      </div>

      <div className="flex justify-between">
        <button 
          className={`flex items-center ${isLiked ? 'text-gray-900' : 'text-gray-500'}`}
          onClick={handleLike}
        >
          <i className={`${isLiked ? 'fas' : 'far'} fa-heart mr-1`}></i>
          <span>{quote.likes?.length || 0}</span>
        </button>
        <button 
          className={`${isFavorited ? 'text-gray-900' : 'text-gray-500'}`}
          onClick={handleFavorite}
        >
          <i className={`${isFavorited ? 'fas' : 'far'} fa-bookmark`}></i>
        </button>
      </div>
    </div>
  );
};

export default CardQuote;
