import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const materialComponents = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule {}
