function convertTimeToWords(timeString){
  const arrayTime = timeString.split(':').map(Number)
  const hour = arrayTime[0]
  const min = arrayTime[1]

  const dict = {
    '0':'', '1':'one', '2':'two', '3': 'three', '4':'four', '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine', '10':'ten',
    '11':'eleven', '12':'twelve', '14':'fourteen', '15':'fifteen', '16':'sixteen', '17':'seventeen', '18':'eighteen', '19':'nineteen', '20':'twenty',
    '21':'twenty one', '22':'twenty two', '23':'twenty three', '24':'twenty four', '25':'twenty five', '26':'twenty six', '27':'twenty seven', '28':'twenty eight',
    '29':'twenty nine'
  }
  // if 00 then midnight, midday
  let output = ``
  if (min === 0){
    if(hour == 12){
      output += `midday`;
    }
    else if(hour == 0){
      output += `midnight`;
    }
    else {
      output += dict[hour.toString()].concat(` o'clock`);
    }
  }

  else if (min <= 30){
    if (min === 30){
      output += `half past `.concat(dict[hour.toString()]);
    }
    else if (min == 15){
      output += `quarter past `.concat(dict[hour.toString()]);
    }
    else {
      output += dict[min.toString()].concat(' past ').concat(dict[hour.toString()]);
    }
  }

  else{
    if(min === 45){
      output += 'quarter to '.concat(dict[(hour + 1).toString()]);
    }
    else{
      output += dict[(60-min).toString()].concat(' to ').concat(dict[(hour + 1).toString()]);
    }
  }

  return output;
}

// console.log(convertTimeToWords('2:38'))
module.exports = {convertTimeToWords};