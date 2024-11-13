// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const array_time = time.split(':');
  let hour = parseInt(array_time[0]);
  let min = parseInt(array_time[1]);
  
  const dict = {
    "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", "15": "quarter", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen", "20": "twenty",
    "21": "twenty-one", "22": "twenty-two", "23": "twenty-three", "24": "twenty-four", "25": "twenty-five", "26": "twenty-six", "27": "twenty-seven", "28": "twenty-eight", "29": "twenty-nine", "30": "half"
  };

  if (min === 0) {
    if (hour === 0) {
      return 'midnight';
    } else if (hour === 12) {
      return 'midday';
    } else {
      return dict[hour.toString()].concat(" o'clock");
    }
  }

  if (min <= 30) {
    return dict[min].concat(' past ').concat(dict[hour]);
  } else {
    return dict[60-min].concat(' to ').concat(dict[hour+1]);
  }


}
module.exports = { convertTimeToWords };