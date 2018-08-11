import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  posts = [
    {
      title: "La paix dans le monde",
      content:
        "Dolor sit irure quis id qui fugiat culpa fugiat voluptate. Cupidatat pariatur adipisicing est anim culpa esse nulla eu eu sunt culpa ipsum. Magna sunt id enim reprehenderit est duis reprehenderit ex in aliquip sit ex ipsum consectetur. Nostrud minim exercitation ullamco duis deserunt. Eiusmod aute dolor et in id reprehenderit velit culpa.",
      loveIts: 1,
      created_at: new Date("December 21, 2012")
    },
    {
      title: "La fin de la faim",
      content:
        "Proident consequat nulla ut ipsum laborum nisi nisi et est tempor ullamco excepteur. Cillum excepteur velit id enim magna. Mollit irure et non minim irure duis id ea commodo commodo enim. Cupidatat culpa ea culpa anim exercitation nisi sint. Elit ea ipsum in eu ipsum Lorem labore consectetur excepteur tempor id culpa sunt labore. Sint proident sit occaecat sint anim ipsum exercitation ullamco non excepteur labore. Sunt ipsum aliqua sunt ea fugiat amet consectetur minim qui.",
      loveIts: 0,
      created_at: new Date("January 1, 2018")
    },
    {
      title: "La guerre des bébés pigeons",
      content:
        "Deserunt id reprehenderit deserunt exercitation. Enim sit eu consequat sint dolor ex magna sit fugiat ad culpa dolore. Aute cillum fugiat consectetur ad fugiat sit reprehenderit occaecat nostrud commodo laborum excepteur irure. Reprehenderit non fugiat culpa dolore esse voluptate quis.",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Du bonheur partout",
      content:
        "Aliqua anim commodo eu commodo elit non consectetur deserunt dolor sit est cillum voluptate et. Fugiat voluptate officia eiusmod pariatur. Commodo ullamco officia est voluptate labore officia commodo cupidatat cillum ut mollit non. Do esse tempor eiusmod labore. Consectetur incididunt culpa enim consectetur deserunt minim velit nostrud. Occaecat magna ipsum laboris exercitation cillum occaecat exercitation amet adipisicing qui magna veniam officia mollit.",
      loveIts: 10,
      created_at: new Date("April 15, 2018")
    }
  ];
}
