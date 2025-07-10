import { Component,inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.util';
import { PlayingCard } from '../../components/playing-card/playing-card';
import { Monster as MonsterModel } from '../../models/monster.model';
import { MonsterService } from '../../services/monster/monster';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMonsterConfirmationDialog } from '../../components/delete-monster-confirmation-dialog/delete-monster-confirmation-dialog';
@Component({
  selector: 'app-monster',
  imports: [ReactiveFormsModule,PlayingCard,MatButtonModule,MatInputModule,MatSelectModule],
  templateUrl: './monster.html',
  styleUrl: './monster.css'
})
export class MonsterComponent implements OnInit, OnDestroy {

private route = inject(ActivatedRoute);
private router = inject(Router);
private fb = inject(FormBuilder); 
private monsterService = inject(MonsterService); // Injecting the MonsterService to access its methods
private routeSubscription: Subscription | null = null;
private formValueSubscription: Subscription | null = null;
private readonly dialog = inject(MatDialog);



// name = new FormControl('',[Validators.required]);
// hp = new FormControl(0,[Validators.required, Validators.min(1), Validators.max(300)]); // Non-nullable to ensure it always has a value




formGroup = this.fb.group({
  name: ['', [Validators.required]],
  type: [MonsterType.ELECTRIC, [Validators.required]],
  hp: [0, [Validators.required, Validators.min(1), Validators.max(300)]], // Non-nullable to ensure it always has a value
  figureCaption: ['', [Validators.required]],
  attackName: ['', [Validators.required]],
  attackStrength: [0, [Validators.required]],
  attackDescription: ['', [Validators.required,Validators.min(1), Validators.max(200)]],
  logoEnergie: ['', []],
  imgArt: ['', [Validators.required]],
});

// formGroup = new FormGroup({
//   name: new FormControl('', [Validators.required]),
//   type: new FormControl(MonsterType.ELECTRIC, [Validators.required]),
//   hp: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(300)]),
//   figureCaption: new FormControl('', [Validators.required]),
//   attackName: new FormControl('', [Validators.required]),
//   attackStrength: new FormControl(0, [Validators.required]),
//   attackDescription: new FormControl('', [Validators.required]),
//   // logoEnergie: new FormControl('', [Validators.required]),
//   imgArt: new FormControl('', [Validators.required]),
// });

monsterTypes = Object.values(MonsterType); // Get all values of MonsterType enum
monsterId = -1; // Using signal to make it reactive
monster : MonsterModel = Object.assign(new MonsterModel(), this.formGroup.value); // Initialize monster with formGroup values


ngOnInit(): void {
  this.formValueSubscription = this.formGroup.valueChanges.subscribe(value => {
    this.monster = Object.assign(new MonsterModel(), value); // Update monster with formGroup values
  });

  this.routeSubscription = this.route.params.subscribe(params => {
    if (params['id']) {
    this.monsterId = parseInt(params['id']);
      const monsterFound = this.monsterService.get(this.monsterId);
    if(monsterFound){
        this.monster = monsterFound;
        this.formGroup.patchValue(this.monster);
    }// Patch the form with the monster data  
    }
  });
}

// ngOnInit(): void {
//   this.formValueSubscription = this.formGroup.valueChanges.subscribe(value => {
//     this.monster = Object.assign(new MonsterModel(), value); // Update monster with formGroup values
//   });

//   this.routeSubscription = this.route.params.subscribe(params => {
//     console.log('Route params:', params); // Débogage: afficher les paramètres de route
    
//     if (params['id']) { // Changer de 'monster' à 'id' pour correspondre au routage
//       this.monsterId = parseInt(params['id']);
//       console.log('Recherche du monstre avec ID:', this.monsterId);
      
//       const monsterFound = this.monsterService.get(this.monsterId);
//       console.log('Monstre trouvé:', monsterFound); // Débogage: afficher le monstre trouvé
      
//       if (monsterFound) {
//         this.monster = monsterFound;
//         this.formGroup.patchValue(this.monster);
//         console.log('Formulaire mis à jour avec les données du monstre');
//       } else {
//         console.log('Aucun monstre trouvé avec cet ID');
//       }
//     } else {
//       console.log('Pas d\'ID spécifié dans la route');
//     }
//   });
// }

ngOnDestroy(): void {
// if (this.routeSubscription) {
//   this.routeSubscription.unsubscribe();
// }
this.formValueSubscription?.unsubscribe();
this.routeSubscription?.unsubscribe();
}

// next(){
// let nextId = this.monsterId() || 0;
// nextId++;
// this.router.navigate(['/monster/', nextId]);
// // this.monsterId.set(nextId); // Update the signal with the new ID
// }

submit(event: Event){
  event.preventDefault();
  console.log('Form submitted:', this.formGroup.value);
if(this.monsterId === -1){
  this.monsterService.add(this.monster);
}else{
  this.monster.id = this.monsterId;
  this.monsterService.update(this.monster);
}
this.navigateBack();
}

isFieldValid(fieldName: string) {
  const formControl = this.formGroup.get(fieldName);
  return formControl?.invalid && (formControl.dirty || formControl.touched);
}

// setChanged(){
//   this.name.setValue('Changed Name');
// }

onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          imgArt: reader.result as string
        });
        // this.formGroup.get('imgArt')?.setValue(reader.result);
        // this.formGroup.get('imgArt')?.markAsDirty();
        // this.formGroup.get('imgArt')?.markAsTouched();
        console.log('Image uploaded:', reader.result);
      };
    }
  }


navigateBack() {
this.router.navigate(['/home']);
}

deleteMonster() {
const dialogRef = this.dialog.open(DeleteMonsterConfirmationDialog);

dialogRef.afterClosed().subscribe(result => {
  if (result) {
    this.monsterService.delete(this.monsterId);
     this.navigateBack();
  }else{
    this.router.navigate(['/monster', this.monsterId]);
  }
});
  
}


}
