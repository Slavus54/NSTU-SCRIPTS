// TCP-IP

export class Network {
    constructor () {
        this.IP = '0.0.0.0'
        this.nodes = []
    }
    
    connect(node) {
        this.nodes.push(node)
        this.IP = this.updateIP(node.IP, node.MAC)
    }
    
    updateIP(IP, MAC) {
        let res = ''
        let partsIP = []
        let partsMAC = []
        
        IP.split('.').map(el => {
            partsIP.push(this.getIntoBinary(el, 8))
        })
        
        MAC.split('.').map(el => {
            partsMAC.push(this.getIntoBinary(el, 8))
        })

        
        for (let i = 0; i < 4; i++) {
            if (i < 3) {
                res += this.convertFromBinary(this.bitAddition(partsIP[i], partsMAC[i])) + '.'
            } else {
                res += this.convertFromBinary(this.bitAddition(partsIP[i], partsMAC[i]))
            }
        }
        
        return res
    }
    
    getIntoBinary(item, format = 2) {
        let res = ''
        
        while (item > 0) {
            if (item % 2 == 0) {
                item = item / 2
                res += '0'
            } else {
                item = (item - 1) / 2
                res += '1'
            }
        }
        
        res = res.split('').reverse().join('')
    
        return res.length < format ? this.formattedBinaryCode(res, Math.abs(res.length - format)) : res
    }
    
    formattedBinaryCode(code, diff) {
        let res = ''
        
        for (let i = 0; i < diff; i++) {
            res += '0'
        }
        
        return `${res}${code}`
    }
    
    convertFromBinary(str) {
        let res = 0
        
        str.split('').map((el, i) => {
            if (parseInt(el) === 1) {
                res += 1 * 2**i
            }
        })
        
        return res
    }
    
    bitAddition(st1, st2) {
        let res = ''
        let sub = st2.split('')
        
        st1.split('').map((val, i) => {
            if (val === sub[i] && parseInt(val) === 1) {
                res += 1
            } else {
                res += 0
            }
        })
        
        return res
    }
}

export class Node extends Network {
    constructor (IP = '172.168.1.0', MAC = '255.255.0.0') {
        super()
        this.IP = IP
        this.MAC = MAC
        this.domain = new DNS(IP).domain
        this.data = ''
    }
    
    setData(data) {
        if (typeof data === 'string') {
            this.data = data
        }
    }
    
    sendData(node) {
        let IP = node.IP
        
        node.data = this.data
    }
    
    
}

export class DNS {
    constructor (IP = '172.168.1.0') {
        this.domain = this.checkIP(IP)
    }
     
    checkIP(IP) {
        return 'youtube.com'
    }
}