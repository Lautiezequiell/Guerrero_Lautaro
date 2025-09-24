let devProfile = { 
fullName: "Guerrero Lautaro Ezequiel", 
age: 18, 
profession: "Web Developer", 
skills: ["HTML"," CSS"," JavaScript"," React"," Nodejs"," Express"], 
isEmployed: false, 
contact: { 
email: "lauty9698@gmail.com", 
location: "Argentina",
} 
};

function printDevProfile(devProfile) {
console.log(`Hello! My name is ${devProfile.fullName}. I am a ${devProfile.profession}. I work with ${devProfile.skills}. I live in ${devProfile.contact.location}. I am ${devProfile.age} years old. You can contact me with this email: ${devProfile.contact.email}`);
};
printDevProfile(devProfile); 