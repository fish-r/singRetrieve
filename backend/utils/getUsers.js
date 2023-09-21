// Functions that simulate retrieving users from a database
const getUsers = () => {
    return [
        { uinfin: 'S9812381D', username: 'ABC', password: '123' },
        { uinfin: 'S7654321B', username: 'T1234567B', password: 'password2' },
    ];

}

const getUserByUsername = (username) => {
    return getUsers().find(
        (user) => user.username == username
    )
}

const getUserById = (userId) => {
    return getUsers().find(
        (user) => user.userId === userId
    )
}

module.exports = { getUsers, getUserByUsername, getUserById }