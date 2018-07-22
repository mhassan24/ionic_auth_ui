import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController,
    public navParams : NavParams
  ) {
  }
ionViewWillLoad(){
this.afAuth.authState.subscribe(data => console.log(data));
}

signout() {
  this.afAuth.auth.signOut();
  this.navCtrl.push(LoginPage);
}


}
