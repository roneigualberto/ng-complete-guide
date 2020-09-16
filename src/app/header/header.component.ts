import { DataStoreService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStore: DataStoreService) {}
  onSaveData() {
    this.dataStore.storeRecipes();
  }

  onFetchData() {
    this.dataStore.fetchRecipes();
  }
}
