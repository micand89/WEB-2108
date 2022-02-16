import http from './MyApi'

const Alive = () => {
    return http.get('/')
}

const name = (name) => {
    return http.post(`/name/${name}`)
}

const addition = (num1, num2) => {
    return http.post(`/calc/add/${num1} / ${num2}`)
}

const subtraction = (num1, num2) => {
    return http.post(`calc/sub/${num1} / ${num2}`)
}
export default {
    Alive,
    name,
    addition,
    subtraction,
}