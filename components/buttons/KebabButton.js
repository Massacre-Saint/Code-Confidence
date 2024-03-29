import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { FiMoreVertical } from 'react-icons/fi';

function KebabButton({
  handleClick,
  node,
  isResource,
  forBookmarkSidebar,
}) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      type="button"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="border-none
      background-none
      fnt-primary"
    >
      {children}
    </button>
  ));
  CustomToggle.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  if (forBookmarkSidebar) {
    return (
      <>
        <Dropdown className="dropdown-inline">
          <Dropdown.Toggle as={CustomToggle}>
            <FiMoreVertical size={17} />
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="fit-content"
          >
            {node.url === null
              ? (
                <>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleClick(node, isResource)}
                  >
                    Add Folder
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    id="delete"
                  >
                    Delete All
                  </Dropdown.Item>
                </>
              )
              : (
                <>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleClick(node, isResource)}
                  >
                    Add
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    id="delete"
                  >
                    Delete
                  </Dropdown.Item>
                </>
              )}
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
  return (
    <>
      <Dropdown className="dropdown-inline">
        <Dropdown.Toggle as={CustomToggle}>
          <FiMoreVertical size={17} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="fit-content" onClick={(e) => handleClick(e)}>
          <Dropdown.Item id="edit" eventKey="1">Edit</Dropdown.Item>
          <Dropdown.Item id="delete" eventKey="2">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default KebabButton;

KebabButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isResource: PropTypes.shape({
    id: PropTypes.number,
  }),
  node: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }),
  forBookmarkSidebar: PropTypes.bool,
};

KebabButton.defaultProps = {
  node: {},
  isResource: undefined,
  forBookmarkSidebar: false,
};
