const moment = require('moment')

class Sleeping {
    constructor(name = '', size = 1) {
        this.name = name
        this.size = size
        this.index = 0
        this.nums = this.init(size)
        this.curTime = moment().format('MM:HH')
        this.deals = []
    }

    addDeal({title, duration}) {
        if (this.deals.find(el => el.title === title) === undefined) {
            this.deals.push({title, duration, time: this.curTime})
        }

        this.updateDate()
    }

    carousel(freq = 500) {
        let count = 0
        let index = 0
        
        setInterval(() => {
            console.log(this.nums[index])
            if (index < this.nums.length - 1) {
                index++
            } else {
                index = count > this.nums.length - 1 ? parseInt(count % this.nums.length) : count
                count++
            }
        }, freq)
    }

    nextNum() {
        if (this.index < this.nums.length - 1) {
            this.index += 1
        } else {
            this.index = 0
        }

        this.updateDate()

        return this
    }

    getNum() {
        this.updateDate()

        return this.nums[this.index]
    }

    updateDate() {
        this.curTime = moment().format('MM:HH')
    }

    init(size) {
        let nums = []

        for (let i = 0; i < size; i++) {
            nums.push(parseInt(Math.random() * this.name.length))
        }
        
        return nums
    }
}

module.exports = Sleeping