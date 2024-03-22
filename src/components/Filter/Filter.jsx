
const Filter = ({ sorting, handleSortingChange }) => {
  return (
    <div className="filtered">
      <div className="select">
        <label htmlFor="filter"></label>
        <select name="filter" value={sorting} onChange={handleSortingChange}>
          <option value="popular">По популярности</option>
          <option value="price-asc">По возрастанию цены</option>
          <option value="price-desc">По убыванию цены</option>
          <option value="name-asc">По наименованию (A-Z)</option>
          <option value="name-desc">По наименованию (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;