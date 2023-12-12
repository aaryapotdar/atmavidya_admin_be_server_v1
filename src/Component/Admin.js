import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [tagline, setTagline] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(uploadedImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Price:', price);
    console.log('Image:', image);
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
    setFormVisible(true);
  };

  const handleTaglineChange = (event) => {
    setTagline(event.target.value);
  };

  const handleStateButtonClick = () => {
    console.log('State Button Clicked');
 
  };

  const handleVariableButtonClick = () => {
    console.log('Variable Button Clicked');
  
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-100">
      <div className="w-full max-w-md p-6 bg-orange-100 rounded shadow-lg">

        {formVisible && (
          <form onSubmit={handleSubmit}>
      <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2 ">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
      </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-bold mb-2 ">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={handlePriceChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="tagline" className="block text-sm font-bold mb-2">
                Tagline
              </label>
              <input
                type="text"
                id="tagline"
                value={tagline}
                onChange={handleTaglineChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-bold mb-2 text-center">
                Image
              </label>
              <input
                type="file"
                accept=".png, .jpg"
                onChange={handleImageChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>


            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleStateButtonClick}
                className="bg-orange-500 hover:bg-orange-700 hover:text-black text-white font-bold py-2 px-4 rounded mr-2"> 
                <Link to="/Weeks"> Fixed </Link>
              </button>
              <button
                    onClick={handleVariableButtonClick}
                    className="bg-orange-500 hover:bg-orange-700 hover:text-black text-white font-bold py-2 px-4 rounded">
                  <Link to="Dates"> Variable </Link>
              </button>
              </div>

              <hr className="my-6" />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                Submit
              </button>
              </form>
        )}
      </div>
    </div>
  );
};
export default Admin;              
    
            
            
      




          

         
          

        