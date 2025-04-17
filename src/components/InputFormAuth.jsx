const InputFormAuth = ({ id, type, name, placeholder, icon }) => {
 return (
   <div className="relative">
     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
       {icon}
     </div>
     <input
       id={id}
       type={type}
       name={name}
       placeholder={placeholder}
       required
       className="w-full py-3 pl-10 pr-4 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-900"
     />
   </div>
 );
};

export default InputFormAuth;
