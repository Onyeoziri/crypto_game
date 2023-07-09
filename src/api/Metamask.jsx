export async function Metamask() {
  let account;
  let ethBalance;

  console.log("Requesting account....");

  //Check if MetaMask exsit
  if (window.ethereum) {
    console.log("MetaMask Detected");

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];

      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });

      ethBalance = Number(balance) / 10 ** 18;

      console.log("Account: ", accounts[0]);
      console.log("ETH Balance: ", Number(balance) / 10 ** 18);
      return { account, ethBalance };
    } catch (error) {
      console.error("Error connecting...", error.message);
    }
  } else {
    console.log("MetaMask Not Detected");
  }
}
