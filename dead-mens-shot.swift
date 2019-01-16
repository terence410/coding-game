import Foundation
let polygon = Array(1...(Int(readLine()!)!)).map{ v in (readLine()!).components(separatedBy: " ").map{Int($0)!}}
func cross(x: [Int], y: [Int], z: [Int]) -> Int {
    return (x[0] - y[0]) * (z[1] - y[1]) - (x[1] - y[1]) * (z[0] - y[0])
}
Array(1...(Int(readLine()!)!)).forEach{ _ in
    let x = (readLine()!).components(separatedBy: " ").map{Int($0)!}
    let result = polygon.enumerated().map{ (i, y) in cross(x: x, y: y, z: polygon[(i + 1) % polygon.count]) <= 0}
    print(result.contains(false) ? "miss": "hit")
}
