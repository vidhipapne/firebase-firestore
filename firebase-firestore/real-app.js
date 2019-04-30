const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

db.collection('cafes').orderBy('city').onSnapshot(onSnapshot => {
	let changes = snapshot.docChanges();
	changes.forEach(changes => {
		console.log(changes.doc.data()
	    }
	})