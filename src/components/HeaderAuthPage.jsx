const HeaderAuthPage = ({title, description}) => {
  
 return (
  <div className="mb-32">
  <h2 className="text-3xl font-bold text-center">{title}</h2>
  <p className="text-gray-600 mt-4 text-md text-center">
      {description}
  </p>
</div>
      

 );
};

export default HeaderAuthPage;
