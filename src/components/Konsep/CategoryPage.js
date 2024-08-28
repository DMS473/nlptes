import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import categories from '../../data/ontologi_konsep.json';
import tes2 from '../../data/images/ontologi/masjid.png';
import CategoryList2 from './CategoryList2';
import HierarchyNavigation from './HierarcyNavigation';

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
      if (category.related_konsep.length > 0) {
        const found = findCategory(category.related_konsep, name);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  function findCategoryPath(data, targetCategory) {
    for (let item of data) {
        if (item.nama === targetCategory) {
            return [item];
        }
        if (item.subkategori.length > 0) {
            const path = findCategoryPath(item.subkategori, targetCategory);
            if (path.length) {
                return [item, ...path];
            }
        }
    }
    return [];
}

  // Cari kategori berdasarkan nama
  const category = findCategory(categories, categoryName);

  if (!category) {
    return <h1>Category not found</h1>;
  }

  return (
    <div className='p-3'>
      <h1>{category.nama}</h1>
      <br></br>
      <HierarchyNavigation data={categories} currentCategory={category.nama} />
      <br></br>
      {category.subkategori.length > 0 ? (
        <div>
          <h3>Subkategori</h3>
          <p>Kategori ini memiliki {category.subkategori.length} subkategori:</p>
          <ul>
            {category.subkategori.map((sub, index) => (
              <li key={index}><Link to={`/category/${sub.nama}`}>{sub.nama}</Link></li>
            ))}
          </ul>
          <p>
          {process.env.PUBLIC_URL}
          </p>
          {category.imageSrc && (
                <img src={process.env.PUBLIC_URL +category.imageSrc} alt={process.env.PUBLIC_URL +category.imageSrc} />
            )}
          {/* <img src={`../../data/images/ontologi/masjid.png`} alt="Responsive"/> */}
          {/* <CategoryList2 categories={categories} currentCategoryName={category.name}/> */}
          {/* <HierarchyNavigation data={categories} currentCategory={category.nama} /> */}
        </div>
      ) : (
        <div>
          <p>Kategori ini tidak memiliki subkategori lebih lanjut.</p>
          {category.imageSrc && (
                <img src={process.env.PUBLIC_URL +category.imageSrc} alt={process.env.PUBLIC_URL +category.imageSrc} />
            )}
            
        </div>
      )}
      {category.related_konsep.length > 0 ? (
        // <p>ada</p>
        <div>
          <br></br>
          <h3>Related Konsep</h3>
          <ul>
            {category.related_konsep.map((sub, index) => (
              <li key={index}><Link to={`/category/${sub.nama}`}>{sub.nama}</Link></li>
            ))}
          </ul>
        </div>
      ) : (
        <p>ga ada</p>
      )}
    </div>
  );
};

export default CategoryPage;
