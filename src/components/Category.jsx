import React from 'react'
import { categories } from "../utils/constants";


const Category = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='bg-white p-3 overflow-auto h-10 whitespace-nowrap overflow-y-scroll no-scrollbar m-auto '>
      {categories.map((category) => (
        <button
          className="px-4 text-lg rounded-xl font-semibold"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "gray",
            color: category.name === selectedCategory && "white",

          }}
          key={category.name}
        >

          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
            {category.name}
          </span>
        </button>
      ))}

    </div>
  )
}

export default Category