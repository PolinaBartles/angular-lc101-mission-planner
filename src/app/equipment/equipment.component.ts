import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = [
    "Habitat dome",
    "Drones",
    "Food containers",
    "Oxygen tanks"
  ];


  toolBeingEdited: string = null;
  equipmentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(instrument: string) {
    this.equipment.push(instrument);
  }

  remove(tool: string) {
    let index = this.equipment.indexOf(tool);
    this.equipment.splice(index, 1);
  }

  edit(tool: string) {
    this.toolBeingEdited = tool;
  }

  save(newTool: string, tool: string) {
    tool = newTool;
    this.equipmentBeingEdited = null;
    }


}
