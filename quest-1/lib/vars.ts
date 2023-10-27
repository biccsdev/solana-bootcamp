/**
 *
 */
import dotenv from "dotenv";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { loadKeypairFromFile, loadOrGenerateKeypair } from "./helpers";
import { PublicKey } from "@metaplex-foundation/js";

// load the env variables from file
dotenv.config();

/**
 * Load the `payer` keypair from the local file system, or load/generate a new
 * one and storing it within the local directory
 */
export const payer = process.env?.LOCAL_PAYER_JSON_ABSPATH
  ? loadKeypairFromFile(process.env?.LOCAL_PAYER_JSON_ABSPATH)
  : loadOrGenerateKeypair("payer");

// generate a new Keypair for testing, named `wallet`
export const testWallet = loadOrGenerateKeypair("testWallet7");

// load the env variables and store the cluster RPC url
// export const CLUSTER_URL = process.env.RPC_URL ?? clusterApiUrl("devnet");
export const CLUSTER_URL =
  "https://devnet.helius-rpc.com/?api-key=7140b467-d218-4a67-a5f1-1f1fcb5eafb5";

// create a new rpc connection
export const connection = new Connection(CLUSTER_URL, "single");

// define an address to also transfer lamports too
export const STATIC_PUBLICKEY = new PublicKey("Biccsu5dY5xyeFo24MqmLdCr6vrCmSTyU4XMgSNTnjLD");
