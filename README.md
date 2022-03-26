# About 
My notes and code for tutorial at https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74

# Notes

```
npx create-next-app web3-blog

cd web3-blog

npm install ethers hardhat @nomiclabs/hardhat-waffle \
ethereum-waffle chai @nomiclabs/hardhat-ethers \
web3modal @walletconnect/web3-provider \
easymde react-markdown react-simplemde-editor \
ipfs-http-client @emotion/css @openzeppelin/contracts dotenv

npx hardhat

npx hardhat test

npx hardhat node

npx hardhat run scripts/deploy.js --network localhost

Blog deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

npm run dev
```


1. context.js is in the root folder
2. .env.local is in the root supported by Next.js no need to do more
3.  have to hard code the following in `index.js` or run into "Error: could not detect network (event="noNetwork", code=NETWORK_ERROR, version=providers/5.6.1)" error

do the same for `web3-blog/pages/post/[id].js` and `web3-blog/pages/edit-post/[id].js`

```
  if (process.env.ENVIRONMENT === 'local') {
    provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545")
```

next.js product build:

```
npm run build && npm start
```

```
npx hardhat run scripts/deploy.js --network mumbai

Blog deployed to: 0xa099F014f8D77061A4d6f354DFf0fC1bc02EC663
npm run dev
```
check at https://mumbai.polygonscan.com/address/0xa099F014f8D77061A4d6f354DFf0fC1bc02EC663


create subgraph at https://thegraph.com/hosted-service/subgraph/harrywang/blogcms and do:

```
npm install -g @graphprotocol/graph-cli
```

find the contract address in config.js and initialize the subgraph:

```
graph init --from-contract 0xa099F014f8D77061A4d6f354DFf0fC1bc02EC663 \
--network mumbai --contract-name Blog --index-events

? Protocol: ethereum
? Product for which to initialize › hosted-service
? Subgraph name › your-username/blogcms
? Directory to create the subgraph in › blogcms
? Ethereum network › mumbai
? Contract address › your-contract-address
? ABI file (path) › artifacts/contracts/Blog.sol/Blog.json
? Contract Name › Blog

```

update schema.graphql and run

```
cd blogcms
graph codegen
graph build
graph auth
yarn deploy
```

wait for the subgraph index to be fully synced, which may take a while.

<img width="1443" alt="Screen Shot 2022-03-26 at 10 47 16 AM" src="https://user-images.githubusercontent.com/595772/160244712-ca382473-9e22-4fcb-ab63-d8ec89825991.png">

