require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Crias";
const description = "A representação da cultura das favelas no mundo da arte generativa";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 500, //mulher preta normal
    layersOrder: [
      { name: "fundo" },
      { name: "preta" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "ice" },
      { name: "cabelo mina" },
      { name: "boca preta" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "oculos" },
      { name: "oculos na testa" },
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },
  
    ],
  },{
    growEditionSizeTo: 1000, // mulher branca normal
    layersOrder: [
      { name: "fundo" },
      { name: "branca" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "ice" },
      { name: "cabelo mina" },
      { name: "boca branca" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "oculos na testa" },
      { name: "oculos" },
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },
  
    ],
  },{
    growEditionSizeTo: 1500, // mulher branca boné pra frente
    layersOrder: [
      { name: "fundo" },
      { name: "branca" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "ice" },
      { name: "cabelo mina bone pra frente" },
      { name: "boca branca" },
      { name: "oculos" },
      { name: "bone mina pra frente" },
      { name: "oculos na testa" },
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },

    ],
  },{
    growEditionSizeTo: 2000, // mulher preta boné pra frente
    layersOrder: [
      { name: "fundo" },
      { name: "preta" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "ice" },
      { name: "cabelo mina bone pra frente" },
      { name: "boca preta" },
      { name: "oculos" },
      { name: "bone mina pra frente" },
      { name: "oculos na testa" },
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },

    ],
  },{
    growEditionSizeTo: 2200, //mulher branca boné pra tras
    layersOrder: [
      { name: "fundo" },
      { name: "branca" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "ice" },
      { name: "cabelo mina bone pra tras" },
      { name: "boca branca" },
      { name: "bone mina pra tras" },
      { name: "oculos na testa" },
      { name: "oculos" },
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },

    ],
  },{
    growEditionSizeTo: 2400, //mulher preta boné pra tras
    layersOrder: [
      { name: "fundo" },
      { name: "preta" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "ice" },
      { name: "cabelo mina bone pra tras" },
      { name: "boca preta" },
      { name: "bone mina pra tras" },
      { name: "oculos na testa" },
      { name: "oculos" },
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },
  
    ],
  },{
    growEditionSizeTo: 2450, // mulher branca chapéu
    layersOrder: [
      { name: "fundo" },
      { name: "branca" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "ice" },
      { name: "chapeu mina" },
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },
      { name: "boca branca" },

    ],
  },{
    growEditionSizeTo: 2500, // mulher preta chapéu
    layersOrder: [
      { name: "fundo" },
      { name: "preta" },
      { name: "brinco" },
      { name: "roupa mina" },
      { name: "olhos mina" },
      { name: "pele" },
      { name: "ice" },
      { name: "chapeu mina" },
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },
      { name: "boca preta" },

  
    ],
  },{
    growEditionSizeTo: 3000, // homem branco normal boné pra tras
    layersOrder: [
      { name: "fundo" },
      { name: "branco" },
      { name: "brinco" },
      { name: "roupa cria" },
      { name: "cabelo cria" },
      { name: "risquinho branco" },
      { name: "boca branco" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "ice" },
      { name: "oculos" },
      { name: "bone cria pra frente" },
      { name: "oculos na testa" },
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },

    ],
  },{
    growEditionSizeTo: 3500, //homem preto normal boné pra frente
    layersOrder: [
      { name: "fundo" },
      { name: "preto" },
      { name: "brinco" },
      { name: "roupa cria" },
      { name: "cabelo cria" },
      { name: "risquinho preto" },
      { name: "boca preto" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "ice" },
      { name: "oculos" },
      { name: "bone cria pra frente" },
      { name: "oculos na testa" },
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },
  
    ],
  },{
    growEditionSizeTo: 4000, // homem branco normal boné pra tras
    layersOrder: [
      { name: "fundo" },
      { name: "branco" },
      { name: "brinco" },
      { name: "roupa cria" },
      { name: "cabelo cria" },
      { name: "risquinho branco" },
      { name: "boca branco" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "ice" },
      { name: "bone cria pra tras" },
      { name: "oculos" }, //oculos acima do bone
      { name: "oculos na testa" }, 
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },

    ],
  },{
    growEditionSizeTo: 4500, //homem preto normal boné pra tras
    layersOrder: [
      { name: "fundo" },
      { name: "preto" },
      { name: "brinco" },
      { name: "roupa cria" },
      { name: "cabelo cria" },
      { name: "risquinho preto" },
      { name: "boca preto" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "ice" },
      { name: "bone cria pra tras" },
      { name: "oculos" }, //oculos acima do bone
      { name: "oculos na testa" },
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },
  
    ],
  },{
    growEditionSizeTo: 4550, //homem branco chapéu
    layersOrder: [
      { name: "fundo" },
      { name: "branco" },
      { name: "brinco" },
      { name: "roupa cria" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "ice" },
      { name: "chapeu cria" },
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },
      { name: "boca branco" }, // boca acima do chapeu


    ],
  },{
    growEditionSizeTo: 4600, // homem preto chapeu
    layersOrder: [
      { name: "fundo" },
      { name: "preto" },
      { name: "brinco" },
      { name: "roupa cria" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "ice" },
      { name: "chapeu cria" },
      { name: "boca preto" }, // boca abaixo do chapeu
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },

  
    ],
  },{
    growEditionSizeTo: 4800, // homem branco normal touca
    layersOrder: [
      { name: "fundo" },
      { name: "branco" },
      { name: "brinco" },
      { name: "cabelo cria" },
      { name: "risquinho branco" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "oculos" },
      { name: "bone cria pra frente" },
      { name: "oculos na testa" },
      { name: "touca cria" },
      { name: "boca branco" }, // boca acima da touca
      { name: "mao direita branco" },
      { name: "mao esquerda branco" },

    ],
  },{
    growEditionSizeTo: 5000, //homem preto normal touca
    layersOrder: [
      { name: "fundo" },
      { name: "preto" },
      { name: "brinco" },
      { name: "cabelo cria" },
      { name: "risquinho preto" },
      { name: "olhos cria" },
      { name: "pele" },
      { name: "oculos" },
      { name: "bone cria pra frente" },
      { name: "oculos na testa" },
      { name: "touca cria" },
      { name: "boca preto" }, // boca acima da touca
      { name: "mao direita preto" },
      { name: "mao esquerda preto" },
  
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://crias.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'goerli'; // only goerli, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'crias.xyz';
const CONTRACT_SYMBOL = 'CRIAS';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x23B4aFde0906525eb35EC53A94d1D7FD87aAda2A';
const TREASURY_ADDRESS = '0x23B4aFde0906525eb35EC53A94d1D7FD87aAda2A';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.01; // Minting price per NFT. Goerli = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2023-02-22T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x23B4aFde0906525eb35EC53A94d1D7FD87aAda2A"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Qual dos crias te representa?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeidl6knu64xc4ibdsvcgtk6ihgbadadp24cnc7kqrmikk5wju4ljk4"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "CR",
  seller_fee_basis_points: 2000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.instagram.com/crias.fvl/",
  creators: [
    {
      address: "0x23B4aFde0906525eb35EC53A94d1D7FD87aAda2A",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
