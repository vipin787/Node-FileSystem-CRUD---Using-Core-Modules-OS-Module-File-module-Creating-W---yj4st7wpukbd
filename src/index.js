const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const content = await fs.readFile(fileName);
	return content.toString();
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return await fs.appendFile(fileName, fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
