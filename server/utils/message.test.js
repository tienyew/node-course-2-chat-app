var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = "testUser1";
    var text = "textText1";
    var message = generateMessage(from, text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var location = generateLocationMessage('Admin', 1, 1);
    expect(location.url).toBe('https://www.google.com/maps?q=1,1');
  });
});
