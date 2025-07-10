import { Component } from '@angular/core';
import { MatDialog,MatDialogActions,MatDialogClose,MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-delete-monster-confirmation-dialog',
  imports: [MatButtonModule,
            MatDialogActions,
            MatDialogClose,
            MatDialogContent,
            MatDialogTitle],
  templateUrl: './delete-monster-confirmation-dialog.html',
  styleUrl: './delete-monster-confirmation-dialog.css'
})
export class DeleteMonsterConfirmationDialog {

}
