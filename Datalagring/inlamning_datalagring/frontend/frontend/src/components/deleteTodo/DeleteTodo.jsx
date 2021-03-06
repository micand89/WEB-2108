import TodoService from "../../utils/api/services/TodoService"
import {useState} from "react"
import css from './DeleteTodo.module.css'
import close from '../../utils/global/image/close.png'

const DeleteTodo = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }

    const sendDataToApi = () => {
        TodoService.deleteTodo(userId)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                setData((error.response.data.message))
            })
    }

    return (
        <>
            <button onClick={toggleModal} data-testid='buttonText'>Ta bort</button>
            {modal && (
                <div className={css.popup}>
                    <div className={css.overlay}>
                        <div className={css.content}>
                            <img src={close} alt="close" className={css.close} onClick={toggleModal}/>
                            <h2 data-testid='text'>Ta bort en Todo via Id</h2>
                            <span>Id:</span> <input type="text"
                                       value={userId}
                                       onChange={event => setUserId(event.target.value)}/>
                            <button onClick={sendDataToApi}>Ta bort</button>
                            <h2>{data}</h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteTodo