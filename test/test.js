const assert = require('assert');
const expect = require('chai').expect;
const { countEventsTypes } = require('../api/event/eventService');

describe('Basic json parse test',  () => {
  const rawData  = '{ "event_type": "foo", "data": "lorem", "timestamp": 1607103750 }';
  it('should correctly parse the json', () => {
    const data = JSON.parse(rawData);
    expect(data).to.deep.equal({ "event_type": "foo", data: "lorem", timestamp: 1607103750});
  });
})

const iThrowError = () => {
  throw new Error("Error thrown");
}

describe('Basic json parse test', () => {
  const rawData  = '{ ���+r�����';
  it('should catch exception', () => {
    try {
      const data = JSON.parse(rawData);
    }
    catch(e) {}
    assert.throws(iThrowError, Error, "Error thrown");
  });
})
 
describe('Basic count event types', () => {
  const rawData  = [
    '{ "event_type": "foo", "data": "lorem", "timestamp": 1607103750 }',
    '{ "event_type": "baz", "data": "ipsum", "timestamp": 1607103750 }',
    '{ "event_type": "foo", "data": "dolor", "timestamp": 1607103750 }',
    '{ "event_type": "foo", "data": "lorem", "timestamp": 1607103750 }'
  ];
  it('should count event type', async () => {
    let count;
    for(let i = 0; i < rawData.length; i++) {
      count = await countEventsTypes(rawData[i], 60);
    }
    expect(count).to.deep.equal({ foo: 3, baz: 1 });
  });
})

