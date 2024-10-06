
import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open('map');
  }

  closeModal() {
    this.modalService.close('map');
  }
}
