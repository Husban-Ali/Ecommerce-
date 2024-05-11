import { collection, getDocs, addDoc,doc,deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase.Config";
import { storage } from "../Firebase/Firebase.Config";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";

export const getAllProducts = async () => {
  try {
      const querySnapshot = await getDocs(collection(db, 'products'));

      const productsData = querySnapshot.docs.map(doc => {
          return {
              id: doc.id, 
              ...doc.data() 
          };
      });
      return productsData;

  } catch (error) {
      console.error('Error getting documents: ', error);
  }
};


export const addProduct = async (data) => { 
  const file = data.img[0]; 
  
  try {
      const storageRef = ref(storage, `product_images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(snapshot.ref);
      const docRef = await addDoc(collection(db, "products"), {
          img: imageUrl,
          name: data.name,
          price: data.price,
          description: data.description
      });
      console.log("Document written with ID: ", docRef.id);
 } catch (error) {
      console.error("Error adding document: ", error);
  }
};

export const deleteProduct = async (id) => {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef)
     .then(() => {

        console.log("Document successfully deleted!");
        window.location.reload();
      })
     .catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
