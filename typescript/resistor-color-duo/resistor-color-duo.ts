export class ResistorColor {
  private colors: string[];
  private order = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

  constructor(colors: string[]) {
    if (colors.length < 2){
      throw "At least two colors need to be present"
    }
    this.colors = colors.slice(0,2)
  }
  value = (): number => parseInt(this.colors.reduce((acc, current) => (acc + this.order.indexOf(current)), ''))
}
