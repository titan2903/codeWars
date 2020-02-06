function findSmallestInt(args) {
  for (let i = 0; i < args.length; i++) {
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] > args[j]) {
        var temp = args[i]
        args[i] = args[j]
        args[j] = temp
      }
    }
  }

  return args[0]
}



console.log(findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
console.log(findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
console.log(findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
console.log(findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
console.log(findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');

/*
CAra orang lain:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(0,args)
  }
}


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
*/