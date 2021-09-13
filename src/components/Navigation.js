import { useHistory } from 'react-router-dom'
import { Button, Alert } from 'antd'

function Navigation() {
    const history = useHistory()

    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                    <h2>샘플 페이지 내비게이션</h2>
                    <p>테라 DAPP을 개발하기 위한 샘플코드를 만들어 둔 저장소입니다. 아래 메뉴를 통해 다양한 예제를 확인할 수 있습니다.</p>
                    <Alert type={'warning'} 
                        message={'주의'} 
                        description={'아래 샘플페이지에서 발생시키는 트랜잭션은 메인넷으로 전송됩니다.\n본인이 누르려는 버튼이 의미하는 바를 이해한 다음 실행해주세요'} />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <h5>리액트 기초</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                        <Button onClick={() => history.push('/react/components')} type="default" size={'large'}>1. 함수형 컴포넌트</Button>
                        <Button onClick={() => history.push('/react/counter')} type="default" size={'large'}>2. 데이터 바인딩 (카운터)</Button>
                        <Button onClick={() => history.push('/react/fields')} type="default" size={'large'}>3. 데이터 바인딩 (입력 핸들링)</Button>
                        <Button onClick={() => history.push('/react/todolist')} type="default" size={'large'}>4. 데이터 바인딩 (할 일 목록)</Button>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <h5>리액트 + 테라</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                        <Button onClick={() => history.push('/connect') } type="default" size={'large'}>1. 테라 스테이션 크롬 익스텐션 및 모바일 지갑 연동</Button>
                        <Button onClick={() => history.push('/query')} type="default" size={'large'}>2. 자산 정보 조회하기</Button>
                        <Button onClick={() => history.push('/send')} type="default" size={'large'}>3. 루나 송금하기</Button>
                        <Button onClick={() => history.push('/swap')} type="default" size={'large'}>4. 루나 &lt;-&gt; UST 발행해보기</Button>
                        <Button onClick={() => history.push('/contract_read')} type="default" size={'large'}>5. CW20 토큰 잔액 확인해보기</Button>
                        <Button onClick={() => history.push('/contract_write')} type="default" size={'large'}>6. 스마트 컨트랙트 호출하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation