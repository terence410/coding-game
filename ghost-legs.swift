import Foundation
let inputs = (readLine()!).components(separatedBy: " ").map{Int($0)!}
let (W, H) = (inputs[0], inputs[1])
var legs = Array(1...H).map{ v in readLine()!}
let names = legs.remove(at: 0).components(separatedBy: "  ") 
let outputs = legs.removeLast().components(separatedBy: "  ") 

func ghosts(x: Int, y: Int) -> Int {
    if y < legs.count {
        let chars = Array(legs[y])
        if x * 3 + 1 < chars.count && chars[x * 3 + 1] == "-" {
            return ghosts(x: x + 1, y: y + 1)
        }
        else if x * 3 - 1 >= 0 && chars[x * 3 - 1] == "-" {
            return ghosts(x: x - 1, y: y + 1)
        }
        return ghosts(x: x, y: y + 1)
    }
    return x
}

for i in 0...(names.count - 1) {
    print(names[i] + outputs[ghosts(x: i, y:0)])
}
