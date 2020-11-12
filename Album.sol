// SPDX-License-Identifier: CC-BY-1.0
// Creative Commons Attribution 1.0 Generic
pragma solidity ^0.7.0;

contract Utility {
    address owner;
    
    event errorEvent(string errorMessage);
    
    modifier onlyOwner {
        if (msg.sender != owner) {
            emit errorEvent("Not owner, sucks to suck");
        } else {
            _;
        }
    }
}

contract Album is Utility {
    struct album {
        string artist;
        string name;
        uint tracks;
    }
    
    album public currentAlbum;
    mapping(address => album) public userAlbums;
    
    
    string public constant _author = 'Me!';
    
    event albumEvent(string albumEvent_Description, string albumEvent_Artist, string albumEvent_Title, uint albumEvent_Tracks);
    

    
    constructor() {
        currentAlbum.artist = "Rezz";
        currentAlbum.name = "CMOK";
        currentAlbum.tracks = 12;
        
        // initiator of the tx
        owner = msg.sender;
    }
    
    
    function getCurrentAlbum () public view returns (string memory, string memory, uint) {
        return (currentAlbum.artist, currentAlbum.name, currentAlbum.tracks);
    }
    
    function setAlbum (string memory _artist, string memory _albumTitle, uint _tracks) onlyOwner public {
        currentAlbum.artist = _artist;
        currentAlbum.name = _albumTitle;
        currentAlbum.tracks = _tracks;
  
        
        emit albumEvent("Current album updated", _artist, _albumTitle, _tracks);
    }
    
    function getFavoriteAlbum() public view returns (string memory, string memory, uint) {
        return (userAlbums[msg.sender].artist, userAlbums[msg.sender].name, userAlbums[msg.sender].tracks);
    }
    
    function setFavoriteAlbum(string memory _artist, string memory _name, uint _tracks) public {
        userAlbums[msg.sender].artist = _artist;
        userAlbums[msg.sender].name = _name;
        userAlbums[msg.sender].tracks = _tracks;
        
        emit albumEvent("Updated personal favorite album", _artist, _name, _tracks);
    }
}


