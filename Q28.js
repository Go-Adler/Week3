const Car = new Function("name", " mileage", "max_speed", "this.name = name; this.mileage = mileage; this.max_speed = max_speed;")

let maruthi = new Car("swift", 20, 120, "maruthi")
let maruthi2 = new Car("swif2t", 220, 1220)
console.log(maruthi, maruthi2)