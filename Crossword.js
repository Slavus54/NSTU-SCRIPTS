class Crossword {
    constructor(length = 20, words = []) {
        this.maxLength = length;
        this.words = words.filter(el => el.answer.length <= length)
        this.word = null
        this.answer = ''
        this.points = 0
    }
    
    getWithCheck() {
        let r = parseInt(this.words.length * Math.random())
        
        let word = this.words[r]
        
        if (word !== undefined) {
            this.word = word
        }
        
        let context = this
        
        return function isRight(answer) {
            let check = answer === context.word.answer
            
            if (check) {
                context.points += 1
            }
            
            return check ? 'Right' : 'Wrong'
        }
    }
}

let inst = new Crossword(10, [
    {
        title: 'Capital of CR',
        answer: 'Prague',
        position: 'horizontal',
        crossings: [[3, 2]] 
    },
    {
        title: 'State before St Peterberg',
        answer: 'Ingria',
        position: 'vertical',
        missed: [[2, 3]] 
    }
])

let q = inst.getWithCheck()

console.log(inst.word)
console.log(q('Prague'))

module.exports = Crossword