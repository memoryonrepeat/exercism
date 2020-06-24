const COLOR_TO_RESISTANT_MAPPING = {
	"black": 0,
	"brown": 1,
	"red": 2,
	"orange": 3,
	"yellow": 4,
	"green": 5,
	"blue": 6,
	"violet": 7,
	"grey": 8,
	"white": 9
}
type Color = keyof typeof COLOR_TO_RESISTANT_MAPPING

export class ResistorColor {  
  private colors: [Color, Color];

  constructor(colors: [Color, Color]) {
    /*if (colors.length < 2){
      throw "At least two colors need to be present"
    }*/
    this.colors = colors
  }

  value = (): number => {
    const [firstColor, secondColor] = this.colors

    return 10*COLOR_TO_RESISTANT_MAPPING[firstColor] + COLOR_TO_RESISTANT_MAPPING[secondColor];
  }
}