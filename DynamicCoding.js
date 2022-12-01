let alpha = ['a', 'b', 'c']

class DynamicCoding {
    constructor (borders = [], equivalents = [], depth = 10, flag = 'max') {
        this.abc = borders === null ? alpha : alpha.slice(borders[0] - 1, borders[1]) 
        this.equivalents = equivalents
        this.message = ''
        this.coding = ''
        this.depth = depth
        this.flag = flag
    }

    codeMessage() {
        let arr = []
        let words = this.message.split(' ').map(el => el.toLowerCase())
        
        words.map(el => {
            
            if (this.flag === 'max' && el.length <= this.depth || this.flag === 'min' && el.length >= this.depth)  {
                let item = el
                let res = ''
                
                for (let i = 0; i < item.length; i++) {
                    let index = this.abc.indexOf(item[i]) 
                    res += this.equivalents[index] !== undefined ? this.equivalents[index] : item[i]
                }
                
                arr.push(res)
            } else {
                arr.push(el)
            }
            
            
        })
        
        this.coding = arr.join(' ')
    }
    
    setMessage(msg = '') {
        this.message = msg
        this.codeMessage()
        
        return this
    }    
}

module.exports = DynamicCoding