const { sum } = require("./calcuator")

it('sum 2 and 2 and the result must e 4', () => {
    expect(sum(2, 2)).toBe(4)
});