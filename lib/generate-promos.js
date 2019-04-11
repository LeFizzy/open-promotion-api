/**
 * Generate promo codes.
 * @param {Integer} promotionCodeAmount
 * @param {Integer} promotionCodeLength
 * @returns {Array} 
 */
module.exports = ( promotionCodeAmount, promotionCodeLength ) => {
    let promotionCodeArr = [];

    let alphabetArr = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H',
        'I', 'J', 'L', 'L',
        'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X',
        'Y', 'Z'];

    let numArr = [
        1, 2, 3, 4,
        5, 6, 7, 8,
        9];

    for ( let i = 0; i < promotionCodeAmount; i++ ) {
        let promotionCode = '';

        for ( let j = 0; j < promotionCodeLength; j++ ) {
            let rndChar = Math.floor(Math.random() * 2 ) + 1;

            if ( rndChar === 1 ) {
                promotionCode += alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
            } else {
                promotionCode += numArr[Math.floor(Math.random() * numArr.length)];
            }
        }

        promotionCodeArr[i] = promotionCode;
    }

    return promotionCodeArr;
};