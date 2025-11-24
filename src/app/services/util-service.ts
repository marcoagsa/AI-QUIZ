import { inject, Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private readonly loadingCtrl = inject(LoadingController);
  private readonly alertController = inject(AlertController);

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });

    await loading.present();

    return loading;
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Info',
      subHeader: '',
      message,
      buttons: ['Action'],
    });

    await alert.present();
  }
}
