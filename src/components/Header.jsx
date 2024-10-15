import React, { useState } from 'react';
import Modal from 'react-modal';
import govt from '../assets/govt.png';
import emblem from '../assets/emblem.png';
import searchIcon from '../assets/searchIcon.svg';
import dropdown from '../assets/dropdown.svg';
import close from '../assets/close.svg'
import userIcon from '../assets/user.svg'
import lockIcon from '../assets/lock.svg'
import eyeIcon from '../assets/eye-svgrepo-com.svg'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    backgroundColor: '#1F3B83',
    zIndex: '1001',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1000',
  },
};

Modal.setAppElement('#root');

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={`relative ${modalIsOpen ? 'blur-background' : ''}`}>
      <img src={govt} alt="Government" className="w-full h-auto" />

      <div className="absolute bottom-0 left-0 w-2/4 h-16 ml-20 bg-blue-700 z-20 flex items-center animate-color-shift">
        <div className="flex items-center z-30">
          <img src={searchIcon} alt="Search" className="w-8 h-6 ml-10 mr-2" />
          <div className="flex flex-col search">
            <p className="text-white font-bold leading-tight">Search a</p>
            <p className="text-white font-thin leading-tight">government service</p>
          </div>

          <input
            type="text"
            placeholder="Type Keyword"
            className="ml-7 px-7 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="bg-blue-400 w-10 flex items-center justify-center" style={{ height: '42px' }}>
            <img src={searchIcon} alt="Search Icon" className='h-8 w-5' />
          </div>

          <p className='text-white text-sm leading-tight ml-10'>Advanced <br /> Search</p>

          <img src={dropdown} alt="Dropdown" className='w-8 h-8 ml-2' />
        </div>
      </div>

      <div className="absolute top-10 left-20 flex items-center z-10 space-x-6">
        <img src={emblem} alt="Emblem" className="w-20" />

        <div>
          <h1 className="text-3xl font-bold text-white">
            NATIONAL GOVERNMENT SERVICES PORTAL
          </h1>
          <p className="text-lg text-gray-300 mt-2 tracking-widest">
            Find Government Service Faster
          </p>
        </div>

        <div className='flex absolute' style={{ marginLeft: '71rem' }}>
          <button
            className="bg-blue-500 text-white py-3 px-7 rounded-md text-2xl tracking-widest font-bold hover:bg-blue-700 transition duration-300 ease-in-out animate-background"
            onClick={openModal}
          >
            Login
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >

        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Login
        </h2>
        

        <form className="space-y-4">
            
              <input type="hidden" name="bot-detection" value="true"/>

        <div className="relative">
  <div className="absolute inset-y-0 left-0 flex mt-6 pl-3">
    <img
      src={userIcon}
      alt="User Icon"
      className="h-5 w-5 text-gray-400"
    />
    <div className="border-l border-gray-400 h-6 ml-3"></div>
  </div>
  <input
    type="email"
    id="email"
    className="w-full pl-12 px-3 py-5  mb-4 border border-gray-200 rounded-md bg-[#1F3B83] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
    placeholder="Enter your email"
    required
  />
</div>


<div className="relative">
  <div className="absolute inset-y-0 left-0 flex mt-6 pl-3">
    <img
      src={lockIcon} 
      alt="Lock Icon"
      className="h-5 w-5 text-gray-400"
    />
    <div className="border-l border-gray-400 h-6 ml-3"></div> 
  </div>


  <input
    type="password"
    id="password"
    className="w-full pl-12 pr-10 px-4 py-5 mb-8 border border-gray-200 rounded-md bg-[#1F3B83] text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
    placeholder="Enter your password"
    required
  />

  <div className="absolute inset-y-0 right-0 flex mt-6 pr-4">
    <img
      src={eyeIcon} 
      alt="Eye Icon"
      className="h-5 w-5 text-gray-400 cursor-pointer"
    />
  </div>
</div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-black py-3 px-4 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out font-bold" 
            >
              Submit
            </button>
          </div>
        </form>

    
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <img src={close} alt="Close" className="w-6 h-6" />
        </button>
      </Modal>
    </div>
  );
};

export default Header;
