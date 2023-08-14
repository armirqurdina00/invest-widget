import Context from "./widget/Context"
import { useState } from "react"

const ContextProvider = ({children}) => {
    const TOKEN_RATE = 13.27092

    const [isBuy, setIsBuy] = useState(true)
    const [sharesNumber, setSharesNumber] = useState(1000)
    const [isCrypto, setIsCrypto] = useState(false)
    const [bankValue, setBankValue] = useState(sharesNumber * TOKEN_RATE)
    const [cryptoValue, setCryptoValue] = useState(sharesNumber * TOKEN_RATE)
    const [confirmationModal, setConfirmationModal] = useState(false)


    function handleIsBuyChange() {
        setIsBuy(!isBuy)
        setCryptoValue((sharesNumber * TOKEN_RATE - 10).toFixed(2))
        if (sharesNumber <= 0) {
          setCryptoValue(0)
        }
      }
    
    function handleSharesNumberChange(event) {
        const currentValue = event.target.value
        setSharesNumber(currentValue)
        setBankValue((currentValue * TOKEN_RATE).toFixed(2))
        setCryptoValue((currentValue * TOKEN_RATE - 10).toFixed(2))
        if (currentValue <= 0) {
          setCryptoValue(0)
        }
      }
    
    function handleMethodChange() {
        setIsCrypto(!isCrypto)
        setCryptoValue((bankValue - 10).toFixed(2))
        if (sharesNumber <= 0) {
          setCryptoValue(0)
        }
    }  

    return (
      <>
        <Context.Provider value={{isBuy, sharesNumber, isCrypto, bankValue, cryptoValue, confirmationModal, setConfirmationModal, handleIsBuyChange, handleSharesNumberChange, handleMethodChange }}>
            {children}
        </Context.Provider>
      </>
    );
}
 
export default ContextProvider;