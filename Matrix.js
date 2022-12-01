class Matrix {
    constructor(length = 0, arr = []) {
        this.length = length
        this.matrix = this.setInitialMatrix(length, arr)
        this.determinant = 0
    }

    setDeterminant(mode = '', num = 0) {
        let res = ''
           
        if (mode === 'row') {

        } else if (mode === 'column') {

        } else {
            for (let i = 0; i < this.length; i++) {
                res += this.countDetSide(i)
            }
        }

        this.determinant = res
    }

    countDetSide(index) {
        let res = ''
        let poses = this.matrix[index].position.split(':').map(el => parseInt(el))

        for (let i = poses[1]; i < this.length; i++) {
            res += `*${this.matrix[((i) * (this.length - 1)) + (i + 1)].value}`
        }
    }

    setInitialMatrix(length = 0, arr = []) {
        let res = []

        if (arr.length === 0) {
            for (let i = 0; i < length; i++) {

                for (let j = 0; j < length; j++) {
                    res.push({
                        value: parseInt(Math.random() * 10 * length),
                        position: `${i}:${j}`
                    })
                }
            }
        } else {
            let index = 0

            for (let i = 0; i < length; i++) {

                for (let j = 0; j < length; j++) {
                    if (index < arr.length) {
                        res.push({
                            value: arr[index],
                            position: `${i}:${j}`
                        })
                    } else {
                        res.push({
                            value: parseInt(Math.random() * length),
                            position: `${i}:${j}`
                        })
                    }
                   
                    index++
                }
            }
        }

        return res
    }
}

module.exports = Matrix