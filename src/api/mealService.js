import { instance } from '../config/mealInstance'

export const getMealRequest = () => {
    return instance.get('/foods')
}
export const getBasketReq = () => {
    return instance.get('/basket')
}
export const addToBasketReq = (newItem) => {
    return instance.post(`/foods/${newItem.id}/addToBasket`, {
        amount: newItem.amount,
    })
}
export const updateBasketItemReq = (id, basketAmount) => {
    return instance.put(`/basketItem/${id}/update`, {
        amount: basketAmount,
    })
}
export const deleteBasketItemReq = (id) => {
    return instance.delete(`/basketItem/${id}/delete`)
}
