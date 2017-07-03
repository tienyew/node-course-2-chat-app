var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = "testUser1";
    var text = "textText1";
    var message = generateMessage(from, text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});
