
function surviveMaybe(budget){
    if (budget < 1000) {
        return "Lose"
    } else {
        return "Live"
    }
}
export {surviveMaybe};