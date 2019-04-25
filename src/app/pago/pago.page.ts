import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import {NavController} from '@ionic/angular';
import {IdeModalPage} from '../ide-modal/ide-modal.page';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  constructor(public loadingController: LoadingController,
              public alertController: AlertController,
              public navCtrl: NavController) { }

  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;
  barcodeValue;
  
  ngOnInit() {

  }


  async enviar() {

    const alert = await this.alertController.create({
      header: 'Numero de transferencia',
      message: '<strong>54832156</strong>',
      inputs: [
        {
          name: 'name1',
          type: 'number',
          id: 'id',
          placeholder: 'ID de identificacion'
        }
      ],
      buttons: [
        {
          text: 'Scan ID',
          cssClass: 'secondary',
          handler: () => {
            console.log("Scanner");
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  onValueChanges(result){
    this.barcodeValue = result.codeResult.code;
}

}
