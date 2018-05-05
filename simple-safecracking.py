print "".join(str("onstlmcyxw".find(chr((ord(s[2])-ord(s[0])-len(s))%26+97))) for s in raw_input().split(": ")[1].split("-"))
