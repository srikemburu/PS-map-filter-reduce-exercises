/*
Map Transformers
Using map, return an array of each transformer's value of its 'form' property 
*/
//result: ['Freightliner Truck','Gun', 'VW Beetle','Walkman']
const transformersMap = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ];

      // console log form
      const transFormResult =  transformers.map ((char) => {
        return char.form;
      })
      console.log("\n\n EX 1 - MAP example - Output form property")
      console.log(transFormResult) 

      //Extra practice
      const minifiedCharacters = transformers.map((char) => ({
        name: char.name,
        team: char.team,
      }
      ))
      console.log("\n EX 1 - MAP example Extra Practice - Show Name & Team from each transformer")
      console.log(minifiedCharacters)

}

transformersMap()

/*
Filter Transformers
Using filter, return an array of transformer objects that have the 'team' property of 'Autobot'

result: [ {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
         {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        }
    ]

*/
const transformersFilter = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]

      //console log objects with taem 'Autobot'
      const teamAutobot = transformers.filter(char => char.team === 'Autobot')
      console.log("\n\n EX 2 - FILTER example. Show transformer objects that have the team property of Autobot\n")
      console.log(teamAutobot)
}

transformersFilter()

/*
Reduce Transformers
Using reduce, return an object that has a count for each team of transformer
result: {
    Autobot: 2,
    Decepticon: 2
}
*/
const reduceTransformers = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]

        //console log object that has a count for each team of transformer
        const transformersByTeam = transformers.reduce((acc,cur) => {
            if (acc[cur.team]) {
              acc[cur.team]++
            } else {
              acc[cur.team] = 1
            }
          return acc
        }, {})
        console.log("\n\n EX 3 - REDUCE example. Show transformer object that has a count for each team of transformer")
        console.log(transformersByTeam)
}

reduceTransformers()

/*

Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
Use filter and reduce
*/

//result: 42
const sumPositiveElement = () => {
 
    const input = [ 1, -4, 12, 0, -3, 29, -150]
    let chain = input.filter(number => number >= 0)
    .reduce((acc,cur) => acc + cur, 0)
    console.log("\n\n EX 4 - FILTER plus REDUCE example. Sum of Positive Numbers")
    console.log(chain)
}


sumPositiveElement()

/* 
Calculate median and mean
Calculate the mean and median values of the number elements from the input array.

Use: reduce, sort, Math.abs
*/
//result: { mean: 38.5, median: 32 }
const medianMean = () => {
    const input = [12, 46, 32, 64]

    const sum = input.reduce((sum,val) => (sum += val))
    const len = input.length
    console.log("\n\n EX 5 - MEAN plus MEDIAN example for input: ", input)
    console.log("mean: ", sum / len)

    const arrSort = input.sort();
    const mid = Math.ceil(len / 2);
console.log("mid: " , mid)
    const median =
      len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    console.log("median: ", median);
}

medianMean()


/*
Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
Use .map , .split , .join
*/
//result: 'GRRM'
const nameInitials = () => {
    const input = 'George Raymond Richard Martin';

    const myArrChain = input.split(" ")
    .reduce((firstName, fName)=> (firstName += fName[0]),"")

    console.log("\n\n EX 6 - GET NAME INITIALS using .split and .reduce for input: ", input)
    console.log(myArrChain)
 }

nameInitials()

/*
Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
Use .map , Math.min , Math.max
*/

//Result: [13, 67, 54]
const ageDifference = () => {
    const input = [
        {
          name: 'John',
          age: 13
        },
        {
          name: 'Mark',
          age: 56,
        },
        {
          name: 'Rachel',
          age: 45,
        },
        {
          name: 'Nate',
          age: 67,
        },
        {
          name: 'Jeniffer',
          age: 65,
        }
      ];

      const myList = input.map(person => person.age)
      .sort()

      const len = myList.length
      const newList = [myList[0], myList[len-1], myList[len-1]-myList[0]]
      console.log("\n\n EX 7 - AGE DIFFERENCE using .map and .sort: ")
      console.log(newList)

}

ageDifference()

