// import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, TextInput, Button, Dropdown } from 'flowbite-react';

export default function Header() {
  
  const path = useLocation().pathname;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // Define handleSignout function to handle user signout

  // Assuming you have theme and currentUser state and toggleTheme and dispatch function
  // Replace the following lines with your actual implementation
  const theme = 'light';
  const currentUser = null; // Replace null with your current user object

  return (
    <Navbar className="border-b-2">
      <Link to="/" className='self-center whitespace-nowrap text-sm 
        sm:text-xl font-semibold dark:text-white'>
        <span className="px-5 py-2 bg-gradient-to-tr from-blue-700
            via-blue-400 to-white rounded-lg text-white">
          Zanoah</span>
        Blog
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          // onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            // label={
            //   <Avatar alt='user' img={currentUser.profilePicture} rounded />
            // }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            {/* <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item> */}
          </Dropdown>
        ) : (
          <Link to='/SignIn'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/comics'} as={'div'}>
          <Link to='/Comics'>Comics</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/Gaming'} as={'div'}>
          <Link to='/Gaming'>Gaming</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/Tech'} as={'div'}>
          <Link to='/Tech'>Tech</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
