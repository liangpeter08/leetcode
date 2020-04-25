# ch.isalpha()

class Solution:
    def isPalindrome(self, s: str) -> bool:
        stack = []
        for ch in s:
          if ch.isalnum():
            stack.append(ch)
        for i in range(0, int(len(stack) / 2)):
          if stack[i].lower() != stack[len(stack) - 1 - i].lower():
            return False
        return True