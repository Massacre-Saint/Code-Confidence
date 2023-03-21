import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FcFolder } from 'react-icons/fc';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import Image from 'next/image';

function Bookmark({
  node, bookmarks, resources, toggledFilter, handleShowForm,
}) {
  const [showChildren, setShowChildren] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  const isResource = resources.find((resource) => resource.bookmark.id === node.id);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowChildren(false);
    } else {
      setShowChildren(false);
    }
  };
  const shortenedString = (string) => {
    if (string.length > 40) {
      const shorten = string.slice(0, 40);
      return `${shorten}`;
    }
    return string;
  };
  useEffect(() => {
  }, [bookmarks, toggledFilter]);
  return (
    <>
      {!isResource && toggledFilter
        ? (
          <></>
        )
        : (
          <>
            <div className="list">
              <li>
                {node.url === null ? (
                  <>
                    <span
                      style={{ paddingLeft: hasChildren ? 8 : 10 }}
                      tabIndex="0"
                      role="button"
                      onKeyDown={handleKeyDown}
                      onClick={() => setShowChildren(!showChildren)}
                    >
                      <FcFolder />
                      {shortenedString(node.title)}
                    </span>
                    <span>
                      {isResource
                        ? (
                          <>
                            <button
                              type="button"
                              id="showForm"
                              onClick={() => handleShowForm(node, isResource)}
                            >
                              <AiFillEdit />
                            </button>
                            <button type="button">
                              <AiFillDelete />
                            </button>
                          </>
                        )
                        : (
                          <button
                            type="button"
                            id="showForm"
                            onClick={() => handleShowForm(node, isResource)}
                          >
                            <BiBookAdd />
                          </button>
                        )}
                    </span>
                  </>
                ) : (
                  <>
                    <span style={{ paddingLeft: hasChildren ? 8 : 10 }}>
                      <Image
                        width={15}
                        height={15}
                        src={
                            `https://www.google.com/s2/favicons?domain=${node.url}`
                          }
                      />
                      {shortenedString(node.title)}
                    </span>
                    <span>
                      {isResource
                        ? (
                          <>
                            <button
                              type="button"
                              id="showForm"
                              onClick={() => handleShowForm(node, isResource)}
                            >
                              <AiFillEdit />
                            </button>
                            <button type="button">
                              <AiFillDelete />
                            </button>
                          </>
                        )
                        : (
                          <button
                            type="button"
                            id="showForm"
                            onClick={() => handleShowForm(node, isResource)}
                          >
                            <BiBookAdd />
                          </button>
                        )}
                    </span>
                  </>
                )}
                {hasChildren && !showChildren && (
                <ul>
                  {node.children.map((child) => (
                    <Bookmark
                      key={child.id}
                      node={child}
                      bookmarks={bookmarks}
                      resources={resources}
                      toggledFilter={toggledFilter}
                      handleShowForm={handleShowForm}
                    />
                  ))}
                </ul>
                )}
              </li>
            </div>
          </>
        )}
    </>
  );
}

export default Bookmark;
Bookmark.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.arrayOf((PropTypes.shape({
      id: PropTypes.number,
    }))),
  }).isRequired,
  bookmarks: PropTypes.arrayOf((PropTypes.shape({
    obj: PropTypes.shape({
      id: PropTypes.number,
    }),
  }))).isRequired,
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
  toggledFilter: PropTypes.bool.isRequired,
  handleShowForm: PropTypes.func.isRequired,
};
