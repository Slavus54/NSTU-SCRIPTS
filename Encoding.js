class Encoding {
    constructor(content = '') {
        this.content = content
        this.abs = ['a', 'b', 'c', 'd', 'e']
    }

    doing(format) {
        let content = this.content
        let abc = this.abs
        let res = ''

        if (format === 'code') {    
            let con = content.split(' ')

            con.map((el, index) => {
                let str = ''
               
                if (index < abc.length) {
                    if (index % 2 == 0) {
                        str += abc[index]
                    }
                } else {
                    if (index % 2 == 0) {
                        str += abc[index % abc.length]
                    }
                }

                for (let i = 0 ; i < el.length; i++) {
                    let ind = abc.length - (abc.indexOf(el[i]) + 1)
                    
                    str += ind             
                }

                if (index < abc.length) {
                    if (index % 2 !== 0) {
                        str += abc[index]
                    }
                } else {
                    if (index % 2 !== 0) {
                        str += abc[index % abc.length]
                    }
                }

                res += `${str}|`
            })

            return res.slice(0, res.length - 1)

        } else if (format === 'decode') {
            let con = content.split('|')

            con.map((el, index) => {
                let str = el
                let fin = ''

                if (index % 2 === 0) {
                    str = str.slice(1, str.length)                    
                } else {
                    str = str.slice(0, str.length - 1)                  
                }
             
                for (let i = 0 ; i < str.length; i++) {
                    let ind = abc.length - parseInt(str[i]) - 1
                    
                    fin += abc[ind]             
                }

                res += fin + ' '
            })  

            return res
        }

      
    }
}

module.exports = Encoding