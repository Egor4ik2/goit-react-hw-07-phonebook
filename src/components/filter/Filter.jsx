import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from '../../js/store/filterSlice';
import { selectFilter } from '../../js/store/choises';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div>
      <label>
        Find Contacts
        <input
          type="text"
          onChange={handleFilterChange}
          name="filter"
          value={filterValue}
        />
      </label>
    </div>
  );
};
