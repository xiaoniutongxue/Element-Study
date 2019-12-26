new Vue({
    el:"#app",
    data:function(){
        return{
            input:'',
            userInfo:{
                name:'',
                gander:'',
                phoneNum:'',
                birthDay:''
            },
            tableData: [{
                name:'王小虎',
                gander:'男',
                phoneNum:'13142135083',
                birthDay:'20191202'
            }]
        }
    },
    methods:{

    }
})
