const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },
    get appertizers() {},
    get mains() {},
    get desserts() {},
    set appetizers(appetizerIn) {},
    set mains(mainIn) {},
    set dessert(dessertsIn) {},
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
  
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
  
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the price is $${totalPrice}.`;
    }
  }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('mains', 'Steak Medium Well', 35.25);
  menu.addDishToCourse('desserts', 'Pog Juice', 5.25);
  menu.addDishToCourse('appetizers', 'Toasty Le Bread', 7.25);
  menu.addDishToCourse('mains', 'Tikka Chickan Masala', 25.25);
  menu.addDishToCourse('desserts', 'Ice Not Creamy', 2.25);
  menu.addDishToCourse('appetizers', 'Tofu Water', 10.25);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  