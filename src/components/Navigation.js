import { useHistory } from 'react-router-dom'

function Navigation() {
    const history = useHistory()

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <h2>샘플 페이지 내비게이션</h2>
                    <p>테라 DAPP을 개발하기 위한 샘플코드를 만들어 둔 저장소입니다. 아래 메뉴를 통해 다양한 예제를 확인할 수 있습니다.</p>
                    <div class="alert alert-danger" role="alert">
                        주의: 아래 샘플페이지에서 발생시키는 트랜잭션은 메인넷으로 전송됩니다. <br />
                        본인이 누르려는 버튼이 의미하는 바를 이해한 다음 실행해주세요
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                        <a onClick={() => history.push('/connect') } className="btn btn-secondary">1. 테라 스테이션 크롬 익스텐션 및 모바일 지갑 연동</a>
                        <a onClick={() => history.push('/query')} className="btn btn-secondary">2. UST, KRW 자산 확인하기</a>
                        <a onClick={() => history.push('/send')} className="btn btn-secondary">3. 루나 송금하기</a>
                        <a onClick={() => history.push('/swap')} className="btn btn-secondary">4. 루나 &lt;-&gt; UST 발행해보기</a>
                        <a onClick={() => history.push('/contract_read')} className="btn btn-secondary">5. CW20 토큰 잔액 확인해보기</a>
                        <a onClick={() => history.push('/contract_write')} className="btn btn-secondary">6. 스마트 컨트랙트 호출하기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation