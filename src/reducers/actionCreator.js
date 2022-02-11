let id = 0
export const AddCard = (data) => {
    return{
        type: "ADD_CARD",
    data: {
        cardId: ++id,
        title: data.title,
        description: data.description
    }
    }
}

export const removeCard = (index) =>{
    return {
        type: "REMOVE_CARD",
        data:{
            index
        }
    }
}

export const updateTitle = (value, id) =>{
    return {
        type: "UPDATE_TITLE",
        data:{
            value,
            id
        }
    }
}

export const updateDescription = (value, id) =>{
    return {
        type: "UPDATE_DESCRIPTION",
        data:{
            value,
            id,
        }
    }
}