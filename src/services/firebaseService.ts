import { addDoc, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { db } from "../config/firebase";

const storage = getStorage();

// export const getUsers = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// };

// export const addUser = async (user: { name: string; age: number }) => {
//   await addDoc(collection(db, "users"), user);
// };


export const firebaseStitchContent = async () => {
    const querySnapshot = await getDocs(collection(db, "caderno"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const firebaseAddImage = async (image: any) => {
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);

}
export const firebaseCreateStitch = async (title: string, label: string, imageUrl: string) => {
    console.log('adding', title, label, imageUrl);
    await addDoc(collection(db, "caderno"), {
    title,
    label,
    imageUrl,
  });
};
