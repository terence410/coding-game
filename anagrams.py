phrase = raw_input()

string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
a1 = [c for (i, c) in enumerate(string) if i % 2 == 1]
a2 = [c for (i, c) in enumerate(string) if i % 3 == 2]
a3 = [c for (i, c) in enumerate(string) if i % 4 == 3]

match = [len(phrase) - i for (i, c) in enumerate(phrase) if c == " "]
phrase = reduce(lambda a, b: a + ("" if b == " " else ((" " + b) if len(a) + 1 in match else b)), phrase, "")

match = [c for c in phrase if c in a3]
match = match[-1:] + match[:-1]
phrase = reduce(lambda a, b: a + (match.pop(0) if b in a3 else b) , phrase, "")

match = [c for c in phrase if c in a2]
match = match[1:] + match[:1]
phrase = reduce(lambda a, b: a + (match.pop(0) if b in a2 else b) , phrase, "")

match = [c for c in phrase if c in a1]
match.reverse()
phrase = reduce(lambda a, b: a + (match.pop(0) if b in a1 else b) , phrase, "")

print phrase
