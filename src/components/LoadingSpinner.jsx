
// import { css } from '@emotion/react';
// import { BeatLoader } from 'react-spinners';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// export default function LoadingSpinner() {
//   return (
//     <div className="loading-spinner">
//       <BeatLoader css={override} size={15} color={"#00BFFF"} loading={true} />
//     </div>
//   );
// }
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

// CSS override for positioning the loader at the top center
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  
`;

// Additional styles to center the spinner at the top of the page
const spinnerContainerStyle = {
  position: 'absolute',
  top: '20%',  // Adjust this value to move the spinner further down or up
  left: '50%',
  transform: 'translateX(-50%)',
};

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner" style={spinnerContainerStyle}>
      <BeatLoader css={override} size={15} color={"#CC0000"} loading={true} />
    </div>
  );
}
