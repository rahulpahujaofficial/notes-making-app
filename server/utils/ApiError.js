class ApiError {
    constructor(status,message){
        this.status=status
        this.message=message
        this.success=false
    }
}

export {ApiError}