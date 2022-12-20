import fs from 'fs'
import { calcGameScore } from './calc-game-score'
import { Game, GameChoiceDict1, RawChoice1, RawGame1 } from './types'

function readInput(filename: string): Game[] {
    const fileContents = fs.readFileSync(filename, 'utf-8')
    const formattedInput: Game[] = []

    const lines = fileContents.split(/\n/) as RawGame1[]

    lines.forEach(gameString => {
        // const [opponentChoice, , playerChoice] = gameString
        const opponentChoice = gameString[0] as RawChoice1
        const playerChoice = gameString[2] as RawChoice1

        formattedInput.push([
            GameChoiceDict1[opponentChoice],
            GameChoiceDict1[playerChoice],
        ])
    })

    return formattedInput
}

export function calculate(filename: string) {
    const gameList = readInput(filename)

    return gameList.map(calcGameScore).reduce((prev, curr) => prev + curr)
}
