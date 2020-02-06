function findUnique(numbers) {
    var arr = []
    for (let i = 0; i < numbers.length; i++) {
        let find = false;
        for (let j = 0; j < arr.length; j++) {
            if (numbers[i] == arr[j][0]) {
                arr[j][1] += 1
                find = true
            }
        }
        if (find == false) {
            arr.push([numbers[i], 1])
        }
    }
    // console.log(arr);


    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][1] > arr[j][1]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    // console.log(arr);
    return arr[0][0]
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
console.log(findUnique([1234567]), 1234567);
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]), 1);
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]), 4);
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]), 9);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}
2. ======>
function findUnique(numbers) {
    const hash = numbers.reduce((s, n) => {
      if (s.has(n)) {
        s.delete(n)
      } else {
        s.add(n)
      }
      
      return s;
    }, new Set());
    
    for (let n of hash) {
      return n
    }
}
3. ======>
function findUnique(numbers) {
  nums = {};
  for(i=0;i<numbers.length;i++){
    if(nums[numbers[i]]===undefined){nums[numbers[i]] = 1;} else {nums[numbers[i]]++;}
  }
  for(var i in nums){if(nums[i]===1){return parseInt(i);}}
}
*/


//CARA ORANG LAIN

/*
  Possible solutions:
  1. for each index i, search for j !== i with numbers[i] === numbers[j] until none is found
      Horrible though, O(n²), so not even implemented, way too evil
  2. sort array, search for index i with numbers[i] !== numbers[i-1] && numbers[i] !== numbers[i+1]
      OK-ish, O(n*log(n)) (assuming quick sort or a similar algorithm)
  3. radix sort approach; create histogram of all numbers, then search histogram for number with single occurrence
      Sort of O(n), but high value range -> huge histogram, still probably best solution for manageable value ranges
      Disadvantage is that this does not work in place and about doubles the memory usage
  4. recursive approach using sublists and solution 3
      (1) split list into sublists
      (2) recursively call findUnique function with only the sublist with an odd number of elements
      Problem: splitting into sub lists isn't trivial - they should be relatively equally sized,
      cases of a sub list being equal to the original list and the other ones benig empty causes
      an infinite recursion, which is hardly desirable. Alternating hash functions could solve this,
      but that's a little too over the top for a challenge like this.
      Instead I went with using a modOffset variable which is incremented in the rare case of a sub
      list containing all original elements, assuring the next recursion step will yield a different
      distribution of numbers.
  
  I went with solution #4, which is overall the most complex one, but is also the best performance-wise as
  it passes all the final tests for this kata in about 1.5s, whereas the other solutions take more than 6.
*/

var findUnique = findUnique4;


// Note: Sorts the numbers as side effect
// You could clone the whole array instead to preserve the original one
// Would require more time + memory though
function findUnique2(numbers) {
    numbers.sort();
    for (var i = 0; i < numbers.length; i += 2) {
        if (numbers[i] !== numbers[i + 1]) {
            return numbers[i];
        }
    }
    return undefined;
}


// Using a histogram to find unique number in about O(n)
function findUnique3(numbers) {

    // Initialize histogram
    var histogramSize = (numbers.length + 1) / 2;
    var histogram = [];
    for (var i = 0; i < histogramSize; i += 1) {
        histogram[i] = 0;
    }

    // Initialize mapping to reduce value range to histogramSize
    var mapping = {};
    var inverseMapping = new Array(histogramSize);
    var index = 0;
    for (var i in numbers) {
        if (!(mapping[numbers[i]] >= 0)) {
            mapping[numbers[i]] = index;
            inverseMapping[index] = numbers[i];
            index += 1;
        }
    }

    // Sort values into histogram
    for (var i in numbers) {
        histogram[mapping[numbers[i]]] += 1;
    }

    // Find only single element in histogram and return
    for (var i in histogram) {
        if (histogram[i] < 2) {
            return inverseMapping[i];
        }
    }

    // Given correct input, this line will not be executed
    return false;
}





var largestAllowedHistogram = 8192;

function findUnique4(numbers, modOffset) {
    // for small lists, use histogram approach as ~O(n) solution
    if (numbers.length <= largestAllowedHistogram) {
        return findUnique3(numbers);
    }

    // I assume using the square root to divide list into
    // sub lists is a reasonable approach
    var subListCount = Math.max(Math.floor(Math.sqrt(numbers.length)), 2) + (modOffset || 0);
    var subLists = [];
    for (var i = 0; i < subListCount; i += 1) {
        subLists[i] = 0;
    }

    // Traverse array and count occurrences
    for (var i = 0; i < numbers.length; i += 1) {
        subLists[numbers[i] % subListCount] += 1;
    }

    // Find out which sub list has an odd number of elements
    var oddSubList = 0;
    for (var i = 0; i < subListCount; i += 1) {
        if (subLists[i] % 2 === 1) {
            oddSubList = i;
            break;
        }
    }

    // Traverse array second time, build according sub list
    var subList = [];
    for (var i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % subListCount === oddSubList) {
            subList.push(numbers[i]);
        }
    }

    // Very rare case of one sub list containing all the elements
    // Shift mod offset by one to assure different distribution
    if (subList.length === numbers.length) {
        return findUnique(subList, (modOffset || 0) + 1);
    }

    // Recursive call of sub list
    return findUnique(subList, 0);
}