export const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const getYesterdayStr = () => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1);
  const dateStr = yesterday.getDate() < 10 ? `0${yesterday.getDate()}` : yesterday.getDate();
  return `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${dateStr}`;
}

export const bindingData = (data) => {

  const charData = [['09:30'], ['09:45'], ['10:00'], ['10:15'], 
  ['10:30'], ['10:45'], ['11:00'], ['11:15'],['11:30'], ['11:45'], ['12:00'], ['12:15'],
  ['12:30'], ['12:45'], ['13:00'], ['13:15'],['13:30'], ['13:45'], ['14:00'], ['14:15'],
  ['14:30'], ['14:45'], ['15:00'], ['15:15'],['15:30'], ['15:45'], ['16:00']];
  let bar = [];


  for(let i = 0; i < data.length; ) {
    bar = charData.shift();
    bar.push(Math.max(data[i].high, data[i+5].high, data[i+10].high, data[i+14].high));
    bar.push(data[i].open);
    bar.push(data[i+14].close);
    bar.push(Math.min(data[i].low, data[i+5].low, data[i+10].low, data[i+14].low));
    charData.push(bar);
    i = i+15;
  }

  if(data.length > 0) {
    bar = charData.shift();
    const {minute, high, open, close, low} = data[data.length - 1];
    charData.push([...bar, high, open, close, low]);
  }
  if(charData[0].length === 1) {
    return [];
  }
  return charData;
};