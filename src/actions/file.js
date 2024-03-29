import axios from 'axios'
import { addFile, deleteFileAction, setFiles } from "../reducers/fileReducer";
import { addUploadFile, changeUploadFile, showUploader } from "../reducers/uploadReducer";
import { hideLoader, showLoader, setProcessStatus } from "../reducers/appReducer";
import { API_URL } from "../utils/config";
import { $authHost, $host } from '.';
import { setUserExtend } from '../reducers/userReducer';

export function getFiles(dirId, sort) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            let url = `${API_URL}api/files`
            if (dirId) {
                url = `${API_URL}api/files?parent=${dirId}`
            }
            if (sort) {
                url = `${API_URL}api/files?sort=${sort}`
            }
            if (dirId && sort) {
                url = `${API_URL}api/files?parent=${dirId}&sort=${sort}`
            }
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            dispatch(setFiles(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function createDir(dirId, name) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/files`, {
                name,
                parent: dirId,
                type: 'dir'
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadFile(file, dirId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            if (dirId) {
                formData.append('parent', dirId)
            }
            const uploadFile = { name: file.name, progress: 0, id: Date.now() }
            dispatch(showUploader())
            dispatch(addUploadFile(uploadFile))
            const response = await axios.post(`${API_URL}api/files/upload`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    if (totalLength) {
                        uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        dispatch(changeUploadFile(uploadFile))
                    }
                }
            });
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export async function downloadFile(file) {
    const response = await fetch(`${API_URL}api/files/download?id=${file._id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    if (response.status === 200) {
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
}

export function deleteFile(file) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files?id=${file._id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(deleteFileAction(file._id))
            alert(response.data.message)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function searchFiles(search) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/files/search?search=${search}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(setFiles(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}


export async function downloadUserFile(userId, folder, file) {
    try {
        const response = await fetch(`${API_URL}api/files/downloadUserFile?userId=${userId}&file=${file.name}&folder=${folder}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        if (response.status === 200) {
            const blob = await response.blob()
            const downloadUrl = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = downloadUrl
            link.download = file
            document.body.appendChild(link)
            link.click()
            link.remove()
        }
        console.log('action222 ' + response.status)
        console.log('mes ')

    }
    catch (e) {
        console.log(e)
    }
}

export function postUserFile(userId, folder, file) {
    return async dispatch => {
        try {
            dispatch(setProcessStatus({ index: 0, state: 'Processing' }))
            console.log('add user file ' + userId)
            const formData = new FormData()
            formData.append('file', file)
            formData.append('userId', userId)
            formData.append('folder', folder)
            console.log('Отправка запроса ' + formData)
            const response = await $authHost.post(`api/files/postUserFile`, formData)
            dispatch(setUserExtend(response.data))
            dispatch(setProcessStatus({ index: 0, state: 'Success' }))
            console.log('Ответ сервера: ' + response.data)
        }
        catch (e) {
            console.log('Error post user file ' + e?.response?.data?.message)
            dispatch(setProcessStatus({ index: 0, state: "Error", mess: e?.response?.data?.message }))
        }
    }
}

export function deleteUserFile(userId, folder, fileName) {
    return async dispatch => {
        try {
            console.log('add user file ' + userId)
            const response = await $authHost.delete(`api/files/deleteUserFile`, {
                params: {
                    fileName,
                    folder,
                    userId
                }
            })
            console.log('Ответ сервера: ' + response.data)
            dispatch(setUserExtend(response.data))
        }
        catch (e) {
            console.log('Error post user file ' + e?.response?.data?.message)
        }
    }
}