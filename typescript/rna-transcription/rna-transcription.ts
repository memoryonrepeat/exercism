type DNA = "A" | "T" | "G" | "C"
type RNA = "U" | "A" | "G" | "C"

class Transcriptor {
  private DNAtoRNA = {
    "A": "U",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  isDNA(nucleotide: string): nucleotide is DNA{
    return (nucleotide in this.DNAtoRNA)
  }

  toRna(input: string): string{
    return input.split("").map((nucleotide) => {
      if (!this.isDNA(nucleotide)) {
        throw "Invalid input DNA."
      }

      return this.DNAtoRNA[nucleotide] as RNA
    }).join("")
  }

}

export default Transcriptor