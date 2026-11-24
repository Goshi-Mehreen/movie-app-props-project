import Dropdown from "./DropDown";
import { FILTER_DATA } from "../utility/data";

function MovieFilter({filters,handleFilterChange}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {Object.values(FILTER_DATA).map((filter) => (
        <Dropdown
          key={filter.name}
          label={filter.label}
          name={filter.name}
          options={filter.options}
          value={filters[filter.name]}
          onChange={(e) => 
          handleFilterChange(filter.name,e.target.value)
        
            }  />
      ))}

    </div>
  );
}

export default MovieFilter;
