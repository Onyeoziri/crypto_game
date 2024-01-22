# CryptoGame
FullStack react site with login using metamask/phantom wallet. After authenticating log in, a 2D platform game (Game was created in COSC 412, Software Enginnering) is promted in a java popup window. Upon beating the game, you are granted an NFT that we created in our blockchain wallet. NFT is sent from our wallet to the autheticated users wallet. Features were all tested on hardhat.

The aim of our project is to create a simple PHP login with registration functionality that will accept a wallet ID. Once logged in, the user will be prompted with a game. Once the game is won, the user will be awarded an NFT to their wallet. The NFT will not be awarded until the game is beaten to its entirety. 
# UPDATE
-Web3 interface. 
-.jsx
-Removal of larger game (platform game)
Our main motivation of this project is to give the player a free NFT with hopes they will look more into it. 
We want our game to be able to bring enjoyment to our target audience as well as provide an interesting lesson on ownership of NFTs and blockchain technology as a whole.
Source code will be available for public access for the player to see how the game was made and hopefully inspire others to pursue more info on blockchains
We have created the web3 front end and made the contract that is deployed on the sepolia test net. We are still working on implementations of sending the NFT to the wallet after the Minting process. 
With limited time due to everyone’s schedule, we got as close to the final as we could. 

# Checklist
There are some things we need to add to the project to a running completed page.
Create Web3 login interface with a front page (complete)
Create a game deployable in java that prompts after login (Complete)
Create an NFT (Complete)
Learn how to send NFT from one wallet to another in code (Complete)
Security Measures (If NFT is already in wallet, do not send another NFT) (Complete)
Implement the contract into the game (Sprint in progress)
Display a hash value after sending NFT (Spring in progress)
