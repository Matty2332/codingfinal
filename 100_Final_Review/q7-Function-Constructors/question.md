### Why does the Case A NOT work but Case B and C work? Please explain ...

# Case A:

// create an function constructor
  function Car (name) {
    this.name = name
  }

// add a method to the above function
  Car.honk = function () {
    console.log(this.name + ' honks beep')
  }

// test your function
  let hotrod = new Car('Mustang')
  hotrod.honk()


# Case B:

var newHotrod = Car.honk.bind(hotrod)
newHotrod() 

# Case C:

// create an function constructor
  function Car (name) {
    this.name = name
  }

// add a method to the prototype of the above function
  Car.prototype.honk = function () {
    console.log(this.name + ' honks beep')
  }

// test your function
  let myHotrod = new Car('Mustang')
  myHotrod.honk()