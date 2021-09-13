import Page from 'components/Page';

// 아래는 애로우 함수로 정의했을 뿐 
// function 키워드를 이용해서 함수를 정의해도 결과는 동일하다.
const Comment = ({ name, comment, date }) => {
    return (
        <div style={{ border: "1px solid #777", padding: 15, marginBottom: 15 }}>
            <div>
                <span>{name}</span>
                <span>{date}</span>
            </div>
            <div>
                {comment}
            </div>
        </div>
    )
}


export default function ComponentSample() {
    return (
        <Page title={"컴포넌트 샘플"} description={"댓글 리스트"}>
            <Comment name={'이도현'} date={'2021-09-03'} comment={'하잇'} />
            <Comment name={'이도현'} date={'2021-09-03'} comment={'하잇'} />
            <Comment name={'이도현'} date={'2021-09-03'} comment={'하잇'} />
            <Comment name={'이도현'} date={'2021-09-03'} comment={'하잇'} />
            <Comment name={'이도현'} date={'2021-09-03'} comment={'하잇'} />
            <Comment name={'이도현'} date={'2021-09-03'} comment={'하잇'} />
        </Page>
    )
}