function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }

  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }

  
  const scooter1 = new Scooter(2022, "red", "Vespa");
const driver1 = new Driver("Alice", 30, "5 years");
const pickupLocation1 = new PickupLocation("123 Main St", "New York");

console.log(scooter1); 
console.log(driver1);  
console.log(pickupLocation1); 
