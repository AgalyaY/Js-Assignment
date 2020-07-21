class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out.`);
        return this;
    }
}
class Moderator extends User{
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins.`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins.`);
        return this;
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }    
    deleteCourse(user,course){
        user.courses.pop(course);
        console.log(user);
    }    
}

let user1 = new User("Agalya",20,"agalyayeasudass1912@gmail.com");
let user2 = new User("Prema",25,"premar68@gmail.com");
let mod = new Moderator('Sam',24,'sam007@gmail.com','Moderator');
let admin = new Admin('Charu',25,'charu20001@gmail.com');
let users = [user1,user2,mod,admin];

user1.login();
mod.addCoins(user1).addCoins(user1).addCoins(user1);
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user1,'Blockchain');
admin.deleteCourse(user1);
mod.removeCoins();
user1.logout();

admin.addCourse(user2,'Python');
admin.addCoins(user2);
