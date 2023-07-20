/*
 * Wiggle sort sorts the array into a wave like array.
 * An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] <= arr[1] >= arr[2] <= arr[3] >= arr[4] <= …..
 * KEEP IN MIND: there are also more strict definitions of wiggle sort which use
 * the rule arr[0] < arr[1] > arr[2] < arr[3] > arr[4] < … but this function
 * allows for equality of values next to each other.
 */
import { quickSelectSearch } from '../Search/QuickSelectSearch.js'

export const simplifiedWiggleSort = function (arr) {
  const arrSize = arr.length
  // find Median using QuickSelect
  let median = quickSelectSearch(arr, Math.floor(arrSize / 2.0))
  median = median[Math.floor(arrSize / 2.0)]

  const sorted = new Array(arrSize)

  let smallerThanMedianIndx = 0
  let greaterThanMedianIndx = arrSize - 1 - (arrSize % 2)

  arr.forEach(element => {
    if (element > median) {
      sorted[greaterThanMedianIndx] = element
      greaterThanMedianIndx -= 2
    } else {
      if (smallerThanMedianIndx < arrSize) {
        sorted[smallerThanMedianIndx] = element
        smallerThanMedianIndx += 2
      } else {
        sorted[greaterThanMedianIndx] = element
        greaterThanMedianIndx -= 2
      }
    }
  })

  return sorted
}
