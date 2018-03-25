a = raw_input().split(' ')
c = "".join([str(len(a[i])%2) * len(a[i+1])  for i in xrange(0, len(a) - 1, 2)])
print "INVALID" if len(c) % 7 + len(max(a[::2])) - 2 else "".join([chr(int(c[i:i+7], 2)) for i in xrange(0, len(c), 7)])
