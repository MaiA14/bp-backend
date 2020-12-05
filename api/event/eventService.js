let events = {}; 
let words = {};

const getEvents = () => {
    return events;
}

const getWords = () => {
    return words;
}

// add return value for testing
const commonCount = async ({ line, collection, property, secondsLimit }) => {
    try {
        const eventLine = JSON.parse(`${line}`);
        const seconds = Math.floor((eventLine.timestamp) % 60);
        if (collection[eventLine[property]] && seconds <= secondsLimit){
            collection[eventLine[property]] += 1;
        }
        else {
            collection[eventLine[property]] = 1;
        }
        return collection;
    }
    catch(e) {}
}

// add return value for testing
const countWords = (line, secondsLimit) => {
    return commonCount({ line, collection: words, property: 'data', secondsLimit });
}

// add return value for testing
const countEventsTypes = (line, secondsLimit) => {
    return commonCount({ line, collection: events, property: 'event_type', secondsLimit });
}

module.exports = {
    getEvents,
    countEventsTypes,
    getWords,
    countWords
  };