
const TEST_API_URL = "https://sandbox.iexapis.com/stable";
const TEST_TOKEN = "Tpk_6abb666bfe4145f8a5ecd430deded3a2"; 

const API_URL = "https://cloud.iexapis.com/stable";
const TOKEN = "pk_ba9e10986074425682e224be2a0bc6a1"; 

export const getDailyStockPriceUrl = (symbol, date) => {
  return `${TEST_API_URL}/stock/${symbol}/chart/date/${date}?token=${TEST_TOKEN}`;
}


export const getSymbolUrl = () => {
  return `${TEST_API_URL}/ref-data/iex/symbols?token=${TEST_TOKEN}`;
}

export const getCompanyIconUrl = (symbol) => {
  return `${API_URL}/stock/${symbol}/logo?token=${TOKEN}`;
}

export const getTargetPriceUrl = (symbol) => {
  return `${TEST_API_URL}/stock/${symbol}/price-target?token=${TEST_TOKEN}`;
}