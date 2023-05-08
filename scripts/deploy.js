const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const Upload = await ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log("Library deployed to:", upload.address);
}

main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})