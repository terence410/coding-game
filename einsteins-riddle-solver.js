let riddle = {};
let categoryIndex = {};
let [categoryCount, userCount] = readline().split(' ').map(Number);
let categories = Array(categoryCount).fill().map((x, i) => {
   return readline().split(' ').map((name, k) => {
    let sets = Array(categoryCount).fill().map(x => new Set());
    riddle[name] = {has: Array(categoryCount).fill(name, i, i+1), not: sets};
    categoryIndex[name] = i;
    return name;
  });
});

Array(+readline()).fill().map(() => {
  let x = readline();
  let [name1, name2] = x.split(/ & | ! /);
  if(x.indexOf("&") > 0){
    riddle[name1].has[categoryIndex[name2]] = name2;
    riddle[name2].has[categoryIndex[name1]] = name1;
  }else{
    riddle[name1].not[categoryIndex[name2]].add(name2);
    riddle[name2].not[categoryIndex[name1]].add(name1);
  }
});

for(let i = 0; i < 7; i++){
  for(let [name, item] of Object.entries(riddle)) {
    for(let [index, nameNested] of Object.entries(item.has)){
      if(nameNested) {
        let itemNested = riddle[nameNested];
        for (let [newIndex, newName] of Object.entries(itemNested.has))
          if (newName)
            item.has[categoryIndex[newName]] = newName;

        for (let [nestedIndex, sets] of Object.entries(itemNested.not))
          if (sets.size)
            item.not[nestedIndex].add(...sets);
      }
    }

    for(let [index, sets] of Object.entries(item.not)) {
      for (let nameNested of sets.values()) {
        for (let [newIndex, newName] of Object.entries(riddle[nameNested].has))
          if (newName)
            item.not[newIndex].add(newName);
      }
    }

    let remainCategories = categories[categoryIndex[name]].filter(x => x !== name);
    for(let name of remainCategories) {
      for (let [newIndex, newName] of Object.entries(riddle[name].has))
        if (newName)
          item.not[newIndex].add(newName);
    }

    for (let [index, sets] of Object.entries(item.not)) {
      let remainCategories = categories[index].filter(x => ![...item.not[index]].includes(x) );
      if (remainCategories.length === 1)
        item.has[index] = remainCategories[0];
    }
  }
}

let names = categories[0].sort();
for(let i = 0; i < categoryCount; i++)
  console.log(names.map(x => riddle[x].has[i]).join(" "));
