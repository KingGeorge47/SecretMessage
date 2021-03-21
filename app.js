let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// to know original length
console.log(secretMessage.length)
// to drop the last string in secretMessage
secretMessage.pop()
// test to confirm changes
console.log(secretMessage)
// check new length after pop()
console.log(secretMessage.length)
// add new strings to secretMessage
secretMessage.push('to', 'Program')
// test to confirm changes
console.log(secretMessage)
// check the index number of 'easily'
console.log(secretMessage.indexOf('easily'))
// replace 'easily' with 'right'
secretMessage[7] = 'right'
// test to confirm changes
console.log(secretMessage)
// remove the first string in secretMessage
secretMessage.shift()
// test to confirm changes
console.log(secretMessage)
// add new first string  in secretMessage
secretMessage.unshift('Programming')
// test to confirm changes
console.log(secretMessage)
// remove strings get, right, the, first, time, and replace with know,
secretMessage.splice(6,5,'know')
// test to confirm changes
console.log(secretMessage)
// print the secretMessage as a sentence
console.log(secretMessage.join())