import PropTypes from 'prop-types';

const MessageIcon = ({ active }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? '#00A7E1' : '#1E1E1E'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 2H4C2.897 2 2 2.897 2 4V16C2 17.103 2.897 18 4 18H7V21.767L13.277 18H20C21.103 18 22 17.103 22 16V4C22 2.897 21.103 2 20 2ZM20 16H12.723L9 18.233V16H4V4H20V16Z" />
    </svg>
  );
};

export default MessageIcon;

MessageIcon.propTypes = {
  active: PropTypes.bool.isRequired,
};
