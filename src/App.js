import React, { useEffect } from 'react'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

const supportedChainIds = [
  NetworkChain.Mainnet, // 1
];

function App() {

  const { account: address, chainId } = useWeb3React()

  useEffect(() => {
    console.log(address)
    console.log(chainId)
  }, [])

  const Metamask = () => new InjectedConnector({
    supportedChainIds,
  })


  return (
    <div className="App">
      <Web3ReactProvider getLibrary={(provider) => new Web3(provider)}>
        <div>123</div>
      </Web3ReactProvider>
    </div>
  )
}

export default App
