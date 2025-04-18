import { useState, useEffect } from "react";

export default function Login() {
    const [cccd, setCccd] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (cccd, password) => {
        try {
            const params = new URLSearchParams({ username, password });

            const response = await fetch(`http://localhost:8000/api/authenticate-user?${params}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data.message === "User authenticated successfully") {
                console.log("Đăng nhập thành công:", data);
                return 1;
            } else {
                console.error("Đăng nhập thất bại:", data.message);
                return 0;
            }
        } catch (error) {
            console.error("Error during login:", error);
            return -1;
        }
    }

    const onSubmit = () => {
        if (cccd && password) {
            console.log("Đăng nhập với CCCD:", cccd, "và mật khẩu:", password);
            onLogin(cccd, password).then((result) => {
                if (result === 1) {
                    alert("Đăng nhập thành công!");
                    window.location.href = "/home";
                } else if (result === 0) {
                    alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
                } else {
                    alert("Đã xảy ra lỗi trong quá trình đăng nhập.");
                }
            });
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSubmit();
        }
    };
        return (
            <div className="max-w-xl mx-auto p-4 space-y-6">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Đăng nhập</h2>
                    <input
                        type="text"
                        placeholder="CCCD của bạn"
                        value={cccd}
                        onChange={(e) => setCccd(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu của bạn"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                        onClick={onSubmit}
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
    );
}
