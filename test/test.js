const openPromotion = require('../index');

describe('Promotion code generation test: ', () => {
    it('Should generate 10 strings of length 7.', (done) => {
        let promoCodeArr = openPromotion.generate( 10, 7);

        if (promoCodeArr.length == 10) done();
    });
});