const ButtonSubmitAuthForm = ({ name }) => {
 return (
   <button
     type="submit"
     className="w-full py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md"
   >
     {name}
   </button>
 );
};

export default ButtonSubmitAuthForm;
