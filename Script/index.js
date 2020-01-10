new Vue({
    el:"#app",
    data:function(){
        return{
            input:'',
            type:'',
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
        //增加一组数据
        addUser(){
            //判断用户输入的数据是否正确
            if(!this.userInfo.name || !this.userInfo.gander || !this.userInfo.phoneNum || !this.userInfo.birthDay){
                alert("请输入完整信息!")
                return
            }
            if(this.userInfo.gander!='男' && this.userInfo.gander!='女'){
                alert("请输入正确的性别!");
                return;
            }
            if(!/^1[3456789]\d{9}$/.test(this.userInfo.phoneNum)){
                alert("请输入正确的电话号码!")
                return;
            }
            this.tableData.push(this.userInfo);
            this.userInfo={
                name:'',
                gander:'',
                phoneNum:'',
                birthDay:''
            }
        },
        //删除一条数据
        delUser(index){
            this.$confirm('确认删除？')
                .then(_ => {
                    this.tableData.splice(index,1)
                })
                .catch(_ => {});
        }
    }
})
