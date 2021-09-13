import { useState } from "react"

function C() {
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");

    return (
        <div>
            잔액을 ${balance}
        </div>
    )
}