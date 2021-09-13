import Page from 'components/Page';
import { useState } from 'react';

/*
 * [직접 해보기]
 * 1. 카운터 감소하기 버튼 만들기 (단, 카운터가 음수가 되면 안된다)
 * 2. 여러개의 카운터를 만들어보기
 */
export default function CounterSample(){
    let [counter, setCounter] = useState(1);

    function handleClick() {
        setCounter(counter + 1)
    }

    return (
        <Page title={"데이터 바인딩 - 카운터 예시"} description={"카운터 프로그램"}>
            <div>
                카운터 : {counter}
            </div>
            <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={handleClick}>
                증가하기
            </button>
        </Page>
    )
}