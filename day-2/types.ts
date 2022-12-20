/**
 * Common Types
 */

export enum GameChoice {
    ROCK = 1,
    PAPER,
    SCISSORS,
}

export const GameScoreDict = {
    WIN: 6,
    DRAW: 3,
    LOSS: 0,
}

export type Game = [GameChoice, GameChoice]

/**
 * Part 1 Types
 */

export const GameChoiceDict1 = {
    A: GameChoice.ROCK,
    B: GameChoice.PAPER,
    C: GameChoice.SCISSORS,
    X: GameChoice.ROCK,
    Y: GameChoice.PAPER,
    Z: GameChoice.SCISSORS,
} as const

export type RawChoice1 = keyof typeof GameChoiceDict1
export type RawGame1 = `${RawChoice1} ${RawChoice1}`

/**
 * Part 2 Types
 */

export const GameChoiceDict2 = {
    A: GameChoice.ROCK,
    B: GameChoice.PAPER,
    C: GameChoice.SCISSORS,
} as const

export enum GameState2 {
    LOSE,
    DRAW,
    WIN,
}

export const GameStateDict2 = {
    X: GameState2.LOSE,
    Y: GameState2.DRAW,
    Z: GameState2.WIN,
} as const

export type RawGameState2 = keyof typeof GameStateDict2

export type RawChoice2 = keyof typeof GameChoiceDict2
export type RawGame2 = `${RawChoice2} ${RawGameState2}`
