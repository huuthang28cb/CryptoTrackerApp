// API: https://www.coingecko.com/en/api/documentation


// API CoinList
export const CoinList = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

// API SingleCoin
export const SingleCoin = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}`;

// API Historical Chart
export const HistoricalChart = (id, days = 365, currency) =>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

// API TrendingCoins
export const TrendingCoins = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;