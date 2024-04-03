import axios from 'axios';

const graphDataApiCall = async () => {
  const url =
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

  const data = await axios
    .get(url)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })

    // eslint-disable-next-line no-unused-vars
    .catch((e) => {});
  return data;
};

const cryptoDataApiCall = async () => {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  const data = await axios
    .get(url)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })

    // eslint-disable-next-line no-unused-vars
    .catch((e) => {});
  return data;
};

export { graphDataApiCall, cryptoDataApiCall };
