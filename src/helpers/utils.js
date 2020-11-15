export const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const getTodayStr = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

export const bindingData = (data) => {
  const charData = [];
  let bar = [];
  for(let i = 0; i < data.length - 14; ) {
    bar = [data[i].minute];
    bar.push(Math.max(data[i].high, data[i+4].high, data[i+9].high, data[i+14].high));
    bar.push(data[i].open);
    bar.push(data[i+14].close);
    bar.push(Math.min(data[i].low, data[i+4].low, data[i+9].low, data[i+14].low));
    charData.push(bar);
    i = i+14;
  }
  if(data.length > 0) {
    const {minute, high, open, close, low} = data[data.length - 1];
    charData.push([minute, high, open, close, low]);
  }
  return charData;
};