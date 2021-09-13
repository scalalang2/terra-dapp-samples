import { useEffect, useState } from "react"

function A() {
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");

    return (
        <div>
            당신의 잔액은 ${balance} 입니다.
        </div>
    ) 
}