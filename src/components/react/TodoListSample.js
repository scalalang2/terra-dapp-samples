import Page from 'components/Page';
import { useState } from 'react';
import { Input, Button, Divider, Checkbox, Tag } from 'antd';
import { MinusCircleOutlined, CheckOutlined } from '@ant-design/icons'


export default function TodoListSample() {
    // 배열 : [작업목록을 담아둘 곳]
    // 인풋값에서 받는 문자열
    let [todolist, setTodolist] = useState([])
    let [todoName, setTodoName] = useState("")

    const handleAddTodo = () => {
        setTodolist([...todolist, todoName])
    }

    return (
        <Page title={"데이터 바인딩 - Todo List"} description={"할 일 목록을 만들어본다"}>
            <Divider>더 해보기</Divider>
            <ol>
                <li>작업 삭제해보기 (배열에서 값 삭제) <Tag color={'green'}>쉬움</Tag></li>
                <li>체크 된 작업들은 우측에 완료된 작업 목록에 보여주기 <Tag color={'green'}>쉬움</Tag></li>
                <li>추가 버튼을 누른 직후 입력 필드에 내용 비우기 <Tag color={'green'}>쉬움</Tag></li>
                <li>예상 날짜 추가해보기 <Tag color={'yellow'}>중간</Tag></li>
                <li>작업 목록에 다중 플래그 추가해보기 <Tag color={'red'}>어려움</Tag></li>
            </ol>

            <Divider>결과</Divider>
            <div className="row">
                <div className="col-md-6">
                    <h6>작업 리스트</h6>
                    <Input size={'large'}
                        placeholder={'작업을 입력하세요.'}
                        prefix={<CheckOutlined />} 
                        value={todoName}
                        onChange={e => setTodoName(e.target.value)}/>
                    <Button type={'primary'} 
                        size={'large'} 
                        block={true} 
                        style={{ marginTop: 15 }}
                        onClick={() => handleAddTodo()}>작업 추가</Button>
                    <Divider style={{ marginTop: 30 }}>추가된 작업 리스트</Divider>
                    { todolist.map(val => 
                        <div className="row">
                            <div className="col-md-1">
                                <Checkbox />
                            </div>
                            <div className="col-md-10">
                                { val }
                            </div>
                            <div className="col-md-1 text-right">
                                <Button type="link"><MinusCircleOutlined /></Button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-md-4">
                    <h6>완료된 작업 목록</h6>
                </div>
            </div>
        </Page>
    )
}