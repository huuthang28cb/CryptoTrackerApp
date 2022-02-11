import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext(); // Khi render một component sẽ subcribe đến Context object này và sẽ đọc giá trị hiện tại

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("INR"); // Đơn vị tiền hiện tại
    const [symbol, setSymbol] = useState("₹"); // Biểu tượng của tiền tệ hiện tại

    useEffect(() => {
        if (currency === "INR") setSymbol("₹"); // Rupe Ấn độ
        else if (currency === "USD") setSymbol("$"); // Dollar mỹ
        else if (currency === "VNĐ") setSymbol("vnđ"); // Việt Nam đồng
    }, [currency]);

    return (
        <Crypto.Provider value={{ currency, setCurrency, symbol }}>
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
};