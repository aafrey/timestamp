const dateParser = (req) => {
  var natural,
      unix,
      date = req.params.date,
      dateFromPath = date.split('%20').join(' ')
  
  if(new Date(parseInt(dateFromPath)) == 'Invalid Date' && new Date(dateFromPath) == 'Invalid Date') {
    return {
      natural: null,
      unix: null
    }
  }
  
  if (parseInt(date).toString() !== 'NaN') {
    natural = new Date(parseInt(date)).toDateString()
    unix = dateFromPath
    console.log(natural, unix)
  } 
  
  else {
    natural = new Date(dateFromPath).toDateString()
    unix = (new Date(natural).valueOf() / 1000).toString()
    console.log('hello')
  }
  
  var dates = {
    'unix': unix,
    'natural': natural
  }
  
    return dates
}

module.exports = dateParser