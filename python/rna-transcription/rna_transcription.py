def to_rna(dna_strand):
    transcriptionDict = {}
    transcriptionDict['G'] = 'C'
    transcriptionDict['C'] = 'G'
    transcriptionDict['T'] = 'A'
    transcriptionDict['A'] = 'U'

    transcription = ""
    for c in dna_strand:
        if c in transcriptionDict:
            transcription += transcriptionDict[c]
        else:
            raise ValueError('error')

    return transcription
