
# Interview Question asked

## Oracle (offer)

#### phone Interview
1. find largest sum of non-adjacent array (sliding window) (airbnb question)

#### onsite Interview
1. find the minimum value in a pivot array (logn runtime expected)
 - extension: find the k smallest in a pivot array (max heap)
 - extension: find minimum value given non unique values
2. Transcode html encoding into characters (regex capturing groups)
3. system design
4. behaviour

## Yext (passed onsite, position filled, on the top of the list once position becomes available)

#### phone Interview
1. convert a base 10 value to an alphabetical numerical system
 - 1 => A
 - 26 => Z
 - 27 => AA
 - 42 => AP
2. debug a tree balancing code (recursive)
 - base case wrong
 - recursion wrap
 - tree swap was wrong
 - once you bubble up, you need to recurse down again
 - if they were swap

#### Onsite (Wednesday, April 22)
1. debug game of life simlutation (pretty hard due to python)
  => vm running vscode, able to run debug
2. spiral matrix (told him I did it before, changed question)
  1. given two strings find if the two strings are "forgot the word" in where
    a. ABAB, YXYX => true
    b. CDEF, ABCD => true
    c. ACBD, AACB => false
    => use count1, count2 to count the unique characters, map each character to a count, use two maps
  2. find any possible combinations of a string in where
  there is no two character that aren't the same next to each other
  if not possible output not possible.
    a. aab => ['aba']
    b. aaababbbaa => 'ababababa'
      => use a hashMap, count the number of character for each, 
       decrement the count of the max element count first
      => optimize using a max heap
      actual answer: check if max character - 1: sum of all other characters
        => generate a solution by just alternating (O(n))

## Walmart (Offer, but on hold)

#### phone Interview
1. weird interview (interviewer copied and pasted my leetcode for min-stack (easy leetcode))
  - improve the performance of this code
    1. for the minStack, do not push on the minValue if it's the minValue is unchanged,
     and when you pop, check if the value is the minValue, and pop it off.
    2. Can you use one stack instead of two?
     - yes, push and pop value and minValue on to the same stack
     - additional handling since the you may be push one or two items at any given time

#### Onsite Interview
1. // In an array, elements at any two indices can be swapped in a single operation called a move. For example, if the array is arr = [17, 4, 8], swap arr[0] = 17 and arr[2] = 8 to get arr' = [8, 4, 17] in a single move. Determine the minimum number of moves required to sort an array such that all of the even elements are at the beginning of the array and all of the odd elements are at the end of the array.
// arr = [6, 3, 4, 5]
// Output = 1
 => basically use i, j counter
2. find min range of k sorted array
 (only 20 min, suppose to be manager behavior interview (talked for a while))
 example => [
     [1, 5, 6, 12],
     [4, 7, 12, 13],
     [6, 22 55, 88],
 ] => [5,4,6]
Note: Forgot during interview Min and Max heap will optimize this
3. design a shopping cart (system design)
 => not design api or frontend state
 => design the class interaction (OOO testing)
4. naive string decompression (easy leetcode)
 => a6b7d10
 (leetcode medium question: a6[b4[cd]ef])

## Apple (Failed, transcript not good enough)

#### Apple phone interview

#### phone Interview
1. design a sorting algorithm for string based on a new
ordering of the alphabet (random order)

a b c d e f g h i j k ...
z g d a m k d j q t n ...

  - how can you improve this algorithm?
    - increase the hashmap to preprocess 2 characters, and
    do two character comparison at one time
2. knowledge questions
  - if you have an api that suddenly get hit with lots of traffic,
  what do you do?
    - do horizontal scaling
    - do vertical scaling => forgot about this during interview (hints were dropped)
    - keep spare node in case of increased traffic
    - throttle the api by ensuring no individual user is the bad actor
    How do you know when to spawn a new node?
     - CPU or Memory utilization
     - Forgot during interview => can also be provision base on traffic

#### Onsite Interview (Monday, April 27th, 2020)

1. Domain regex
2. AWS details
3. Design top songs and album
4. Design looker dashboard
5. Director ask me to implement a semaphore

## Spotify (Offer)

#### Phone Interview  (Tuesday, April 21st)

1. knowledge question css (pseudo selector, pseudo element, ...)
2. javascript knowledge (setTimeout, event cycle)
3. html event propagation (downwards and upwards)
4. async problems
5. implement promises race and last functions
6. leetcode question easy: two sum

#### Onsite (Monday, May 4st)
1. naive string compression / queue implementation
2. values interview
3. design the spotify friend's playing list (system design/ backend/ frontend)
4. web programming, tree traversal, event propagation, class inheritance

## Facebook (Wednesday, April 29th)

#### Phone Interview  (Wednesday, April 29th)
1. Find the sum of all node within range (inclusive)
 => inorder traversal with slight optimization
2. Find the longest substring without repeating characters
 => hashMap

#### onsite

## Bloomberg (Wednesday, May 6th)

#### phone interview
1. design a tracking average time system (classes)
2. minHeap fink k max

#### onsite

## Citadel (rescheduled)





