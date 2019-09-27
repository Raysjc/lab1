const salon = {
    name:'Fashion Pets',
    phone: '8675309',
    address:{
        street:"Yordle st",
        number:'1313-5'
    },
    workingHours:{
        days:'Mon - Fri',
        open: '8:00 am',
        close: '5:00 pm'
    },
    pets:[],
    count: function(){
        alert('You have ' + this.pets.length + ' in service');
    }
}

let{name,phone,address:{street,number}, workingHours:{days, open, close}} = salon;
 
document.getElementById('info').innerHTML = `<h1 id="header">${name}</h1>`;
document.getElementById('footer-info').innerHTML = `<p id="storeInfo">${phone} <br>${street} ${number} <br> It is open from ${open} till ${close}</p>`;

class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.hunger = 10;
        this.happiness = 5;
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;

    }

    status = function(){
      console.log('Happiness: ' + this.happiness + ' hunger: ' + this.hunger);
    }
    feed = function () {
            this.hunger -= 10;
            this.happiness += 10;
            console.log("feeding..")
    }
    ownerContact = function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.contactPhone)
    }
}

const pet1 = new Pet("Shaggy", 5 , "dog", "Male", "German Shepard", "Haircut", "Oliver", "1234567" );

const pet2 = new Pet("Koa", 2, "dog", "Male", "Golden Retriever", "Nail-cut", "Rhenard", "6198328346");
const pet3 = new Pet("Luna", 3, "dog", "Female", "Catahuola", "Shower", "Logyn", "8587238887");

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

salon.count();

// for(i = 0; i < salon.pets.length; i++){
    document.getElementById('petNames').innerHTML = `There are ${salon.pets.length} pets in service. <br> Pet names: ${salon.pets[0].name}, ${salon.pets[1].name}, ${salon.pets[2].name}
    `;
// }
// pet1.status();
// pet1.feed();
// pet1.status();
// pet2.ownerContact();

console.table(salon.pets);

{/* <p id="storeInfo">${phone} <br>${street} ${number} <br> It is open from ${open} till ${close}</p>` */}