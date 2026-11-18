"use client";

import { useEffect, useState } from "react";
import {
  useConnect,
  useConnectedWallet,
  useDisconnect,
  useWallets,
} from "@solana/kit-plugin-wallet/react";
import { useClient } from "@solana/react";
import type { AppClient } from "../providers";

function shortenAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export default function WalletConnectButton() {
  const client = useClient<AppClient>();
  const wallets = useWallets(client);
  const connectedWallet = useConnectedWallet(client);
  const connect = useConnect(client);
  const disconnect = useDisconnect(client);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
        Detecting Solana wallets...
      </p>
    );
  }

  if (connectedWallet) {
    const walletAddress = String(connectedWallet.account.address);

    return (
      <div className="space-y-3">
        <div className="rounded-xl bg-emerald-50 p-4">
          <p className="text-sm font-bold text-emerald-800">
            Wallet connected
          </p>

          <p className="mt-1 font-mono text-sm text-emerald-700">
            {shortenAddress(walletAddress)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => disconnect.dispatch()}
          disabled={disconnect.isRunning}
          className="w-full rounded-xl border border-slate-300 px-5 py-3 font-bold hover:border-emerald-600 disabled:opacity-50"
        >
          {disconnect.isRunning ? "Disconnecting..." : "Disconnect wallet"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {wallets.length === 0 ? (
        <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
          No Solana wallet detected. Install Phantom or Solflare.
        </p>
      ) : (
        wallets.map((wallet) => (
          <button
            key={wallet.name}
            type="button"
            onClick={() => connect.dispatch(wallet)}
            disabled={connect.isRunning}
            className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            {connect.isRunning
              ? "Connecting..."
              : `Connect ${wallet.name}`}
          </button>
        ))
      )}

      {connect.error ? (
        <p className="text-sm font-medium text-red-600">
          {connect.error instanceof Error
            ? connect.error.message
            : String(connect.error)}
        </p>
      ) : null}
    </div>
  );
}