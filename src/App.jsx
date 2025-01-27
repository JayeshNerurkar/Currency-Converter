import React, { useState } from 'react'
import InputBox from './assets/components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './style.css'
 
function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    function convert(){
        setConvertedAmount(amount * currencyInfo[to])
    }

    function swap() {
        setTo(from)
        setFrom(to)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    return (
        <div className='w-full flex justify-center items-center h-screen bg-cover bg-no-repeat' style={{background: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, }} >
            <div className='w-full'>
                <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 '>
                    <form onClick={(e) =>{ 
                        e.preventDefault()
                        convert() 
                    }}>
                        <div className='w-full mb-1'>
                            <InputBox label='From' amount={amount} onAmountChange={(amount) => setAmount(amount)} selectCurrency={from} currencyOptions = {options} onCurrencyChange={(currency) => setFrom(currency)}
                            />
                        </div>
                        <div className='relative w-full h-0.5'>
                            <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>swap</button>
                        </div>
                        <div className='w-full mt-1 mb-4'>
                        <InputBox label='To'currencyOptions = {options} selectCurrency={to} onCurrencyChange={(currency) => setTo(currency)} amount={convertedAmount}/>
                        </div>
                        <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
