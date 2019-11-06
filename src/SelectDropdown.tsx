import React from 'react';
import AppContext from './app_context';
import SelectDropdownProps from './SelectDropdownProps';

const SelectDropdown: React.FC<SelectDropdownProps> = (
  props: SelectDropdownProps
) => {
  const { selectVal, addVal } = props;
  const { selectValues } = React.useContext(AppContext);
  const handleSelect = event => {
    selectVal(event.target.value);
  };
  return (
    <div className='SelectDropdown'>
      <select onChange={handleSelect}>
        {selectValues.map((val: string, key: number) => {
          return (
            <option value={val} key={key}>
              {val}
            </option>
          );
        })}
      </select>
      <button onClick={addVal}>Add to list</button>
    </div>
  );
};

export default SelectDropdown;
