import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

function SortResourcesAndBookmarks({
  resources,
  setFilteredResources,
  lTech,
  setToggledFilter,
}) {
  const [selectedValue, setSelectedValue] = useState('');

  const radios = [
    { name: 'Bookmarks', value: '3' },
    { name: 'Resources', value: '4' },
  ];
  const resetFilter = () => {
    setSelectedValue('');
    setFilteredResources([]);
    setToggledFilter(false);
  };

  const handleChange = (e) => {
    if (e.target.id === '3') {
      setFilteredResources(resources);
      setToggledFilter(false);
    } else {
      const results = resources.filter((obj) => obj.learnedTech.tech.id === lTech.tech.id);
      setFilteredResources(results);
      setToggledFilter(true);
    }
  };
  return (
    <>
      <form>
        {selectedValue !== ''
          ? (
            <button
              type="button"
              className="close-button-round"
              onClick={() => resetFilter()}
            >
              <AiOutlineClose />
            </button>
          )
          : ('')}
        {radios.map((i) => (
          <span key={i.value}>
            <input
              type="radio"
              id={i.value}
              name="sidebar"
              value={i.name}
              checked={selectedValue === i.value}
              onChange={(e) => {
                setSelectedValue(e.target.id);
                handleChange(e);
              }}
              className="radio-none"
            />
            <label
              htmlFor={i.value}
              type="button"
              className={
                selectedValue !== i.value && selectedValue !== ''
                  ? 'border-outline-selected filter-btn hide'
                  : 'filter-btn'
              }

            >{i.name}
            </label>
          </span>
        ))}
      </form>
    </>
  );
}

export default SortResourcesAndBookmarks;

SortResourcesAndBookmarks.propTypes = {
  resources: PropTypes.arrayOf((PropTypes.shape({
    id: PropTypes.number,
    bookmark: PropTypes.shape({
      id: PropTypes.number,
    }),
    objectId: PropTypes.shape({
      id: PropTypes.string,
    }),
    learnedTech: PropTypes.shape({
      id: PropTypes.number,
    }),
  }))).isRequired,
  lTech: PropTypes.shape({
    tech: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
  setFilteredResources: PropTypes.func.isRequired,
  setToggledFilter: PropTypes.func.isRequired,
};
