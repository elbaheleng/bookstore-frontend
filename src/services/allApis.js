import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"


//register api - content type -application/json
export const registerApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/register`,reqBody)
}

// login
export const loginApi = async (reqBody) =>{
    return await commonApi('POST', `${serverurl}/login`,reqBody)
}

//google login api
export const googleLoginApi = async (reqBody) =>{
    return await commonApi('POST', `${serverurl}/google-login`,reqBody)
}
//--------------------------------------------------------------
//user api

//upload a book
export const uploadBookApi = async (reqBody,reqHeader) =>{
        return await commonApi('POST', `${serverurl}/add-book`,reqBody, reqHeader)

}

