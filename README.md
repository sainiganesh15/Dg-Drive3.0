#  Dg-Drive3.0(Decentralized Application)
 This is a code for a decentralized file-sharing application that allows users to upload files and share them with others. The application is built on the Ethereum blockchain using the Solidity programming language for the smart contract and React for the user interface.


The React client-side application is built using the Web3.js library to interact with the Ethereum blockchain. The user interface allows users to upload files, display their uploaded files, and share them with others. The application requires the user to connect to their Ethereum account via MetaMask to interact with the blockchain.

The application also includes a Modal component that allows the user to share access to their files with other users. The modal displays a list of users who have access to the file and allows the user to add or remove access for other users.

Overall, this code demonstrates how to build a decentralized file-sharing application on the Ethereum blockchain using Solidity and React.


## Upload.sol (Smart Contract)

### Overview
This is a smart contract built on the Ethereum blockchain that allows users to upload and share data with other users. It is called **Upload**.

### Functionality
The smart contract has the following functions:

1. `add(address _user, string memory url)`: allows a user to add a URL to their list of data.
2. `allow(address user)`: allows another user to access the data of the caller.
3. `disallow(address user)`: revokes another user's access to the caller's data.
4. `display(address _user)`: displays the list of data of the specified user, if the caller has access.
5. `shareAccess()`: displays the list of users who have access to the caller's data.
### Data Structures
The smart contract uses the following data structures:

1. `Access`: a struct that represents a user's access to another user's data. It contains two fields:
- `user`: the address of the user.
- `access`: a boolean that indicates whether the user has access to the data.
2. `value`: a mapping that maps a user's address to a list of URLs.
3. `ownership`: a mapping that maps a user's address to another mapping that maps another user's address to a boolean that indicates whether the second user has access to the first user's data.
4. `accessList`: a mapping that maps a user's address to a list of Access structs, representing the users who have access to the first user's data.
5. `previousData`: a mapping that maps a user's address to another mapping that maps another user's address to a boolean that indicates whether the second user had access to the first user's data in the past.
### License
This smart contract is licensed under the MIT license.

## Pinata
 - Pinata is a popular IPFS pinning service that allows users to store and distribute content on the InterPlanetary File System (IPFS). 
 - IPFS is a peer-to-peer network protocol designed to create a distributed and decentralized web. Pinata makes it easy for developers and users to pin their data to IPFS without having to run their own IPFS node. 
 - The service provides a simple and user-friendly interface for uploading, managing, and sharing content on IPFS. Pinata also offers additional features such as pinning reminders, pinning analytics, and webhooks. 
 - It is widely used by developers and projects in the blockchain and decentralized application (dApp) space to store and distribute their content on IPFS.

 ### axios
 Axios is a JavaScript library used for making HTTP requests from the browser or Node.js. It provides an easy-to-use API for performing various types of HTTP requests, such as GET, POST, PUT, DELETE, etc.

In the context of Pinata, Axios is used to make requests to Pinata's API for uploading and retrieving files. Pinata provides a REST API for interacting with its services, and Axios simplifies the process of making these API calls.

Axios provides a clean and consistent interface for working with HTTP requests, with built-in support for handling response data, error handling, and more. It is widely used in many modern web applications, and is a popular choice for working with APIs in JavaScript-based applications.

- To install Axios in a Node.js project using npm (Node Package Manager), you can use the following command in your terminal:

   `npm install axios`

   This will install the latest version of Axios and save it as a dependency in your `package.json` file.

## Prerequisites

Before you can run the tests, make sure you have the following installed:

- Node.js
- React
- Hardhat

## Installation

1. For Hardhat Installation
``` 
npm init --yes
npm install --save-dev hardhat
```

2. For running hardhat sample project install these dependencies:
```
npm install --save-dev @nomiclabs/hardhat-ethers@^2.0.5 @nomiclabs/hardhat-waffle@^2.0.3 
npm install --save-dev chai@^4.3.6 ethereum-waffle@^3.4.4 ethers@^5.6.2 hardhat@^2.9.2
```
3. For React

```
npm install create-react-App 
npx create-react-App client
```



## Deploying Smart Contract to Localhost

1. Write your smart contract in Solidity and save it in the `contracts/` folder.

2. In the `hardhat.config.js` file, configure your local development network by adding the following:

```
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};

  ```

  3. In the `scripts/` folder, create a new script to deploy your contract to the local network:
  ```
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
```

4. Compile and deploy the smart contract using Hardhat

```
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost

``` 

This will deploy your smart contract to the local development network.

## Usage
To use the Dappazon marketplace, you can run the following commands in the terminal:


#### Clone the repository ####
`git clone https://github.com/sainiganesh15/Dg-Drive3.0.git`

#### Install dependencies ####
```
cd Dappazon
npm install
```

#### Start the local development server ####
```
npm start
Once the server is running, you can access the Dappazon 
marketplace by navigating to http://localhost:3000 in your web browser.
```

## Conclusion
Overall, this code demonstrates how to build a decentralized file-sharing application on the Ethereum blockchain using Solidity and React.