class Eco {
    constructor(name = '') {
        this.name = name
        this.karma = 80
        this.trash = null
        this.replic = ''
        this.isChoose = false
    }

    setRandomWaste() {
        let cats = this.getCategories()
        let mass = parseInt(Math.random() * 100)
        let material = cats[parseInt(Math.random() * cats.length)]

        this.trash = {
            title: `${material.title} trash`,
            mass,
            distance: parseInt(Math.random() * 20)
        }

        this.replic = `Do ${this.name} drop out ${this.trash.title}?`

        this.listen()
        this.isChoose = true
    }

    setChoose(choose) {
        let value = 0

        if (choose === true) {
            value = this.karma + parseInt(this.trash.distance * this.trash.mass / 200)
            this.karma = value < 100 ? value : 100
            this.replic = `Ok, thank, ${this.name}`
        } else {    
            value = this.karma - parseInt(this.trash.distance * this.trash.mass / 200)
            this.karma = value > 20 ? value : 20
            this.replic = `Why you did it?`
        }

        this.listen()
        this.isChoose = false
    }

    listen() {
        console.log(`${this.replic} (${this.karma})`)
    }

    getCategories() {
        return [
            {
                title: 'Plastic',
                coof: 2.5
            }
        ]
    }
}

module.exports = Eco