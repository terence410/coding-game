inputs = raw_input().split(" = ")
for i in range(10 ** inputs[0].count("?")):
    test = inputs[0].replace("?", "{}").format(*str(i).zfill(inputs[0].count("?")))
    try: print test + " = " + inputs[1] if eval("1.0 * " + test) == int(inputs[1]) else Nil
    except: pass
