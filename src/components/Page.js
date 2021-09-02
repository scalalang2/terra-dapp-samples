import { useHistory } from 'react-router-dom'

export default function Page({ title, description, children }) {
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
                    <h2>{ title }</h2>
                    <p>{ description}</p>
                    <hr />
                </div>
                <div className="col-md-12">
                    { children }
                </div>
            </div>
        </div>
    )
}