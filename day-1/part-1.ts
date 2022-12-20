const fs = require('fs')

function getElfCaloryListFromFile(filename: string) {
    const fileContents: string = fs.readFileSync(filename, 'utf-8')
    const caloryByElfList = [] as number[]

    fileContents.split(/\n\n/).forEach(elfMeals => {
        const caloryByElf = elfMeals.split(/\n/).reduce((prev, curr) => {
            return prev + Number.parseInt(curr)
        }, 0)

        caloryByElfList.push(caloryByElf)
    })

    return caloryByElfList
}

export function calculate1(filename: string) {
    const caloryByElfList = getElfCaloryListFromFile(filename)

    return Math.max(...caloryByElfList)
}

export function calculate2(filename: string) {
    const caloryByElfList = getElfCaloryListFromFile(filename)

    caloryByElfList.sort((a, b) => b - a)
    caloryByElfList.length = 3

    return caloryByElfList.reduce((prev, curr) => prev + curr)
}