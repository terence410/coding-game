arr = [raw_input().split() for i in xrange(input())]
dict = reduce(lambda a, b: a.setdefault(b[0], []).append(b[1]) or a, arr, {})
def cal(keys, x): return max([cal(dict[j], x) for j in keys if dict.get(j)] or [0]) + 1
print cal(dict.keys(), 0)
