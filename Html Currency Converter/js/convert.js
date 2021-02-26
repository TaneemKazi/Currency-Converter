function convert(){
    var currency1 = document.getElementById('from');
    var input = document.getElementById('input');
    var currency2 = document.getElementById('to');
    var output = document.getElementById('output');

    inputAmount = parseInt(input.value);

    if(currency1.value == 'BDT'){
        if(currency2.value == 'BDT'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount;
        }
        
    }
    else if(currency1.value == 'USD'){
        if(currency2.value == 'BDT'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount;
        }
    }
    else if(currency1.value == 'INR'){
        if(currency2.value == 'BDT'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount;
        }
    }
    else if(currency1.value == 'SAR'){
        if(currency2.value == 'BDT'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount;
        }
    }
    else if(currency1.value == 'PKR'){
        if(currency2.value == 'BDT'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount;
        }
    }
    else if(currency1.value == 'RUB'){
        if(currency2.value == 'BDT'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount;
        }
    }

}