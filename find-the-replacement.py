from collections import OrderedDict
x = raw_input()
y = raw_input()
convert = OrderedDict([[x[i], y[i]] for i in xrange(len(x)) if x[i] != y[i]])
if len(convert) == 0: print "NONE"
elif "".join([convert[v] if v in convert else v for i, v in enumerate(x)]) == y: 
    for a, b in convert.items(): print a + "->" + b
else: print "CAN'T"
