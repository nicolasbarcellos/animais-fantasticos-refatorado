export default function initFetchBitcoin() {
  async function getBitcoinValue() {
    try {
      const bitcoinSpan = document.querySelector('.btc-preco');
      const bitcoin = await (
        await fetch('https://blockchain.info/ticker')
      ).json();
      const bitcoinBr = (100 / bitcoin.BRL.sell).toFixed(4);
      bitcoinSpan.innerText = bitcoinBr;
    } catch (erro) {
      console.log('Api não iniciada.');
    }
  }

  getBitcoinValue();
}
