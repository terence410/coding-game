l = input()
k = [raw_input().split() for i in xrange(input())]
for i in reversed(range(l)):
  match = [j[0] for j in k if (i + 1) % int(j[1]) == 0]
  print reduce(lambda a, b: "".join(["X" if a[j] + b[j] != "00" else "0" for j in range(4)]), match, "0000")
