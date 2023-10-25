import React from 'react'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 <Link to='' class="flex items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" class="h-8 mr-3" alt="YouTube" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YouTube</span>
  </Link>

<SearchBar />
  </div>
</nav>

    </div>
  )
}

export default Navbar