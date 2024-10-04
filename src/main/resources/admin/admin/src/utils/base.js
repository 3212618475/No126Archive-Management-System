const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootg2p7x/",
            name: "springbootg2p7x",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "档案管理系统"
        } 
    }
}
export default base
