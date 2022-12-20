import fs from 'fs'
import {
    Game,
    GameChoiceDict,
    GameScoreDict,
    RawChoice,
    RawGame,
} from './types'

function readInput(filename: string): Game[] {
    const fileContents = fs.readFileSync(filename, 'utf-8')
    const formattedInput: Game[] = []

    const lines = fileContents.split(/\n/) as RawGame[]

    lines.forEach(gameString => {
        // const [opponentChoice, , playerChoice] = gameString
        const opponentChoice = gameString[0] as RawChoice
        const playerChoice = gameString[2] as RawChoice

        formattedInput.push([
            GameChoiceDict[opponentChoice],
            GameChoiceDict[playerChoice],
        ])
    })

    return formattedInput
}

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

export function calculate(filename: string) {
    const gameList = readInput(filename)

    return gameList.map(calcGameScore).reduce((prev, curr) => prev + curr)
}
