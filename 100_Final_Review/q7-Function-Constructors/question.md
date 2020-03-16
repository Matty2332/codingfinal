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

  A assigns honk to car but only to the instance of car rather than all car types like hotrod. By assigning honk to prototype that will now be accessible to all types of cars no matter what type of car they are.
  When bind is called on the honk function, the context and contents is passed to the new object so that it has access to honk and all it's dependencies.