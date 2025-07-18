const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machinescore = document.querySelector('#machine-score')

let HumanScoreNumbe = 0
let MachineScoreNumbe = 0


const PlayHuman = (humanChoice) => {

    PlayTheGame(humanChoice, PlayMachine())
}

const PlayMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const ramdomNumber = Math.floor(Math.random() * 3)

    return choices[ramdomNumber]
}
 
const PlayTheGame = (human, machine) => {

    console.log('humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {

        result.innerHTML = 'Deu empate!'

    } else if (
        human === 'papel' && machine === 'pedra' ||
        human === 'pedra' && machine === 'tesoura' ||
        human === 'tesoura' && machine === 'papel'
    ) {
        result.innerHTML = 'Você ganhou!'
        HumanScoreNumbe++
        humanScore.innerHTML = HumanScoreNumbe

    } else {
        result.innerHTML = 'Você perdeu para Guilherme'
        MachineScoreNumbe++
        machinescore.innerHTML =  MachineScoreNumbe
    }

}








































