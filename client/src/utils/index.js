import axios from 'axios'

export function userLog (data, type='signIn') {
    const url = 
        type === 'signIn' 
            ? '/user/signin' 
            : type === 'signUp' 
                ? '/user/signup' 
                : '/user/signout'
    
    axios.post(url, data).then(response => {
        console.log(response)
    }).catch(e => console.log(e))
}