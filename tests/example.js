const { expect } = require('chai');
const sum = require('../app/models/example')




// Unit Test
describe('testing function sum ', () => {
    it('should return 4', (done) => {
        expect(sum(2, 2)).to.eq(4);
        done();
    });
});