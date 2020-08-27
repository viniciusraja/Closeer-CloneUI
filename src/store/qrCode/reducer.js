const initialState = {
  qrCodeUUID: '',
};

const getQrCode = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QR_CODE':
      return {
        ...state,
        qrCodeUUID: action.payload,
      };
    default:
      return state;
  }
};

export default getQrCode;
