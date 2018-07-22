import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { User } from '../../model/user';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ioni cframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user= {} as User;
  
  constructor( private afAuth: AngularFireAuth,public db : AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  // gotologin() {
  //   this.navCtrl.push(LoginPage);
  // }

  async register(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
        // this.navCtrl.push(LoginPage)
      this.db.list('/data/').push(user);
      console.log(result);
      // this.navCtrl.push(LoginPage)

        
    }
    catch(e)
    {
    console.error(e);
    }
    }
    

    login(){
      this.navCtrl.push(LoginPage)
    }
  
}
