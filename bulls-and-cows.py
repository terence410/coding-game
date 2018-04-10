n = int(raw_input())
all = [raw_input().split() for i in xrange(n)]
for i in xrange(0, 10000):
    test = str(i).zfill(4)
    for guess, bulls, cows in all:
        tRemain = test
        gRemain = guess
        
        for k in xrange(4):
            if test[k] in guess[k]:
                gRemain = gRemain.replace(test[k], '', 1)
                tRemain = tRemain.replace(test[k], '', 1)
        
        for v in tRemain:
            if v in gRemain:
                gRemain = gRemain.replace(v,'',1)
        
        if (4 - len(tRemain)) != int(bulls) or (len(tRemain) - len(gRemain)) != int(cows) or (guess == test and int(bulls) != 4):
            break
    else:
        print test
