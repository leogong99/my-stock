import { getParameterByName } from "../helpers/utils";


const TEST_API_URL = "https://sandbox.iexapis.com/stable";
const TEST_TOKEN = "Tpk_6abb666bfe4145f8a5ecd430deded3a2"; 

const PROD_API_URL = "https://cloud.iexapis.com/stable";
const PROD_TOKEN = "pk_ba9e10986074425682e224be2a0bc6a1";

const getURLandToken = () => {
  if(getParameterByName('test') === "false") {
    return {
      API_URL: PROD_API_URL,
      TOKEN: PROD_TOKEN
    }
  }
  return {
    API_URL: TEST_API_URL,
    TOKEN: TEST_TOKEN
  };
};

export const getDailyStockPriceUrl = (symbol, date) => {
  const {API_URL, TOKEN} = getURLandToken();
  return `${API_URL}/stock/${symbol}/chart/date/${date}?token=${TOKEN}`;
}

export const searchSymbolUrl = (fragment) => {
  const {API_URL, TOKEN} = getURLandToken();
  return `${API_URL}/search/${fragment}?token=${TOKEN}`;
}

export const getCompanyIconUrl = (symbol) => {
  return `${PROD_API_URL}/stock/${symbol}/logo?token=${PROD_TOKEN}`;
}

export const getTargetPriceUrl = (symbol) => {
  return `${TEST_API_URL}/stock/${symbol}/price-target?token=${TEST_TOKEN}`;
}