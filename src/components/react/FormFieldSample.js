import Page from 'components/Page';
import { useState } from 'react';
import { Input, Tag } from 'antd';


export default function FormFieldSample() {
    let [id, setId] = useState("");
    let [email, setEmail] = useState("");

    return (
        <Page title={"데이터 바인딩 - 입력 폼"} description={"입력 폼"}>
            <div className="row">
                <div className="col-md-4">
                    <label>* ID</label>
                    <Input value={id} onChange={e => setId(e.target.value)} />
                    <label>* Email</label>
                    <Input value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <Tag color={'blue'}>{id + " : " + email}</Tag>
                </div>
            </div>
        </Page>
    )
}