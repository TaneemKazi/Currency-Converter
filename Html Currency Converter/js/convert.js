function convert(){
    var currency1 = document.getElementById('from');
    var input = document.getElementById('input');
    var currency2 = document.getElementById('to');
    var output = document.getElementById('output');

    inputAmount = parseInt(input.value);
    if(currency2.value == 'NAN'){
        if(currency2.value == 'NAN'){
            alert("Please select currency to convert!");
        }
    }
    else if(currency1.value == 'BDT'){
        if(currency2.value == 'BDT'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount*0.012;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount*0.87;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount*0.044;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount*1.86;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount*0.88;
        }
        
    }


    else if(currency1.value == 'USD'){
        if(currency2.value == 'USD'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'BDT'){
            output.value = inputAmount*84.77;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount*73.60;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount*3.75;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount*157.75;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount*74.58;
        }
    }
    else if(currency1.value == 'INR'){
        if(currency2.value == 'INR'){
            output.value = inputAmount;
        }
        
        else if(currency2.value == 'USD'){
            output.value = inputAmount*0.014;
        }
        else if(currency2.value == 'BDT'){
            output.value = inputAmount*1.15;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount*0.051;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount*2.14;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount*1.01;
        }
    }
    else if(currency1.value == 'SAR'){
        if(currency2.value == 'SAR'){
            output.value = inputAmount;
        }
        
        else if(currency2.value == 'USD'){
            output.value = inputAmount*0.27;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount*19.62;
        }
        else if(currency2.value == 'BDT'){
            output.value = inputAmount*22.60;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount*42.06;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount*19.89;
        }
    }
    else if(currency1.value == 'PKR'){
        if(currency2.value == 'PKR'){
            output.value = inputAmount;
        }
        
        else if(currency2.value == 'USD'){
            output.value = inputAmount*0.0063;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount*0.47;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount*0.024;
        }
        else if(currency2.value == 'BDT'){
            output.value = inputAmount*0.54;
        }
        else if(currency2.value == 'RUB'){
            output.value = inputAmount*0.47;
        }
    }
    else if(currency1.value == 'RUB'){
        if(currency2.value == 'RUB'){
            output.value = inputAmount;
        }
        else if(currency2.value == 'BDT'){
            output.value = inputAmount*1.14;
        }
        else if(currency2.value == 'USD'){
            output.value = inputAmount*0.013;
        }
        else if(currency2.value == 'INR'){
            output.value = inputAmount*0.99;
        }
        else if(currency2.value == 'SAR'){
            output.value = inputAmount*0.050;
        }
        else if(currency2.value == 'PKR'){
            output.value = inputAmount*2.12;
        }
        
    }

}