import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BiTimeFive } from 'react-icons/bi';
import { TbChecklist } from 'react-icons/tb';
import Link from 'next/link';
import convertTime from '../../../utils/convertTime';
import TechImage from '../../icons/TechImage';
import progressStyleHanlder from '../../../utils/progressStyleHandler';
import shortenString from '../../../utils/shortenString';

export default function GoalCard({
  obj,
  topics,
  setAssignedTopicOrGoal,
  assignedTopicOrGoal,
  assigningBookmark,
  preview,
}) {
  const [show, setShow] = useState(false);
  const handleShowTopics = () => setShow(true);
  const handleCloseTopics = () => setShow(false);
  const [goalTopics, setGoalTopics] = useState([]);
  const progressClass = progressStyleHanlder(obj.progress);

  useEffect(() => {
    if (topics.length > 0) {
      const results = topics.filter((i) => i.goal !== null && i.goal.id === obj.id);
      setGoalTopics(results);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topics, obj.id, obj.progress]);

  const handleClick = (assignedGoal) => {
    if (assigningBookmark) {
      setAssignedTopicOrGoal(assignedGoal);
    }
  };

  const handleKeyDown = (e) => {
    if (e.target.id === 'card') {
      handleClick(obj);
    }
    if (show) {
      handleCloseTopics();
    } else {
      handleShowTopics(true);
    }
  };

  if (preview) {
    return (
      <Link
        href={`/lTech/goals/${obj.id}`}
        passHref
      >
        <div
          role="button"
          tabIndex="0"
          id="card"
          onKeyDown={(e) => handleKeyDown(e, obj)}
          onClick={() => handleClick(obj)}
          className={[progressClass,
            assignedTopicOrGoal.id === obj.id
              ? 'highlight'
              : 'card-background padding-all border-radius-15 no-right-padding card-ratio-fixed',
          ].join(' ')}
        >
          <div className="flex-row align-center">
            <div className="margin-r-md">
              <TechImage obj={obj.learnedTech.tech} />
            </div>
            <div className="flex-col full-width">
              <span className="fnt-large fnt-primary">
                {shortenString(obj.title)}
              </span>
              <span className="fnt-small">
                <IconContext.Provider
                  value={{ size: '1.5em', color: 'white' }}
                >
                  <BiTimeFive />
                </IconContext.Provider>
                <span className="margin-r-sm" />
                <span className="fnt-secondary">
                  {convertTime(obj.lastUpdated)}
                </span>
              </span>
            </div>
            <div className="txt-vertical">
              <span>
                Goal
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link
      href={`/lTech/goals/${obj.id}`}
      passHref
    >
      <div
        role="button"
        tabIndex="0"
        id="card"
        onKeyDown={(e) => handleKeyDown(e, obj)}
        onClick={() => handleClick(obj)}
        className={assignedTopicOrGoal.id === obj.id
          ? 'highlight'
          : 'flex-row card-background padding-all border-radius-15'}
      >
        <div className="flex-row">
          <div className="margin-r-md">
            <TechImage obj={obj.learnedTech.tech} />
          </div>
          <div className="flex-col full-width">
            <div>
              <span>
                {shortenString(obj.title)}
              </span>
            </div>
            <div className="fnt-small">
              <span>
                <IconContext.Provider
                  value={{ size: '1.5em', color: 'white' }}
                >
                  <BiTimeFive />
                </IconContext.Provider>
                <span className="margin-r-sm" />
                <span className="fnt-secondary">
                  {convertTime(obj.lastUpdated)}
                </span>
              </span>
              <span className="margin-r-md" />
              {obj.progress != null ? (
                <>
                  <span>
                    <IconContext.Provider
                      value={{ size: '1.5em', color: 'white' }}
                    >
                      <TbChecklist />
                    </IconContext.Provider>
                    <span className="fnt-secondary">
                      {goalTopics.length}
                    </span>
                    <span className="margin-r-sm" />
                  </span>
                  <div className="progress_container">
                    <ProgressBar
                      bsPrefix="progress"
                      now={obj.progress}
                      label={`${obj.progress}%`}
                    />
                  </div>
                </>
              )
                : ('')}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

GoalCard.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    progress: PropTypes.number,
    lastUpdated: PropTypes.string,
    learnedTech: PropTypes.shape({
      id: PropTypes.number,
      tech: PropTypes.shape({
        image_url: PropTypes.string,
      }),
    }),
  }).isRequired,
  topics: PropTypes.arrayOf((PropTypes.shape({
    id: PropTypes.string,
  }))),
  setAssignedTopicOrGoal: PropTypes.func,
  assignedTopicOrGoal: PropTypes.shape({
    id: PropTypes.string,
  }),
  assigningBookmark: PropTypes.bool,
  preview: PropTypes.bool,
};

GoalCard.defaultProps = {
  topics: [],
  setAssignedTopicOrGoal: () => {},
  assignedTopicOrGoal: {},
  assigningBookmark: false,
  preview: false,
};
