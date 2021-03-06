import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { HomePage } from '..//../pages/home/home';
import { User } from '../../model/user';
import { AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= {} as User;
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.push(SignupPage)
  }

  async login(user: User){
    try{
      const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
      if (result){
      this.navCtrl.push(HomePage)
    }
      // console.log(result);
    }
    catch(e)
    {
    console.error(e);
    }
  }
}
