# RSSNodeTasks

#### To run the application, enter the node index command in the command line with the necessary options described below.

#### CLI tool accepts 3 options (short alias and full name):


###### -c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:


 X is a cipher mark:

         C is for Caesar cipher (with shift 1)

         A is for Atbash cipher
        
         R is for ROT-8 cipher

 Y is flag of encoding or decoding 
    
(mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)

         1 is for encoding

         0 is for decoding


###### -i, --input: a path to input file


###### -o, --output: a path to output file

For example, config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"