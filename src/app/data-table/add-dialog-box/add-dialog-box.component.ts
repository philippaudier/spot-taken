import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-add-dialog-box',
  templateUrl: './add-dialog-box.component.html',
  styleUrls: ['./add-dialog-box.component.scss']
})
export class AddDialogBoxComponent implements OnInit {

  constructor(
    @Inject( MAT_DIALOG_DATA ) private data: any,
    private dialogRef: MatDialogRef<AddDialogBoxComponent>,
    public snackBar: MatSnackBar) {}


  ngOnInit() {
  }

  addItem(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    this.dialogRef.close();
    console.log('Save');
  }

  cancelButton() {
    this.dialogRef.close();
    console.log('Canceled');
  }
}
