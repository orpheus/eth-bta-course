const contractAddress = "0x5ED417157071CF262dB9EBc27Bc76B32984dbCD7"
const mainAddress = "0x65d9253891fa6Eecc5E4FD3b1b687484eBAcc052"
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "albumEvent_Description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "albumEvent_Artist",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "albumEvent_Title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "albumEvent_Tracks",
				"type": "uint256"
			}
		],
		"name": "albumEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "errorEvent_Description",
				"type": "string"
			}
		],
		"name": "errorEvent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_artist",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_albumTitle",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_tracks",
				"type": "uint256"
			}
		],
		"name": "setAlbum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_artist",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_tracks",
				"type": "uint256"
			}
		],
		"name": "setFavoriteAlbum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_author",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentAlbum",
		"outputs": [
			{
				"internalType": "string",
				"name": "artist",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tracks",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentAlbum",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFavoriteAlbum",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userAlbums",
		"outputs": [
			{
				"internalType": "string",
				"name": "artist",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tracks",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] 
