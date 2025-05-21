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
//get home book
export const homeBookApi = async() =>{
    return await commonApi('GET', `${serverurl}/all-home-book`)
}

//get all jobs
export const getAllJobsApi = async(searchKey) =>{
    return await commonApi('GET', `${serverurl}/all-jobs?search=${searchKey}`)
}
//--------------------------------------------------------------
//user api

//upload a book
export const uploadBookApi = async (reqBody,reqHeader) =>{
        return await commonApi('POST', `${serverurl}/add-book`,reqBody, reqHeader)
}

//get all books
export const getAllBookApi = async(searchKey, reqHeader) =>{
    //query parameter baseurl?key=value
    return await commonApi('GET',`${serverurl}/all-books?search=${searchKey}`,'',reqHeader)
}

//to view a book
export const viewABookApi = async(id) =>{
    return await commonApi('GET',`${serverurl}/view-book/${id}`)
}

//--------------------------------------------------------------
//admin api

//get all books for admin
export const getAllBookAdminApi = async(reqHeader) =>{
    return await commonApi('GET',`${serverurl}/admin-all-books`,'',reqHeader)
}
//api to approve a book
export const approveBookApi = async(reqBody, reqHeader) =>{
    return await commonApi('PUT',`${serverurl}/approve-book`,reqBody,reqHeader)
}

//api to get all users
export const getAllUsersApi = async (reqHeader) =>{
     return await commonApi('GET',`${serverurl}/all-users`,"",reqHeader)
}

//api to add jobs
export const addJobApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/add-job`,reqBody)
}

//api to delete a job
export const deleteJobApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/delete-job/${id}`)
}