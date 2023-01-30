const { groupBy } = require('../groupBy');
const { NL } = require('../../non-lazy');


describe('groupBy 테스트', () => {
  describe('lazy', () => {
    it('case: 1, Advanced', () => {
      const decimalNumbers = [2.3, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 3.2, 2.6, 2.8];
      const groupByFloor = groupBy(Math.floor);

      expect(groupByFloor(decimalNumbers)).toEqual(NL.groupBy(decimalNumbers, Math.floor));
    });

  });
});
