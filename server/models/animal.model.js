const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required!"],
		minlength: [3, "must be at least 3 characters"]
	},
	type: {
		type: String,
		required: [true, "Type is required!"],
		minlength: [3, "must be at least 3 characters"]
	},
	description: {		
		type: String,
		required: [true, "Description is required!"],
		minlength: [3, "must be at least 3 characters"]
	},
	skillOne:{
		type: String,
		required: [false],
	},
	skillTwo:{
		type: String,
		required: [false],
	},
	skillThree:{
		type: String,
		required: [false],
	},
	likes:{
		type: String,
		required: [false],
	},
});
	

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;