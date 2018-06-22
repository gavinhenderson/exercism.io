//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class DnaTranscriber{
  toRna(string){
    var transcriptionDict = {
      'G':'C',
      'C':'G',
      'T':'A',
      'A':'U'
    }

    var transcription = ""
    //for c in dna_strand:
    for(var i=0;i<string.length;i++){
      //if c in transcriptionDict:
      if(string[i] in transcriptionDict){
        transcription += transcriptionDict[string[i]]
      }else{
        throw new Error('Invalid input')
      }
    }

    return transcription
  }

};

module.exports = DnaTranscriber;
