import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { increment } from "firebase/database";
import {addDoc, collection, doc, enableIndexedDbPersistence, getDoc, getDocs, getFirestore, limit, query, updateDoc, where, orderBy, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-zY4c9Vr4bEIAZ92kyyDL8y91jTogVo",
  authDomain: "smartdiet-1.firebaseapp.com",
  projectId: "smartdiet-1",
  storageBucket: "smartdiet-1.appspot.com",
  messagingSenderId: "144433695269",
  appId: "1:144433695269:web:ca13f9121040608f9e4dcc",
  measurementId: "G-S17K15G8D9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
//await enableIndexedDbPersistence(db);
const analytics = getAnalytics(app);

export const signInUser = (email, password, setError) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    alert(`User with ${user.email} has logged in successfully`);
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return;
}

export const getNews= async (pagination, category, setNews, setLoading) => {
  setLoading(true);
  const newsCollectionRef = collection(db, "news");
  var q = query(newsCollectionRef, orderBy("timestamp", "desc"), limit(pagination));
  if(category !== 'all'){
    q = query(newsCollectionRef, where('category', '==', category), orderBy("timestamp", "desc"), limit(pagination));
  }
  
  const news = [];
  await getDocs(q).then((data) => {
    data.forEach((doc) => {
     news.push({id: doc.id,...doc.data()});
    });
  }).then(() => {
    setNews(news);
    setLoading(false);
  }).catch(err => setLoading(false));
};

export const getNewsItem = async (newsId, setNewsItem, setLoading) => {
  setNewsItem(null);
  setLoading(true);
  const newsDocRef = doc(db, "news", newsId);
 const newsDoc = await getDoc(newsDocRef);
  if (newsDoc.exists()) {
    setNewsItem({id: newsDoc.id, ...newsDoc.data()})
  }
  setLoading(false);
  return;
};

export const addNewsViews = async (newsId) => {
  const newsDocRef = doc(db, "news", newsId);
  const newsDoc = await getDoc(newsDocRef);
  if (newsDoc.exists()) {
    try {
      await updateDoc(newsDocRef, {
        views: increment(1)
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
  return;
};

export const addContact = async (data, setSuccess, setError) => {
  const contactsDocRef = collection(db, "contacts");
  await addDoc(contactsDocRef, {...data, responded: false}).then(async (userCredential) => {
    setSuccess("We will get back to you as soon as possible.")
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
};

export const addMailList = async (data, setSuccess, setError) => {
  const mailDocRef = doc(db, "mail-list", data.email);
  const mailDoc = await getDoc(mailDocRef);
  if (mailDoc.exists()) {
    return setError("The email already exists! Try a new one");
  }
  await setDoc(mailDocRef, {...data}).then(async (response) => {
    setSuccess("You are now subscribe to our newsletter.")
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setError(errorMessage);
  });
  return;
};

export  const addNews = async (data, setError, setLoading) => {
  setLoading(true);
  const newsDocRef = collection(db, "news");
  if (data.image) {
    const imageRef = ref(storage, `images/${data.image.name.split(" ").join("_")}`);
    const metadata = {
        contentType: 'image/jpeg',
    };
    await uploadBytes(imageRef, data.image, metadata).then((response) => {
      return getDownloadURL(response.ref);
    }).then(async(downloadURL) => {
      await addDoc(newsDocRef, {
        title: data.title,
        description: data.description,
        category: data.category,
        imageUrl: downloadURL,
        timestamp: new Date().toLocaleDateString()
      }).then(async (docRef) => {
        window.location.replace(`/news/${docRef.id}`);
      }).catch(async (error) => {
        setError(error.message);
        setLoading(false);
      });
    })
  } else {
    alert('Please} upload an image');
    setLoading(false);
  };
  
};