import { HIDE_LOADER, SHOW_LOADER } from "./types";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}