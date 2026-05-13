export const loginUser = async(data) => {
    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};
export const registerUser = async(data) => {
    try {
        const response = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();
        if (response.ok) {
            alert("Registration successful ✅");
        } else {
            alert(res.message);
        }
    } catch (err) {
        console.error(err);
        alert("Registration failed ❌");
    }
};
//createComplaint
export const createComplaint = async(formData) => {
    // console.log("issue response:", formData); // Debug log

    const res = await fetch("http://localhost:5000/api/createComplaint", {
        method: "POST",
        body: formData,
    });
    console.log(res)
    return await res.json();
};

//myComplaints
export const getComplaints = async() => {
    const response = await fetch("http://localhost:5000/api/allComplaints");

    return response.json();
};

//userDashboard
//export const userDashboard = async() => {
//  const response = await fetch("http://localhost:5000/api/userDashboard");

//return response.json();
//};

//create