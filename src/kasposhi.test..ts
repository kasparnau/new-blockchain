import { Block, Chain, Transaction, Wallet } from "./kasposhi.js";

// Genesis wallet
const genesis = new Wallet();
// Create first block and will overwrite transaction with 5000 free coins.
genesis.sendMoney(0, "");

test("created genesis wallet successfully", () => {
  expect(Chain.instance.getBalance(genesis.publicKey)).toBe(4999);
});
