class Honeycombs {
    constructor(coof) {
        this.comb = this.buildHoney(coof)
        this.determinant = 0
    }

    buildHoney(coof) {  
        let arr = []
        let part = []

        arr.push([parseInt(Math.random() * coof)])

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                part.push(parseInt(Math.random() * coof))

                if (j === 1) {
                    arr.push(part)
                    part = []
                }
            }
        }

        arr.push([parseInt(Math.random() * coof)])

        return arr
    }

    countDeterminant() {
        let res = 0

        for (let i = 1; i < 3; i++) {
            res += (this.comb[3-i][0]*this.comb[i][1])
        }

        res += (this.comb[0][0] * this.comb[3][0])

        this.determinant = res
    }
} 

module.exports = Honeycombs