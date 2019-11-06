import React from 'react';
import AppContext from './app_context';
import ListProps from './ListProps';

const List: React.FC<ListProps> = (props: ListProps) => {
  const { deleteVal } = props;
  const { selectedValues } = React.useContext(AppContext);
  const handleDelete = (val: string) => {
    deleteVal(val);
  };
  return (
    <div className='List'>
      {selectedValues.map((val: string, key: number) => {
        return (
          <div key={key}>
            <span>
              {val}
              <button onClick={() => handleDelete(val)}>delete</button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
