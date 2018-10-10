import {
    LOAD_PAGE,
    REQUEST_PROJECTS,
    RECEIVE_PROJECTS
} from '../actions'

const initialState = {
    projects: [
        {
            "name": "Off - Crispy",
            "stage": "Closed/Lost",
            "dateClosed": "09/22/2018",
            "owner": "Andre Vista",
            "value": "$5000"
        },
        {
            "name": "Off - Crispy",
            "stage": "Closed/Lost",
            "dateClosed": "09/22/2018",
            "owner": "Andre Vista",
            "value": "$5000"
        },
        {
            "name": "Off - Crispy",
            "stage": "Closed/Lost",
            "dateClosed": "09/22/2018",
            "owner": "Andre Vista",
            "value": "$5000"
        },
        {
            "name": "Off - Crispy",
            "stage": "Closed/Lost",
            "dateClosed": "09/22/2018",
            "owner": "Andre Vista",
            "value": "$5000"
        },
        {
            "name": "Off - Crispy",
            "stage": "Closed/Lost",
            "dateClosed": "09/22/2018",
            "owner": "Andre Vista",
            "value": "$5000"
        },
        {
            "name": "Off - Crispy",
            "stage": "Closed/Lost",
            "dateClosed": "09/22/2018",
            "owner": "Andre Vista",
            "value": "$5000"
        },
        {
            "name": "Off - Crispy",
            "stage": "Closed/Lost",
            "dateClosed": "09/22/2018",
            "owner": "Andre Vista",
            "value": "$5000"
        }],
    page: 1,
    offset: 0,
    isFetching: false,
}


const page = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PAGE:
            return {
                ...state,
                projects: [
                    ...state.projects,
                    {
                        "name": "Off - Crispy",
                        "stage": "Closed/Lost",
                        "dateClosed": "09/22/2018",
                        "owner": "Andre Vista",
                        "value": "$5000"
                    },
                    {
                        "name": "Off - Crispy",
                        "stage": "Closed/Lost",
                        "dateClosed": "09/22/2018",
                        "owner": "Andre Vista",
                        "value": "$5000"
                    },
                    {
                        "name": "Off - Crispy",
                        "stage": "Closed/Lost",
                        "dateClosed": "09/22/2018",
                        "owner": "Andre Vista",
                        "value": "$5000"
                    },
                    {
                        "name": "Off - Crispy",
                        "stage": "Closed/Lost",
                        "dateClosed": "09/22/2018",
                        "owner": "Andre Vista",
                        "value": "$5000"
                    },
                    {
                        "name": "Off - Crispy",
                        "stage": "Closed/Lost",
                        "dateClosed": "09/22/2018",
                        "owner": "Andre Vista",
                        "value": "$5000"
                    },
                    {
                        "name": "Off - Crispy",
                        "stage": "Closed/Lost",
                        "dateClosed": "09/22/2018",
                        "owner": "Andre Vista",
                        "value": "$5000"
                    },
                    {
                        "name": "Off - Crispy",
                        "stage": "Closed/Lost",
                        "dateClosed": "09/22/2018",
                        "owner": "Andre Vista",
                        "value": "$5000"
                    }

                ],
                page: action.page,
                offset: action.offset

            }
        case REQUEST_PROJECTS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_PROJECTS:

            return {
                ...state,
                isFetching: false,
                projects: [...state.projects, ...action.projects],
            }

        default:
            return initialState
    }
}

export default page
