import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import categories from '../../data/ontologi_konsep.json';

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Fungsi rekursif untuk mencari kategori dalam struktur hierarki
  const findCategory = (categories, name) => {
    for (let category of categories) {
      if (category.nama === name) {
        return category;
      }
      if (category.subkategori.length > 0) {
        const found = findCategory(category.subkategori, name);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Cari kategori berdasarkan nama
  const category = findCategory(categories, categoryName);

  if (!category) {
    return <h1>Category not found</h1>;
  }

  return (
    <div className='p-3'>
      <h1>{category.nama}</h1>
      {category.subkategori.length > 0 ? (
        <div>
          <p>Kategori ini memiliki {category.subkategori.length} subkategori:</p>
          <ul>
            {category.subkategori.map((sub, index) => (
              <li key={index}><Link to={`/category/${sub.nama}`}>{sub.nama}</Link></li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Kategori ini tidak memiliki subkategori lebih lanjut.</p>
      )}
    </div>
  );
};

export default CategoryPage;
