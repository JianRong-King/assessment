import React, { useState } from 'react';

export default function CategoryFilter({ uniqueCategory, setUniqueCategory }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedCategories = uniqueCategory.map((category, i) =>
      i === index ? { ...category, selected: !category.selected } : category
    );
    setUniqueCategory(updatedCategories);
  };

  const selectedCategories = uniqueCategory
    .filter((category) => category.selected)
    .map((category) => (
      <span
        key={category.name}
        className="inline-block bg-gray-800 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
      >
        {category.name}
      </span>
    ));

  return (
    <div
      className="p-4 bg-white shadow rounded-lg relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="w-full text-left bg-gray-200 p-2 rounded">
        {selectedCategories.length > 0 ? (
          <>
            <span className="text-sm font-medium text-gray-700 mr-2">
              Selected:
            </span>
            {selectedCategories}
          </>
        ) : (
          'Select Categories'
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg z-10">
          <form className="space-y-4 p-4">
            {uniqueCategory.map((category, index) => (
              <div key={category.name} className="flex items-center">
                <input
                  id={`category-${index}`}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={category.selected}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label
                  htmlFor={`category-${index}`}
                  className="ml-2 block text-sm text-gray-900"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
  );
}
