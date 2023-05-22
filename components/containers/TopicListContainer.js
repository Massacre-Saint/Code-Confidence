import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import FilterModal from '../modals/FilterModal';
import TopicList from './TopicList';

function TopicListContainer({
  topics,
  goals,
  resources,
  setFilteredGoals,
  setFilteredTopics,
  filteredTopics,
  onUpdate,
  handleClose,
  edit,
}) {
  return (
    <div className="center">
      <div className="space-between margin-sides">
        <SearchBar array={topics} setArray={setFilteredTopics} />
        <FilterModal
          goals={goals}
          setFilteredGoals={setFilteredGoals}
          setFilteredTopics={setFilteredTopics}
        />
      </div>
      <div className="bottom-border-inset" />
      <div className="show-all-list-container">
        <TopicList
          topics={filteredTopics}
          goals={goals}
          onUpdate={onUpdate}
          handleClose={handleClose}
          edit={edit}
          resources={resources}
        />
      </div>
    </div>
  );
}

export default TopicListContainer;

TopicListContainer.propTypes = {
  goals: PropTypes.arrayOf((PropTypes.shape({
    id: PropTypes.string,
  }))).isRequired,
  topics: PropTypes.arrayOf((PropTypes.shape({
    id: PropTypes.string,
  }))).isRequired,
  onUpdate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  resources: PropTypes.arrayOf((PropTypes.shape({
    id: PropTypes.number,
    bookmark: PropTypes.shape({
      id: PropTypes.number,
    }),
    objectId: PropTypes.shape({
      id: PropTypes.string,
    }),
    tech: PropTypes.shape({
      id: PropTypes.number,
    }),
  }))).isRequired,
  setFilteredGoals: PropTypes.func.isRequired,
  setFilteredTopics: PropTypes.func.isRequired,
  filteredTopics: PropTypes.arrayOf((
    PropTypes.shape({
    })
  )).isRequired,
};
