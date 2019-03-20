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

    for ( let i = 0; i < promotionCodeAmount; i++ ) {
        let promotionCode = '';

        for ( let j = 0; j < promotionCodeLength; j++ ) {
            promotionCode += alphabetArr[Math.floor(Math.random() * alphabetArr.length)];;
        }

        promotionCodeArr[i] = promotionCode;
    }

    return promotionCodeArr;
};