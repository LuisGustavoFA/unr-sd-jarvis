import firebaseApp from "./firebaseApp.js";
import { collection, query, where, doc, getDocs, setDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const timesCollection = collection(db, 'times');

const firestoreServices = {
    saveTime(time) {
        const docRef = doc(timesCollection);
        setDoc(docRef, time)
    },

    async getAllTimes() {
        const result = [];
        const q = query(timesCollection);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let d = doc.data();
            d.id = doc.id;
            result.push(d);
        });
        return result;
    }
}

export default firestoreServices;