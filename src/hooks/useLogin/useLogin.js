import { auth } from "@api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const handleLogin = async (e, setIsLoading, loginData) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
        const token = await userCredential.user.getIdToken(); // Retrieve the token
        window.localStorage.setItem('userId', userCredential._tokenResponse.localId)
        window.localStorage.setItem("token", token); // Store the token in localStorage
        toast.success("User logged in successfully", {
            position: "top-right"
        });
        setIsLoading(false);
        window.location.href = "/profile";
    } catch (error) {
        toast.error(error.message, {
            position: "top-right"
        });
        setIsLoading(false);
    }
};
