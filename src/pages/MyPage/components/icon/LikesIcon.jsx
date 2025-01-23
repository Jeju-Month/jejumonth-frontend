import PropTypes from 'prop-types';

const LikesIcon = ({ active }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.236 12.0567L19.53 16.1367L21.009 16.3927L21.714 12.3127L20.236 12.0567ZM13.245 21.2497H8.59596V22.7497H13.245V21.2497ZM7.68496 20.4127L6.87296 11.0197L5.37796 11.1487L6.19096 20.5417L7.68496 20.4127ZM19.53 16.1367C19.023 19.0667 16.381 21.2497 13.245 21.2497V22.7497C17.071 22.7497 20.371 20.0807 21.009 16.3927L19.53 16.1367ZM13.255 5.09972L12.592 9.14472L14.072 9.38672L14.735 5.34272L13.255 5.09972ZM7.18796 10.2457L8.62696 9.00572L7.64696 7.86972L6.20996 9.10972L7.18796 10.2457ZM11.244 4.97172L11.72 3.13772L10.268 2.76172L9.79196 4.59472L11.244 4.97172ZM12.438 2.77772L12.583 2.82472L13.042 1.39672L12.897 1.34972L12.438 2.77772ZM10.523 6.81572C10.8352 6.23163 11.0772 5.61266 11.244 4.97172L9.79196 4.59472C9.65417 5.12101 9.4555 5.62944 9.19996 6.10972L10.523 6.81572ZM12.583 2.82472C12.7254 2.86838 12.8547 2.94711 12.9588 3.05368C13.0629 3.16026 13.1386 3.29128 13.179 3.43472L14.631 3.05872C14.528 2.66991 14.3281 2.31354 14.0501 2.0229C13.772 1.73225 13.4258 1.51682 13.042 1.39672L12.583 2.82472ZM11.72 3.13772C11.7396 3.06555 11.7748 2.99858 11.8232 2.94155C11.8716 2.88452 11.932 2.83883 12 2.80772L11.349 1.45672C10.817 1.71272 10.417 2.18672 10.268 2.76172L11.72 3.13772ZM12 2.80772C12.1369 2.74275 12.2934 2.73203 12.438 2.77772L12.897 1.34972C12.3862 1.18645 11.8324 1.22473 11.349 1.45672L12 2.80772ZM14.154 10.9837H19.334V9.48372H14.154V10.9837ZM14.735 5.34272C14.8607 4.58251 14.8252 3.80436 14.631 3.05872L13.179 3.43572C13.3208 3.97891 13.3467 4.54587 13.255 5.09972L14.735 5.34272ZM8.59596 21.2497C8.36698 21.2493 8.14644 21.1632 7.97782 21.0082C7.80919 20.8533 7.70471 20.6409 7.68496 20.4127L6.19096 20.5417C6.243 21.1439 6.51884 21.7047 6.96407 22.1134C7.40929 22.5222 7.99156 22.7492 8.59596 22.7497V21.2497ZM8.62696 9.00572C9.30696 8.41972 10.039 7.72272 10.524 6.81572L9.19996 6.10972C8.85396 6.75872 8.30196 7.30572 7.64696 7.86972L8.62696 9.00572ZM21.714 12.3127C21.7742 11.9657 21.7578 11.6097 21.6659 11.2697C21.5741 10.9297 21.409 10.6139 21.1823 10.3444C20.9556 10.0749 20.6726 9.85819 20.3534 9.70952C20.0341 9.56085 19.6862 9.48378 19.334 9.48372V10.9837C19.901 10.9837 20.334 11.4957 20.236 12.0567L21.714 12.3127ZM12.592 9.14472C12.5547 9.3713 12.5671 9.60328 12.6285 9.82456C12.6898 10.0458 12.7986 10.2511 12.9472 10.4262C13.0958 10.6012 13.2807 10.7419 13.4891 10.8383C13.6975 10.9348 13.9243 10.9837 14.154 10.9837V9.48372C14.1418 9.48378 14.1297 9.48214 14.1186 9.477C14.1076 9.47186 14.0978 9.46434 14.0899 9.45498C14.0821 9.44563 14.0764 9.43466 14.0733 9.42286C14.0702 9.41106 14.0698 9.39872 14.072 9.38672L12.592 9.14472ZM6.87296 11.0197C6.86077 10.8749 6.88204 10.7293 6.93697 10.5948C6.99189 10.4602 7.07791 10.3406 7.18796 10.2457L6.20796 9.10872C5.91811 9.35886 5.69174 9.6742 5.54745 10.0288C5.40316 10.3835 5.34508 10.7673 5.37796 11.1487L6.87296 11.0197Z"
        fill={active ? '#00A7E1' : '#1E1E1E'}
      />
      <path
        opacity="0.5"
        d="M3 10.2353L3.747 10.1713C3.72978 9.97924 3.63924 9.80117 3.49416 9.6741C3.34909 9.54703 3.16064 9.48073 2.96796 9.48897C2.77528 9.4972 2.59318 9.57935 2.45948 9.71834C2.32578 9.85733 2.25076 10.0425 2.25 10.2353H3ZM4.719 21.4073L3.747 10.1713L2.253 10.2993L3.224 21.5363L4.719 21.4073ZM3.75 21.5143V10.2343L2.25 10.2353V21.5133L3.75 21.5143ZM3.224 21.5363C3.22095 21.5 3.22549 21.4634 3.23733 21.4289C3.24918 21.3944 3.26807 21.3628 3.2928 21.336C3.31753 21.3092 3.34757 21.2878 3.381 21.2732C3.41443 21.2587 3.45053 21.2512 3.487 21.2513V22.7513C4.213 22.7513 4.781 22.1293 4.719 21.4073L3.224 21.5363ZM3.487 21.2513C3.633 21.2513 3.75 21.3703 3.75 21.5143L2.25 21.5133C2.25 22.1953 2.803 22.7513 3.487 22.7513V21.2513Z"
        fill={active ? '#00A7E1' : '#1E1E1E'}
      />
    </svg>
  );
};

export default LikesIcon;

LikesIcon.propTypes = {
  active: PropTypes.bool.isRequired,
};
