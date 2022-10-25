
class Ship {


 constructor(name, hull, firepower, accuracy) {


     this.name = name,


     this.hull = hull,


     this.firepower = firepower,


     this.accuracy = accuracy


     
 }


}


class MainShip extends Ship {


 constructor(name, hull, firepower, accuracy) {


   super(name, hull, firepower, accuracy);



   this.name = '',


   this.hull = 20,


   this.firepower = 5,


   this.accuracy = .7,




   this.attackAlien = this.attackAlien.bind(this),


   this.fightAlien = this.fightAlien.bind(this)


 }




 attackAlien(target) {


 if (this.hull >= target.hull) {


   this.fightAlien();


 } else if (target.hull <= 0) {


     console.log(`You destroyed ${target.name}!`)


     allAlien.shift()


     userChoice()


 } else if (target.hull > 0) {


     target.attackMain()


     (console.log(`You missed!! AlienShip has ${target.hull} hull.`))


   }


 }







 fightAlien(target) {


   let remainingHull = target.hull -= this.firepower


   if (remainingHull > 0) {


       console.log("You hit the alien ship!");


       console.log(`AlienShip now has ${remainingHull} hull.`);


       this.attackMain(this)


     } else if (remainingHull <= 0) {


       allAlien.shift()


       console.log("You have destroyed AlienShip!")


       userChoice()


     }


   }


 }




class AlienShip extends Ship {


 constructor(name, hull, firepower, accuracy) {


   super(name, hull, firepower, accuracy)


   this.name = name,


   this.hull = (Math.floor(Math.random() * 4) + 3),


   this.firepower = (Math.floor(Math.random() * 3) + 2),


   this.accuracy = (Math.random() * (.2) + .6).toFixed(2),


   this.attackMain = this.attackMain.bind(this),


   this.fightMain = this.fightMain.bind(this)


 }


 attackMain(targetUser) {


   if (this.hull > 0 && targetUser.hull > 0) {


   this.fightMain()


   } else if (remainingAlienHull <= 0) {


     allAlien.shift()


     console.log("You have destroyed AlienShip!")


     this.userChoice()


   }


 }


 fightMain(targetUser) {


   let remainingMainHull = targetUser.hull - this.firepower


     console.log('AlienShip hit you!')


     console.log(`You now have ${remainingMainHull} hull.`)


     userShip.attackAlien()


   }


}




const defenderShip = new MainShip("USS SlaughterGang")


 const alienShip1 = new AlienShip("HumanMisery")


 const alienShip2 = new AlienShip("CivilizationCrusher")


 const alienShip3 = new AlienShip("SugarYoureGoingDown")


 const alienShip4 = new AlienShip("BoneCrusher")


 const alienShip5 = new AlienShip("BringerOfDeath")


 const alienShip6 = new AlienShip("HellOnEarth")


const allAlien = [alienShip1 , alienShip2, alienShip3, alienShip4 , alienShip5, alienShip6]






const userChoice = () => {


 confirm("Ready to fight next AlienShip?")


 if (confirm == true) { 
  
  defenderShip.attackAlien();


 } else {


   userShip.retreat() 

 }


}






const retreat = () => {


   if (confirm("OK to Quit or Cancel to Keep Playing") == true) {


     console.log("Play Again Later");


   } else {


     console.log("Keep Going!");


   }


 }



