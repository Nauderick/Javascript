//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(sentence.match(/love/gi))

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence02 = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence02.match(/because/gi))

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence03 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let sentence04 = sentence03.replace('%',' ')
let sentence05 = sentence04.replace('@',' ')
let sentence06 = sentence05.replace('#',' ')
let sentence07 = sentence06.replace('&',' ')

console.log(sentence07)