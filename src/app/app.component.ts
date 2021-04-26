import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app123",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  clickMessage = "";
  Inp = "";
  onClickMe(value: string) {
    console.log(value);
    this.Inp += value;
  }
}
