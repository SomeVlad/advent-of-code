const { calcGameScore } = require('./calc-game-score')
const { calculate: calculatePart1 } = require('./part-1')
const { calculate: calculatePart2 } = require('./part-2')
const { GameChoice } = require('./types')

describe('calcGameScore', function () {
    it('should calculate draws correctly', function () {
        expect(calcGameScore([GameChoice.ROCK, GameChoice.ROCK])).toBe(3 + 1)
        expect(calcGameScore([GameChoice.PAPER, GameChoice.PAPER])).toBe(3 + 2)
        expect(calcGameScore([GameChoice.SCISSORS, GameChoice.SCISSORS])).toBe(
            3 + 3
        )
    })

    it('should calculate wins correctly', function () {
        expect(calcGameScore([GameChoice.ROCK, GameChoice.PAPER])).toBe(6 + 2)
        expect(calcGameScore([GameChoice.PAPER, GameChoice.SCISSORS])).toBe(
            6 + 3
        )
        expect(calcGameScore([GameChoice.SCISSORS, GameChoice.ROCK])).toBe(
            6 + 1
        )
    })

    it('should calculate losses correctly', function () {
        expect(calcGameScore([GameChoice.ROCK, GameChoice.SCISSORS])).toBe(
            0 + 3
        )
        expect(calcGameScore([GameChoice.PAPER, GameChoice.ROCK])).toBe(0 + 1)
        expect(calcGameScore([GameChoice.SCISSORS, GameChoice.PAPER])).toBe(
            0 + 2
        )
    })
})

describe('calculatePart1', function () {
    it('should work with test input', function () {
        expect(calculatePart1('day-2/test-input')).toBe(15)
    })
})

describe('calculatePart2', function () {
    it('should work with test input', function () {
        expect(calculatePart2('day-2/test-input')).toBe(12)
    })
})
