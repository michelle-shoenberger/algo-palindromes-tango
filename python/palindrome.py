# O(n) - but only half n, as it does constant time access to opposite index
import re

def palindrome(word):
    new_word = re.sub(r'[^\w]','', str(word)).lower()
    for i in range(len(new_word)//2):
        if new_word[i] != new_word[-(i+1)]:
            return False
    return True
  
