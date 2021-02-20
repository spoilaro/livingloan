
function surviveMaybe(budget){

    var dt = new Date(Date.now());
    var m = dt.getMonth() + 1;
    var d = 30 - dt.getDate()
    var end_month;
    const one_mont_loan = 650;
    var should_have;
    const one_day_loan = 650 / 30;

    if (1 <= m <=5){
        end_month = 5;
    } else {
        end_month = 12;
    }
    
    should_have = Math.round((end_month - m) * one_mont_loan + d * one_day_loan)
    var current = budget - should_have
    console.log(current);
    
    return current;
   
}
export {surviveMaybe};