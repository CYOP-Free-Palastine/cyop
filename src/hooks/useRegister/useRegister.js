import { auth, db } from "@api/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const handleRegister = async (e, setIsLoading, registerData) => {
    e.preventDefault();
    setIsLoading(true);

    if (registerData.password !== registerData.confirm_password) {
        toast.warning("Passwords do not match", {
            position: "top-right"
        });
        setIsLoading(false);
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password);
        const user = userCredential.user;
        
        if (user) {
            await setDoc(doc(db, "Users", user.uid), {
                user_name: registerData.user_name,
                email: user.email,
            });

            await sendEmailVerification(user);
            toast.success("User registered successfully! Please check your email to verify your account.", {
                position: "top-right"
            });
            setIsLoading(false);
        }
    } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
            position: "top-right"
        });
        setIsLoading(false);
    }
};