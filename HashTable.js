class HashTable {
  constructor(size = 3) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }

  keys() {
    let keyArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0])) {
            keyArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keyArr
  }

  values() {
    let valArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valArr.includes(this.keyMap[i][j][1])) {
            valArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valArr
  }
}

const hb = new HashTable()

hb.set('boosie', 'i like it')
hb.set('moneyman', 'make sure you do it big')
hb.set('jayz', 'i dumb down for my audience and double my dollas')
hb.set('biggie', 'make sure you do it big')

// console.log(hb.keyMap)
console.log(hb.values())
console.log(hb.keys())
