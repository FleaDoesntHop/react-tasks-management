export const logForms = {
    signIn: [
        {
            label: '用户名',
            icon: 'account_box',
            type: 'text',
            propName: 'name'
        },
        {
            label: '密码',
            icon: 'lock',
            type: 'password',
            propName: 'pwd'
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
            propName: 'name'
        },
        {
            label: '密码',
            icon: 'lock',
            type: 'password',
            propName: 'pwd'
        },
        {
            label: '确认密码',
            icon: 'lock',
            type: 'password',
            propName: 'confirmPwd'
        }
    ]
}