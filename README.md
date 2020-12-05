# bp-backend

Your exercise is to implement a Non Blocking Producer/Consumer stream processing service.

You are provided with a blackbox executable that spits out an infinite stream of lines of event data encoded in JSON. You can download it here:
* Linux - https://s3-us-west-1.amazonaws.com/bp-interview-artifacts/generator-linux-amd64
* Mac OS X - https://s3-us-west-1.amazonaws.com/bp-interview-artifacts/generator-macosx-amd64
* Windows - https://s3-us-west-1.amazonaws.com/bp-interview-artifacts/generator-windows-amd64.exe

**Service Requirements:**\
It should consume the output of the generator and gather the following stats:\
A count of events by event type.\
A count of words encountered in the data field of the events. (e.g. “the” → 32, “me” → 5)\
Bonus: support the ability to receive the stats above in the last 60 seconds.\
It should expose these stats in an HTTP interface.\
Stream may encounter corrupt JSON lines and should handle these.

**Important Notes:**\
We are looking for simple readable code which is not over-engineered.\
The architecture of your service should obviously decouple the data processing, HTTP handling, be testable, etc.\
You can implement this exercise in any high level language you choose (Java, Scala, C#, python, Node.JS etc.). Please let us know in advance which language you choose.

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
