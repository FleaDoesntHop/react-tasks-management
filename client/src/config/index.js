export const logForms = {
    signIn: [
        {
            label: '用户名',
            icon: 'account_box',
            type: 'text',
            propName: 'signInName'
        },
        {
            label: '密码',
            icon: 'lock',
            type: 'password',
            propName: 'signInPwd'
        },
        {
            label: '记住我',
            icon: '',
            type: 'checkbox',
            propName: 'remember'
        }
    ],
    signUp: [
        {
            label: '用户名',
            icon: 'account_box',
            type: 'text',
            propName: 'signUpName'
        },
        {
            label: '密码',
            icon: 'lock',
            type: 'password',
            propName: 'signUpPwd'
        },
        {
            label: '确认密码',
            icon: 'lock',
            type: 'password',
            propName: 'confirmPwd'
        }
    ]
}