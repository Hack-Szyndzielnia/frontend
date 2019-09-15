import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {

  @Input()
  public size: "small" | "large";
  public color: ThemePalette = "accent";
  public diameter = 50;

  constructor() { }

  ngOnInit() {
    this.size = this.size || "small";
    this.diameter = this.size === "small" ? 50 : 100;
  }

}
