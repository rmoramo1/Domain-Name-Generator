
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domin =['.com','.us','.cr','.us','.ursss']


for (i = 0; i < pronoun.length; i++) {
    for (r = 0; r < adj.length; r++) {
        for(m=0;m<noun.length;m++){
            for(h=0;h<domin.length;h++){
                console.log( pronoun[i] + adj[r] + noun[m] + domin[h]);
            }
        }
    }
}



