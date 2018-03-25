n = int(raw_input())
d = raw_input().split()
print reduce(lambda s, c: s + (d[c%2] * int((s[c:] + d[c%2])[0])), range(0, n), "")[0:n]
