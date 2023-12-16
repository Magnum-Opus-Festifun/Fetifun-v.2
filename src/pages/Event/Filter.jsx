// Filter.jsx
import React from 'react';

const Filter = ({ categories, handleCategoryChange }) => {
  const handleChange = (categoryId) => {
    const updatedCategories = [...categories];
    const categoryIndex = updatedCategories.findIndex((category) => category.id === categoryId);

    if (categoryIndex !== -1) {
      updatedCategories[categoryIndex].selected = !updatedCategories[categoryIndex].selected;
    }

    handleCategoryChange(updatedCategories.filter((category) => category.selected).map((category) => category.id));
  };

  const styles = {
    filterContainer: {
      // Gaya umum
    },
    ul: {
      listStyleType: 'none',
      padding: 0,
    },
    li: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      marginBottom: '5px',
    },
    selected: {
      backgroundColor: '#e6f7ff', // Ganti warna latar belakang sesuai kebutuhan
    },
    checkbox: {
      marginRight: '5px',
      width: '20px',
      height: '20px',
      border: '1px solid #000', // Ganti gaya border sesuai kebutuhan
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px', // Sesuaikan ukuran font dengan kebutuhan
    },
  };

  return (
    <div style={styles.filterContainer}>
      <h2>Filter by Category</h2>
      <ul style={styles.ul}>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleChange(category.id)}
            style={{ ...styles.li, ...(category.selected ? styles.selected : {}) }}
          >
            <span style={styles.checkbox}>{category.selected ? '✔️' : ''}</span>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
