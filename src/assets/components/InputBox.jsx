import React from "react";
function InputBox({label, amount, onAmountChange, selectCurrency, currencyOptions=[], onCurrencyChange}) {
    return (
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block">{label}</label>
            <input type="number" placeholder="Amount" className="outline-none w-full bg-transparent py-1.5" value={amount} onChange={(e) => onAmountChange && onAmountChange(e.target.value)} />
            </div>
            <div className="w-1/2 flex justify-end flex-wrap text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e) => onCurrencyChange(e.target.value) }>
                   { currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                    
                    <option value="usd">usd</option>
                </select>
            </div>
        </div>
       
    );
}

export default InputBox;
