import axios from "axios";

export const loginAPI = async ({email, password}) => {
    const response = await fetch("https://api.bkstarstudy.com/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    })

    if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Sai email hoặc mật khẩu')
    }
    return await response.json()
}
export const registerAPI = async (data) => {
    const res = await fetch("https://api.bkstarstudy.com/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Đăng ký thất bại");
    return await res.json()
}