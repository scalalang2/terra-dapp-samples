import { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function DataBindingSample(){
    let [counter, setCounter] = useState(0);
    let history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => history.goBack()}>뒤로가기</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 pt-3">
                    <h2>데이터 바인딩</h2>
                    <p>카운터 예시</p>
                    <hr />
                </div>
                <div className="col-md-12">
                    <div>
                        카운터 : {counter}
                    </div>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => setCounter(counter + 1)}>
                        증가하기
                    </button>
                </div>
            </div>
        </div>
    )
}