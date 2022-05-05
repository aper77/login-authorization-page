import { createStore } from "redux";


const initialState = {
    name: "Arman",
    surname: "Grigoryan",
    mail: 'arman.gmail.com',
    password: 'aper1234',
    initialContacts: [
        { name: "Aram", surname: "Bryan", mail: 'bryanmayis95@gmail.com', phone: "077777777" },
        { name: "Grig", surname: "Grigoryan", mail: 'grigoryan@gmail.com', phone: "091534263" },
        { name: "Lilit", surname: "Abrahamyan", mail: 'abrahamyan@gmail.com', phone: "043144432" },
        { name: "Varduhi", surname: "Sargsyan", mail: 'grig@gmail.com', phone: "093676543" }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "name":
            return {
                ...state,
                initialContacts: state.initialContacts.map((item, index) => {
                    if (index === action.payloadIndex)
                        item.name = action.payload
                    return item
                })
            };
        case "surname":
            return {
                ...state,
                initialContacts: state.initialContacts.map((item, index) => {
                    if (index === action.payloadIndex)
                        item.surname = action.payload
                    return item
                })
            };
        case "mail":
            return {
                ...state,
                initialContacts: state.initialContacts.map((item, index) => {
                    if (index === action.payloadIndex)
                        item.mail = action.payload
                    return item
                })
            };

        case "phone":
            return {
                ...state,
                initialContacts: state.initialContacts.map((item, index) => {
                    if (index === action.payloadIndex)
                        item.phone = action.payload
                    return item
                })
            };

        case "DELETE":
            return {
                ...state,
                initialContacts: state.initialContacts.filter((item, index) => index !== action.payloadIndex)
            };

        case "ADD":
            return {
                ...state,
                initialContacts: [...state.initialContacts, action.payload]
            };
        default:
            return state;
    }
};


const store = createStore(reducer);

export default store;
