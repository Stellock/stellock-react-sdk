import {
  StellarWalletsKit,
  WalletNetwork,
  ISupportedWallet,
  XBULL_ID,
} from "@creit.tech/stellar-wallets-kit";
import {
  xBullModule,
  FreighterModule,
  AlbedoModule,
} from "@creit.tech/stellar-wallets-kit/";

export default function ConnectButton() {
  const kit = new StellarWalletsKit({
    selectedWalletId: XBULL_ID,
    network: WalletNetwork.PUBLIC,
    modules: [new xBullModule(), new FreighterModule(), new AlbedoModule()],
  });

  const handleWalletSelection = async (option: ISupportedWallet) => {
    kit.setWallet(option.id);
    await kit.getPublicKey();
    // Do something else with the publicKey
  };

  const openModal = () => {
    kit.openModal({
      onWalletSelected: handleWalletSelection,
    });
  };

  return (
    <main className="bg-gradient-to-btext-white flex flex-col items-center justify-center">
      <button onClick={openModal}>Connect Wallet</button>
    </main>
  );
}
