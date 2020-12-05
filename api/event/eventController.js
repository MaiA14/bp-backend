const counterService = require('./eventService');

const getCommonCount = async (req, res, countFunc) => {
    try {
        const count = await countFunc();
        res.send(count);
    }
    catch(e) {
        console.error(e);
    }  
}

const getEventsTypeCount = (req, res) => {
    getCommonCount(req, res, counterService.getEvents)
}

const getWordsCount = (req, res) => {
    getCommonCount(req, res, counterService.getWords)
}

module.exports = {
    getEventsTypeCount,
    getWordsCount
  };