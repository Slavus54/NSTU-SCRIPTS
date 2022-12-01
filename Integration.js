// default variable will be x

let input = [['x', 'x^2'], ['+']]

const fastPower = (base, power) => {
    if (power === 0) {
        return 1
    } 
    
    if (power % 2 === 0) {
        let all = fastPower(base, power / 2)
        
        return all * all
    }
    
    let all = fastPower(base, parseInt(power / 2))
        
    return all * all * base
}

const antiderivative = str => {
    let partition = str.split('^')
    let value = parseInt(partition[1]) + 1
    
    return partition.length === 2 ? `((${partition[0]}**${value})/(${value}))` : `((${str}**2)/2)`
}

const joining = str => {
    let res = ''
   
    for (let i = 0; i < str[0].length; i++) {
        if (i === 0) {
            res += `${antiderivative(str[0][i])}${str[1][i]}`
        } else if (i % 2 !== 0) {
            if (str[1][i] !== undefined) {
                res += `${antiderivative(str[0][i])}${str[1][i]}`
            } else {
                res += `${antiderivative(str[0][i])}`
            }
        } else {
            res += `${antiderivative(str[0][i])}`
        }
        
    }
    
    return res
}

const counting = (str, mode = 'usual', value) => {
    let res = ''
    
    if (mode = 'usual') {
        str.split('').map((el, i) => {
            if (el === 'x') {
                res += value
            } else {
                res += el
            }
        })
    } 
    
    return {
        task: str,
        value,
        result: parseInt(eval(res))
    }
}

let str = joining(input)

let plate = [2, 6]

// default integral F(x2) - F(x1)

console.log(`${counting(str, '', plate[1]).result} - ${counting(str, '', plate[0]).result}`)

// integral with triangles

const integration = (str, borders, freq = 5) => {
    let sum = 0
    let step = parseInt(Math.abs(borders[0] - borders[1]) / freq)
    let left = borders[0]     
    let right =  borders[0] + step
 
    for (let i = 0; i < freq; i++) {
        let vL = counting(str, '', left).result
        let vR = counting(str, '', right).result
        
        let height = 0
        let diff = parseInt(Math.abs(vL - vR))
        
        if (vL > vR) {
            height = (step * vL) - (diff * step  * 0.5)
        } else {
            height = (step * vR) - (diff * step  * 0.5)
        }
        
        sum += height
        left = right
        right += step
    }
    
    return sum
}

console.log(integration(str, plate, 2))

module.exports = {joining, counting}