let AL = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety'
}

module.exports = function toReadable (number) {
    let strNum = number.toString();
    let unStr = "";
    let newStr = "";
    for(let i = 0; i < strNum.length ; i+=3)
    {
        if(strNum.length - i >= 1)
        {
            if(strNum[i+1] !== undefined)
            {
                unStr += strNum[i + 1];
            }
        }
        if(strNum.length - i >= 2)
        {
            unStr += strNum[i + 2];
        }
        if(AL.hasOwnProperty(strNum[i]))
        {
            if((strNum.length - i - 3) === 0)
            {
                newStr += AL[strNum[i]];
                newStr += ' hundred';
            }
        }
        if(strNum.length === 2)
        {
            unStr = "";
            if(strNum.length - i >= 0)
            {
                unStr += strNum[i];
            }
            if(strNum.length - i >= 1)
            {
                unStr += strNum[i + 1];
            }
            if(unStr === undefined)
            {
                unStr = "";
            }
        }
        if(AL.hasOwnProperty(strNum[i]) && strNum.length === 1)
        {
            newStr += AL[strNum[i]];
        }
        if(AL.hasOwnProperty(unStr))
        {
            newStr += ' ';
            if(newStr === ' ')
            {
                newStr = '';
            }
            newStr += AL[unStr];
        }
        else
        {
            let unStr1 = unStr[0] + '0';
            let sym = unStr[1];
            if(AL.hasOwnProperty(unStr1) && unStr.length > 1)
            {
                newStr += ' ';
                if(newStr === ' ')
                {
                    newStr = "";
                }
                newStr += AL[unStr1];
                newStr += ' ';
                newStr += AL[sym];
            }
            else
            {
                if(unStr !== '0' && unStr !== '00'&& unStr !== "")
                {
                    newStr += ' ';
                    newStr += AL[unStr[1]];
                }
            }
        }
    }
    return newStr;
}
