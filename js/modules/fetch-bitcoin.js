export default function fetchBitcoin(url, target) {
  async function getBitcoinValue() {
    try {
      const bitcoinSpan = document.querySelector(target);
      const bitcoin = await (
        await fetch(url)
      ).json();
      const bitcoinBr = (100 / bitcoin.BRL.sell).toFixed(4);
      bitcoinSpan.innerText = bitcoinBr;
    } catch (erro) {
      console.log('Api não iniciada.');
    }
  }

  getBitcoinValue();
}
