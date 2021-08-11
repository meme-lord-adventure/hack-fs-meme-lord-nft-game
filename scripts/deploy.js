async function main() {
    // Grab the contract factory 
    const MemeLord = await ethers.getContractFactory("MemeLord");
    
    // Start deployment, returning a promise that resolves to a contract object
    const memeLord = await MemeLord.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", memeLord.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
   