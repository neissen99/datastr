function sumOfDistinctElements(set1, set2) {
    let sum = 0;

    for (let i = 0; i < set1.length; i=i+1) {
        let found = false;
        for (let j = 0; j < set2.length; j=j+1) {
            if (set1[i] === set2[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            sum += set1[i];
        }

         for (let i = 0; i < set2.length; i=i+1) {
        let found = false;
        for (let j = 0; j < set1.length; j=j+1) {
            if (set2[i] === set1[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            sum += set2[i];
        }
         }

    return sum;
}