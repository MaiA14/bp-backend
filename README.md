# bp-backend

A Non Blocking Producer/Consumer stream processing service.

You are provided with a blackbox executable that spits out an infinite stream of lines of event data encoded in JSON. 

**Service Requirements:**\
It should consume the output of the generator and gather the following stats:\
A count of events by event type.\
A count of words encountered in the data field of the events. (e.g. “the” → 32, “me” → 5)\
support the ability to receive the stats above in the last 60 seconds.\
It should expose these stats in an HTTP interface.\
Stream may encounter corrupt JSON lines and should handle these.

## Installation

Before running this project install node modules with this command:

```
npm install or npm i
```

## Run project:
```
node server or nodemon server
```

## Run tests: 
```
npm test
```
