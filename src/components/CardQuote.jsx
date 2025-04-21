const CardQuote = () => {
  return (
    <div className="bg-white rounded-md shadow-sm p-6 relative">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-medium">Med Boukab</p>
          <p className="text-gray-500 text-sm">Il y a 2 heures</p>
        </div>
        <button className="text-gray-500">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="my-4">
        <p className="italic">
          "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du
          succès. Si vous aimez ce que vous faites, vous réussirez."
        </p>
      </div>
      <p className="text-gray-600 mb-4">- Albert Schweitzer</p>

      <div Name="flex space-x-2 mb-4">
        <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
          Motivation
        </span>
        <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
          Bonheur
        </span>
        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
          Succès
        </span>
      </div>

      <div className="flex justify-between">
        <button className="flex items-center text-gray-500">
          <i className="far fa-heart mr-1"></i>
          <span>24</span>
        </button>
        <button className="text-gray-500">
          <i className="far fa-bookmark"></i>
        </button>
      </div>
    </div>
  );
};

export default CardQuote;
