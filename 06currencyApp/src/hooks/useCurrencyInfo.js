import { useEffect, useState } from 'react'

function useCurrencyinfo(currency) {
    const [useData, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) =>
            res.json()
        ).then((res) =>
            setData(res[currency])
        )
        console.log(useData);
    }, [currency])
    console.log(useData);
    return useData;
}
export default useCurrencyinfo;