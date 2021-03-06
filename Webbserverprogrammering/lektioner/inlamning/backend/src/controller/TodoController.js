import toDoData from '../data/toDoData.js'

const creatToDoObject = (req, res) => {
    const {name, todo} = req.body
    const newObject = {
        doneTodo: false,
        id: toDoData.length,
        name: name,
        todo: todo,
    }
    toDoData.push(newObject)
    res.status(201).send(toDoData)
}

const getAllToDo = (req, res) => {
    res.status(200).send(toDoData)
}

const toDoNames = () => {
    const names = []
    toDoData.forEach(task => {
        names.push({
            name: task.name
        })
    })
    return names
}

const getToDoNames = (req, res) => {
    const responseFromDb = toDoNames()
    res.status(200).send(responseFromDb)
}

const searchToDoByName = (name) => {
    let object = `Could not find "${name}" in database`
    toDoData.forEach(task => {
        if (name === task.name) {
            object = task
            return task
        }
    })
    return object
}

const getToDoByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = searchToDoByName(name)
    res.status(200).send(responseFromDb)
}

const modifyToDoByName = (name, newName, todo) => {
    let object = `Could not find "${name}" in database`
    toDoData.forEach(task => {
        if (name === task.name) {
            task.name = newName
            task.todo = todo
            object = task
            return task
        }
    })
    return object
}

const updateToDoByName = (req, res) => {
    const {name, newName, todo} = req.body
    const response = modifyToDoByName(name, newName, todo)
    res.status(202).send(response)
}

const removeToDoByName = (name) => {
    let text = `User with name: "${name}" `

    for (let i = 0; i < toDoData.length; i++) {
        if (name === toDoData[i].name) {
            text += `was deleted from database!`
            toDoData.splice(i, 1)
            return text
        }
    }

    text += `don't exist in database!`
    return text
}

const deleteToDoByName = (req, res) => {
    const name = req.params.name
    const responseFromDB = removeToDoByName(name)
    res.status(200).send(responseFromDB)
}

const toggleToFalse = (req, res) => {
    const id = Number(req.params.id)
    toDoData[id].doneTodo = !toDoData[id].doneTodo
    res.status(202).send(toDoData[id])
}


export default {
    creatToDoObject,
    getAllToDo,
    toDoNames,
    getToDoNames,
    getToDoByName,
    updateToDoByName,
    deleteToDoByName,
    toggleToFalse,
}