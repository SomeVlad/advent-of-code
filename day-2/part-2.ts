import fs from 'fs'
import { calcGameScore } from './calc-game-score'
import {
    Game,
    GameChoice,
    GameChoiceDict2,
    GameState2,
    GameStateDict2,
    RawChoice2,
    RawGame2,
    RawGameState2,
} from './types'

function calcPlayerChoice(
    opponentChoice: GameChoice,
    targetState: RawGameState2
): GameChoice {
    if (GameStateDict2[targetState] === GameState2.DRAW) {
        return opponentChoice as GameChoice
    }

    if (GameStateDict2[targetState] === GameState2.WIN) {
        return opponentChoice + 1 > 3
            ? (opponentChoice + 1) % 3
            : opponentChoice + 1
    }

    return opponentChoice + 2 > 3
        ? (opponentChoice + 2) % 3
        : opponentChoice + 2
}

function readInput(filename: string): Game[] {
    const fileContents = fs.readFileSync(filename, 'utf-8')
    const formattedInput: Game[] = []

    const lines = fileContents.split(/\n/) as RawGame2[]

    lines.forEach(gameString => {
        // const [opponentChoice, , playerChoice] = gameString
        const opponentChoice = GameChoiceDict2[gameString[0] as RawChoice2]
        const rawTargetState = gameString[2] as RawGameState2
        const playerChoice = calcPlayerChoice(opponentChoice, rawTargetState)

        formattedInput.push([opponentChoice, playerChoice])
    })

    return formattedInput
}

export function calculate(filename: string) {
    const gameList = readInput(filename)

    return gameList.map(calcGameScore).reduce((prev, curr) => prev + curr)
}
