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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },
};

export const authAPI = {
    checkAuth() {
        return instance.get("auth/me");
    },
    login(email, password) {
        return instance.post("auth/login", {
            email,
            password,
        });
    },
    logout() {
        return instance.delete("auth/login");
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put("profile/status/", {
            status: status,
        });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put("profile/photo/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
};
