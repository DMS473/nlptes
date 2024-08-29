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

  const TranslationText = ({ translation }) => {
    return (
      <p dangerouslySetInnerHTML={{ __html: translation }} />
    );
  };

  const translation = "Allah telah menjadikan <strong>Ka‘bah</strong>, rumah suci itu sebagai pusat kegiatan (peribadatan dan urusan dunia) bagi manusia, dan (demikian pula) bulan haram, hadyu (hewan kurban) dan qalā’id (hewan kurban yang diberi kalung). Yang demikian itu agar kamu mengetahui bahwa sesungguhnya Allah mengetahui apa pun yang ada di langit dan apa pun yang ada di bumi dan bahwa Allah Maha Mengetahui segala sesuatu.";


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
        </div>
      ) : (
        <div>
          {/* <p>a</p> */}
          {/* <p>Kategori ini tidak memiliki subkategori lebih lanjut.</p>
          {category.imageSrc && (
                <img src={process.env.PUBLIC_URL +category.imageSrc} alt={process.env.PUBLIC_URL +category.imageSrc} />
            )} */}
          {/* <p>a</p> */}
        </div>
      )}
      {category.related_konsep.length > 0 ? (
        // <p>ada</p>
        <div>
          <h3>Related Konsep</h3>
          <p>Kategori ini memiliki {category.related_konsep.length} entitas bernama:</p>
          <ul>
            {category.related_konsep.map((sub, index) => (
              <li key={index}><Link to={`/category/${sub.nama}`}>{sub.nama}</Link></li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {/* <p>ga ada</p> */}
        </div>
      )}
      {category.imageSrc && (
        <div>
          <p>Kata <strong>{category.nama}</strong> terdapat di surat {category.surat} ({category.no_surat}) ayat ke ({category.no_surat}:{category.ayat})</p>
          <img src={process.env.PUBLIC_URL + category.imageSrc} alt={process.env.PUBLIC_URL + category.imageSrc} className='img-fluid' />
        </div>
      )}
      {category.terjemahan && (
        <div className=' w-75'>
          <div className='w-75'>
          {/* <p>{category.terjemahan}</p> */}
          {/* <TranslationText translation={translation} wordToHighlight={wordToHighlight} /> */}
          <TranslationText translation={category.terjemahan} />
          </div>
        </div>
      )}

    </div>
  );
};

export default CategoryPage;
