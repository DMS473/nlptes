import React from 'react';
import { Link } from 'react-router-dom';

// const CategoryItem = ({ category }) => {
//   return (
//     <li>
//       <Link to={`/category/${category.nama.toLowerCase().replace(/\s+/g, '-')}`}>
//         {category.nama}
//       </Link>
//       {category.subkategori && category.subkategori.length > 0 && (
//         <ul>
//           {category.subkategori.map((sub, index) => (
//             <CategoryItem key={index} category={sub} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

const CategoryItem = ({ category, currentCategory }) => {
  // Cek apakah category saat ini berada di jalur currentCategory
  const isActive = currentCategory.some(cat => cat.nama === category.nama);

  return isActive ? (
    <li>
      <Link to={`/category/${category.nama.toLowerCase().replace(/\s+/g, '-')}`}>
        {category.nama}
      </Link>
      {category.subkategori && category.subkategori.length > 0 && (
        <ul>
          {category.subkategori.map((sub, index) => (
            <CategoryItem 
              key={index} 
              category={sub} 
              currentCategory={currentCategory} 
            />
          ))}
        </ul>
      )}
    </li>
  ) : null;
};

// const findCategoryPath = (categories, targetCategory, path = []) => {
//   for (let category of categories) {
//     const newPath = [...path, category];
//     if (category.nama === targetCategory) {
//       return newPath;
//     }
//     if (category.subkategori && category.subkategori.length > 0) {
//       const subPath = findCategoryPath(category.subkategori, targetCategory, newPath);
//       if (subPath) {
//         return subPath;
//       }
//     }
//   }
//   return null;
// };

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


// const categoryPath = findCategoryPath(data, currentCategory);


const CategoryList2 = ({ categories, currentCategoryName }) => {
  const currentCategoryPath = findCategoryPath(categories, currentCategoryName) || [];
  console.log(currentCategoryPath);

  return (
    <ul>
      {categories.map((category, index) => (
        <CategoryItem 
          key={index} 
          category={category} 
          currentCategory={currentCategoryPath} 
        />
      ))}
    </ul>
  );
};

// const CategoryList2 = ({ categories }) => {
//   return (
//     <ul>
//       {categories.map((category, index) => (
//         <CategoryItem key={index} category={category} />
//       ))}
//     </ul>
//   );
// };

export default CategoryList2;