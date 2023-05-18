/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://live.staticflickr.com/2405/2198522525_3f6f988f9b.jpg"
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://memesfeel.com/wp-content/uploads/2023/01/Borzoi-dog-meme-e15920f777757d4bb86ecd3ed3356ca7.jpg"
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://breed-assets.wisdompanel.com/dog/borzoi/Borzoi3.png"
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
      	email: "abc@gmail.com",
      	gpa: 3.01,
      	imageUrl:"https://i.pinimg.com/736x/04/45/bf/0445bf50a5002554c4688c9388481da2.jpg"

	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
      	email: "def@yahoo.com",
      	gpa: 2.64,
      	imageUrl:"https://i.pinimg.com/736x/f3/1a/4b/f31a4b3c2b585e8682f4d0737e04133a.jpg"
	});

	const dummy_student3 = await Student.create({
		firstname: "Anton",
		lastname: "Chmut",
		email: "antonchmut@gmail.com",
		gpa: 3.45,
		imageUrl:"https://i.redd.it/ck6mobe8h5q91.jpg"
	})

	// Add students to campuses
	await dummy_student3.setCampus(dummy_campus);
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;