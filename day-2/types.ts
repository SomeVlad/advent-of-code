export enum GameChoice {
    ROCK = 1,
    PAPER,
    SCISSORS,
}

export const GameChoiceDict = {
    A: GameChoice.ROCK,
    B: GameChoice.PAPER,
    C: GameChoice.SCISSORS,
    X: GameChoice.ROCK,
    Y: GameChoice.PAPER,
    Z: GameChoice.SCISSORS,
} as const

export type RawChoice = keyof typeof GameChoiceDict
export type RawGame = `${RawChoice} ${RawChoice}`

export type Game = [GameChoice, GameChoice]

export const GameScoreDict = {
    WIN: 6,
    DRAW: 3,
    LOSS: 0,
}
