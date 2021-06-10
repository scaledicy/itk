import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "cdbdb97f-f6ce-4024-8670-0f55e55be85a",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unFollowUser(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data);
    },
};

export const authAPI = {
    checkAuth() {
        return instance.get("auth/me").then(response => response.data);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance
            .put("profile/status/", {
                status: status,
            })
            .then(response => response.data);
    },
};
