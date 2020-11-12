// SPDX-License-Identifier: CC-BY-1.0
// Creative Commons Attribution 1.0 Generic

// Contract will be compiled on version 0.7.0 or greater
pragma solidity ^0.7.0;

// A smart contract to model a music album
contract Album {
    
    // Local state variables
    // The artist/group who recorded the album
    string public artist; 
    // The album's title
    string public albumTitle;
    // The number of tracks on the album
    uint public tracks;
    // The author of this smart contract
    string public constant contractAuthor = 'Kris Bennett';
    // The owner of the current instance of this smart contract
    address owner;
    
    // Event which will be raised anytime the current album information is updated.
    event albumEvent(string albumEvent_Artist, string albumEvent_Title, uint albumEvent_Tracks);
    
    constructor() {
        artist = 'Nirvana';
        albumTitle = 'Nevermind';
        tracks = 13;
        // Set the owner property of this contract instance to the initiator of this contract deployment
        owner = msg.sender;
    } // constructor
    
    // This function modifier ensures that the initiator of any transaction 
    //   it is attached to matches the address of the contract's owner.
    // Use this function modifier for functions that should only
    //   be performed by the owner of this contract instance.
    modifier onlyOwner {
        if (msg.sender != owner) {
            // The initiator of this transaction is NOT the contract instance's owner!
        } else {
            _;
        } // else
    } // modifier onlyOwner
    
    // Returns the current album information
    function getAlbum() public view returns (string memory, string memory, uint) {
        return (artist, albumTitle, tracks);
    } // getAlbum
    
    // Set the album information
    function setAlbum(string memory _artist, string memory _albumTitle, uint _tracks) onlyOwner public {
        artist = _artist;
        albumTitle = _albumTitle;
        tracks = _tracks;
        
        // Raise the albumEvent to let any event subscribers know the current album information has changed.
        emit albumEvent(_artist, _albumTitle, _tracks);
    } // setAlbum
    
} // Album
