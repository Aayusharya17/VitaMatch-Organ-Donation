const crypto = require("crypto");
const { ethers } = require("ethers");

class BlockchainService {

  constructor() {

    this.provider = new ethers.JsonRpcProvider(
      process.env.RPC_URL
    );

    this.wallet = new ethers.Wallet(
      process.env.PRIVATE_KEY,
      this.provider
    );

    this.contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      [
        "function recordAllocation(bytes32 _hash) public"
      ],
      this.wallet
    );
  }

  generateHash(data) {
    return crypto
      .createHash("sha256")
      .update(JSON.stringify(data))
      .digest("hex");
  }

  async writeHashToBlockchain(hash) {
    const tx =
      await this.contract.recordAllocation("0x" + hash);

    await tx.wait();

    return tx.hash;
  }
}

module.exports = BlockchainService;
