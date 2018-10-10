export const LOAD_PAGE = 'LOAD_PAGE'
export const loadPage = (page, offset) => ({
    type: LOAD_PAGE,
    page: page,
    offset: offset
})


export const SELECT_PROJECT = 'SELECT_PROJECT'

export function selectProject(project) {
    return {
        type: SELECT_PROJECT,
        project: project
    }
}

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'

export function requestProjects(page, offset) {
    return {
        type: REQUEST_PROJECTS,
        page: page,
        offset: offset
    }
}

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

function receiveProjects(json) {
    return {
        type: RECEIVE_PROJECTS,
        projects: json,
    }
}


export function fetchProjects(page, offset) {
    return function (dispatch) {
        dispatch(requestProjects(page, offset))

        return fetch(`https://cdn2.hubspot.net/hubfs/4193363/crm-extension/project.json`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveProjects(json))
            )
    }
}