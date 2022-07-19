import { store } from "../reducers";
import { setProcessStatus } from "../reducers/appReducer";

export default async function (request, index) {
    try {
        index>=0 && console.log('2222 ' + index)
        index>=0 && store.dispatch(setProcessStatus({ index: index, state: 'Processing' }))
        const response = await request()
        index>=0 && store.dispatch(setProcessStatus({ index: index, state: 'Success' }))
        return response
    } catch (e) {
        console.log('Ошибка ' + e?.response?.data?.message)
        index>=0 && store.dispatch(setProcessStatus({ index: index, state: "Error", mess: e?.response?.data?.message }))
    }
};
