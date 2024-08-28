import React from 'react';
import { Link } from 'react-router-dom';

const HierarchyNavigation = ({ data, currentCategory }) => {
    
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
    
    
    const categoryPath = findCategoryPath(data, currentCategory);

    return (
        <nav>
            <span>
                <Link to='/konsep'>Konsep</Link>
                 {" > "} 
            </span>
            {categoryPath.map((item, index) => (
                <span key={index}>
                    <Link to={`/category/${item.nama}`}>{item.nama}</Link>
                    {index < categoryPath.length - 1 && " > "}
                </span>
            ))}
        </nav>

        // tes2
        // <div className="hierarchy-navigation">
        //     <ul>
        //         {categoryPath.map((item, index) => (
        //             <li key={index}>
        //                 <a href={`/${item.nama.toLowerCase().replace(/\s+/g, '-')}`}>
        //                     {item.nama}
        //                 </a>
        //                 {index < categoryPath.length - 1 && (
        //                     <span>↪</span> // symbol to represent hierarchy level
        //                 )}
        //                 {item.imageSrc && (
        //                     <img
        //                         src={item.imageSrc}
        //                         alt={item.nama}
        //                         style={{ marginLeft: '5px', height: '20px' }} // Adjust the size as needed
        //                     />
        //                 )}
        //             </li>
        //         ))}
        //     </ul>
        // </div>

        // tes3
        // <div className="hierarchy-navigation">
        //     <ul>
        //         {categoryPath.map((item, index) => (
        //             <li key={index} className={index === categoryPath.length - 1 ? "current-category" : ""}>
        //                 <a href={`/${item.nama.toLowerCase().replace(/\s+/g, '-')}`}>
        //                     {item.nama}
        //                 </a>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    );
};

export default HierarchyNavigation;