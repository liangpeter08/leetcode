class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        i = 0
        j = len(s) - 1
        retval = list(s)
        while i < j:
            if s[i] in vowels:
                while True:
                    if s[j] in vowels:
                        break
                    j -=1
                if i != j:
                    tmp = retval[i]
                    retval[i] = retval[j]
                    retval[j] = tmp
                    j -= 1
            i += 1
        return ''.join(retval)
