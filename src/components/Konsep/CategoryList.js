import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../data/ontologi_konsep.json';

const CategoryList = () => {
  return (
    <div>
      <h1>Ontologi Konsep</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.nama}`}>{category.nama}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
