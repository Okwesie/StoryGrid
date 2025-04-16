import React, { useState } from 'react';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="p-4 text-white bg-[#0A0F2C] min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Create a New Post</h1>

      <div
        className="w-40 h-40 mx-auto bg-[#16204D] rounded-lg flex items-center justify-center cursor-pointer border-dashed border-2"
        onClick={() => console.log('Show media options...')}
      >
        +
      </div>

      <div className="flex justify-center mt-4 gap-4">
        {['Audio', 'Video', 'Photo'].map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded ${selectedType === type ? 'bg-yellow-400 text-black' : 'bg-gray-700'}`}
          >
            {type}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Write a caption..."
        className="w-full mt-6 p-3 rounded bg-[#16204D] text-white"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <button className="w-full bg-yellow-400 text-black font-bold py-3 mt-4 rounded">
        Post
      </button>
    </div>
  );
};

export default CreatePost;
