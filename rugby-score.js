let N = +readline();
for(let a = 0; N >= 0; a++, N -= 5)
  for(let i = 0, trial = N; i <= a; i++, trial -= 2)
      if(trial >= 0 && trial % 3 === 0)
          console.log(a, i, trial / 3);
