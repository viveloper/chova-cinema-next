import axios from 'axios';

const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return (error.response.data.message ?? '') as string;
    } else {
      return error.message;
    }
  } else {
    // Just a stock error
    return null;
  }
};

export default getErrorMessage;
