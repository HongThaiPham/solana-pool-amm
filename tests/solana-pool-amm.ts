import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaPoolAmm } from "../target/types/solana_pool_amm";

describe("solana-pool-amm", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaPoolAmm as Program<SolanaPoolAmm>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
