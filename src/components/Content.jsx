import React, { useEffect, useState } from 'react';
import CategoryFilter from './util/CategoryFilter';
import Button from './util/Button';
import DisplayData from './util/DisplayData';

export default function Content() {
  const [orignalData, setOrignalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const itemsPerPage = 4;

  const currentItems = currentData.slice(
    // mutating array items
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    // called only once
    const fetchData = async () => {
      const response = await fetch('/api/posts');
      const responseJson = await response.json();
      return responseJson;
    };
    fetchData().then((data) => {
      setCurrentData(data);
      setOrignalData(data);
      setMaxPage(Math.ceil(data.length / itemsPerPage));
      const categories = new Map();
      for (const dataObj of data) {
        for (const category of dataObj.categories) {
          if (!categories.has(category.name)) {
            categories.set(category.name, {
              name: category.name,
              selected: false,
            });
          }
        }
      }
      setUniqueCategory([...categories.values()]);
    });
  }, []);

  useEffect(() => {
    // get the selected categoreis data
    const selectedCategory = [];
    uniqueCategory.forEach((cateobj) =>
      cateobj.selected ? selectedCategory.push(cateobj.name) : ''
    );

    if (selectedCategory.length) {
      const reqParam = `?categories=${selectedCategory.join(',')}`; // Use comma-separated categories

      const fetchSelectedData = async () => {
        const response = await fetch(`/api/posts/category${reqParam}`); // Use '/category' route
        const responseJson = await response.json();
        return responseJson;
      };

      fetchSelectedData().then((data) => {
        console.log(data);
        setCurrentData(data);
        setMaxPage(Math.ceil(data.length / itemsPerPage));
      });
    } else {
      setCurrentData(orignalData);
      setMaxPage(Math.ceil(orignalData.length / itemsPerPage));
    }
  }, [uniqueCategory, orignalData]);

  return (
    <div>
      <CategoryFilter
        uniqueCategory={uniqueCategory}
        setUniqueCategory={setUniqueCategory}
      />

      <DisplayData currentItems={currentItems} />

      <Button
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        maxPages={maxPage}
      />
    </div>
  );
}
