//ASSIGNMENT:
//Read in a string of RNA, break it into codons of length 3, and translate those codons into their corresponding amino acids.
//If a STOP codon is encountered, stop translating and return the protein strand up to that point.
//If an invalid sequence is entered, throw an error with the message Invalid codon.

//What do we need?
//1. A string of RNA
//2. Amino acids (codons) table
//3. STOP codons (UAA, UAG, UGA)
//4. An object to hold codons (What should we use?)
//5. An object to hold amino acids (What should we use?)
//6. Function to translate the RNA => codons => amino acids

//What do we have?
//1. A string of RNA
//2. Amino acids (codons) table
//3. STOP codons (UAA, UAG, UGA)

//What do we need to do?
//1. Take in a string of RNA
//2. Break it into codons of length 3 WITHOUT stopping at STOP codons
    //Store the codons in an object (What should we use?)
//3. Translate those codons into their corresponding amino acids
    //Store the amino acids in an object (What should we use?)
//4. If a STOP codon is encountered, stop translating and return the protein strand up to that point.
//5. If an invalid sequence is entered, throw an error with the message Invalid codon.



//String to hold the RNA
const sequence = "AUGUUUUCUUAAAUG";

//Function to translate the RNA => codons => amino acids
function translate(rna){

//Check edge cases where all codons != length 3 or the string is empty
if (rna.length % 3 !== 0 || rna.length === 0) {
    throw new Error("Invalid codon");
}

else {

//Ensure rna string is case-insensitive
rna = rna.toUpperCase();

//Array to hold the codons
const codons = [];

//Array to hold the resulting amino acids
const proteins = [];

//Loop through the RNA and break it into codons of length 3. Push each group of 3 into the codons array
for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna.slice(i, i + 3));
}

//Loop through the codons and translate them into their corresponding amino acids, push the amino acid into the proteins array, and stop translating if a STOP codon is encountered
for (let i = 0; i < codons.length; i++) {

    //Check element at index i for STOP codon
    if (codons[i] === "UAA" || codons[i] === "UAG" || codons[i] === "UGA") {
        break;
    }

    //If a STOP codon is not found, translate element at index i. If an invalid codon is found, throw an error
    else {
        switch (codons[i]) {
            case "AUG":
                proteins.push("Methionine");
                break;
            case "UUU":
            case "UUC":
                proteins.push("Phenylalanine");
                break;
            case "UUA":
            case "UUG":
                proteins.push("Leucine");
                break;
            case "UCU":
            case "UCC":
            case "UCA":
            case "UCG":
                proteins.push("Serine");
                break;
            case "UAU":
            case "UAC":
                proteins.push("Tyrosine");
                break;
            case "UGU":
            case "UGC":
                proteins.push("Cysteine");
                break;
            case "UGG":
                proteins.push("Tryptophan");
            case "UAA":
            case "UAG":
            case "UGA":
                break;
            default:
                throw new Error("Invalid codon");
            }
        }
    }
    console.log(proteins);
}

}
       

//Call the function
translate(sequence);