class CustomError extends Error {
	constructor(message: string){
		super(message)
	}
	print() {
		console.log(this.name + ': ' + this.message);
	}
}

export default CustomError; 
