import { getDoc, doc } from "firebase/firestore";

export const useGetOneData = ({ docRef, setData }) => {

  getDoc(docRef)
    .then((doc) => {
      if (doc.exists()) {
        setData({ ...doc.data(), id: doc.id });
      } else {
        console.log("Data is not defined");
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}