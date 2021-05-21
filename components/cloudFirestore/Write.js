import firebase from "firebase/app";
import "firebase/firestore";

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .add({
          string_data: "Hello",
          time_stamp: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        .then(alert("Data has sent"));
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={sendData}>Send</button>;
};

export default WriteToCloudFirestore;
