import * as actionTypes from './actionTypes'

export default function getTitle() {
    return {
        type: actionTypes.TITLE,
        payload: "Sample title"
    }
}