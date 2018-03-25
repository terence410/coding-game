result, scores = {}, {"eaionrtlsu": 1, "dg": 2, "bcmp": 3, "fhvwy": 4, "k": 5, "jx": 8, "qz": 10}
words = [raw_input() for i in xrange(input())]
letters = raw_input()
for w in words:
    hit = [val for val in letters if val in w]
    points = sum([scores[key] for c in hit for key in scores if c in key])
    if len(hit) >= len(w) and not result.has_key(points) : result[points] = w

print result[max(result.keys())]
