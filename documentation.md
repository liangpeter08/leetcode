
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

## Yext (Ongoing)

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

## Walmart (Offer, but on hold)

#### phone Interview
1. weird interview (interviewer copied and pasted my leetcode for min-stack (easy leetcode))
  - improve the performance of this code
    1. for the minStack, do not push on the minValue if it's the minValue is unchanged, and when you pop, check if the value is the minValue, and pop it off.
    2. Can you use one stack instead of two?
     - yes, push and pop value and minValue on to the same stack
     - additional handling since the you may be push one or two items at any given time

#### Onsite Interview
1. check if a linked list is a palindrome
2. find min range of k sorted array
 (only 20 min, suppose to be manager behavior interview (talked for a while))
 example => [
     [1, 5, 6, 12],
     [4, 7, 12, 13],
     [6, 22 55, 88],
 ] => [5,4,6]
3. design a shopping cart (system design)
 => not design api or frontend state
 => design the class interaction (OOO testing)
4. naive string decompression (easy leetcode)
 => a6b7d10
 (leetcode medium question: a6[b4[cd]ef])

## Apple

#### Apple phone interview 1 (Team 1: Apple TV) (friday, April 17)
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

#### Apple phone interview 2 (Team 2: Itunes) (rescheduled)


## Spotify (Tuesday, April 21st)
## Instagram (Wednesday, April 29th)
## Citadel (Monday, April 27)
## Bloomberg (Wednesday, May 6th)




