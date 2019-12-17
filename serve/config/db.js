const config = {
    // 启动端口
    port: 3000,

    // 数据库配置
    database: {
        DATABASE: 'user',
        USERNAME: 'root',
        PASSWORD: 'root',
        PORT: '3306',
        HOST: '180.76.233.214'
    }
}


// 数据库配置
// database: {
//     DATABASE: 'xxx', //数据库名称
//         USERNAME: 'xxx', //mysql用户名
//         PASSWORD: 'xxx', //mysql密码
//         PORT: '3306', //mysql端口号
//         HOST: 'xx.xxx.xx.xx' //服务器ip
// }
module.exports = config
