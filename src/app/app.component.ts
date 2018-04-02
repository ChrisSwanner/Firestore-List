import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import * as $ from 'jquery';

interface Post {
  title: string;
  content: string;
  picture: File;
}

interface PostId extends Post {
  id: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title:string;
  content:string;
  // picture:File;
  postDoc: AngularFirestoreDocument<Post>;
  singlePost: Observable<Post>;


  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        console.log(id);
        return { id, data };
      });
    });
  }

  addPost() {
    let picture = $('#picture').get(0).files[0];
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, picture});

  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.singlePost = this.postDoc.valueChanges();
    console.log(postId)
  }

  uploadImage(image: string, postId: string): any {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(`${postId}.jpg`);
  }

  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }

}
