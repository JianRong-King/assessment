import React from 'react';

export default function CategoryFilter({
  uniqueCategory,
  setUniqueCategory,
  //   handleCategorySubmit,
}) {
  const handleCheckboxChange = (index) => {
    const newCategories = [...uniqueCategory];
    newCategories[index].selected = !uniqueCategory[index].selected;
    setUniqueCategory(newCategories);
  };

  return (
    <>
      <form onSubmit={() => {}}>
        {uniqueCategory.map((category, index) => (
          <label key={category.name}>
            <input
              type="checkbox"
              checked={category.selected}
              onChange={() => handleCheckboxChange(index)}
            />
            {category.name}
          </label>
        ))}
      </form>
    </>
  );
}
