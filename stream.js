const { spawn } = require('child_process');
const StringDecoder = require('string_decoder').StringDecoder;
const counterService = require('./api/event/eventService');

const readStream = () => {
  const child = spawn('./generator.sh');
  const decoder = new StringDecoder('utf8');
  child.stdout.on('data', (chunk) => {
    const textChunk = decoder.write(chunk);
    countsFromStream(textChunk);
  });
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

const countsFromStream = (textChunk) => {
  counterService.countEventsTypes(textChunk,  secondsLimit = 60);
  counterService.countWords(textChunk, secondsLimit = 60);
}

module.exports = {
  readStream
};