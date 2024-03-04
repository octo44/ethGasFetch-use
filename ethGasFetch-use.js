// ethGasFetch-use.js
const EthereumGasFetcher = require('ethereum-gas-fetcher');
const Web3 = require('web3');

const apiKey = 'ac2cdd4d0a8b4e9b984b3ef1782c8364'; // Replace with your actual Infura API key
const infuraUrl = `https://mainnet.infura.io/v3/${apiKey}`;
const gasFetcher = new EthereumGasFetcher(apiKey);

// Web3 setup
const web3 = new Web3(infuraUrl);

// Your web3 task
async function web3Task() {
  try {
    console.log('Fetching gas price...');
    // Fetch gas price using ethereum-gas-fetcher
    const gasPrice = await gasFetcher.getGasPrice();
    console.log('Current Gas Price:', gasPrice);

    console.log('Fetching current block number...');
    // Perform a simple web3 task
    const blockNumber = await web3.eth.getBlockNumber();
    console.log('Current Block Number:', blockNumber);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

console.log('Starting web3 task...');
// Run the web3 task
web3Task();
