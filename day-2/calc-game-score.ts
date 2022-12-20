import { Game, GameScoreDict } from './types'

export function calcGameScore(game: Game): number {
    const opponentChoice = game[0]
    const playerChoice = game[1]

    const difference = playerChoice - opponentChoice

    if (difference === 0) {
        return playerChoice + GameScoreDict.DRAW
    }

    if (difference === 1 || difference === -2) {
        return playerChoice + GameScoreDict.WIN
    }

    return playerChoice
}
