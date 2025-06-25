class Animal {
    public eat() {
        console.log('dong vat an')
    }
    public go() {
        console.log('dong vat di')
    }
    public doSomething() {
        this.go()
        this.eat()
    }
}
class Cat extends Animal{

}
const cat = new Cat()
cat.doSomething()