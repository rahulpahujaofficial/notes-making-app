class ApiRsponse{
    constructor(status,message,data="No data available"){
        this.status=status
        this.message=message
        this.data=data
        this.success=true
    }
}

export {ApiRsponse}