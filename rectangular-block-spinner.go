package main
import "fmt"
import "os"
import "bufio"
import "strings"

func main() {
    scanner, size, angle := bufio.NewScanner(os.Stdin), 0, 0
    inputs, holders := [][]string{}, [][]string{}
    
    scanner.Scan()
    fmt.Sscan(scanner.Text(), &size)
    
    scanner.Scan()
    fmt.Sscan(scanner.Text(), &angle)
    
    for scanner.Scan(){ 
        inputs = append(inputs, strings.Split(scanner.Text(), " "))
    }
    
    for i := 0; i < size * 2 - 1; i++ {
        holders = append(holders, strings.Split(strings.Repeat(" ", size * 2 - 1), ""))
    }
    
    for i := size - 1; i > -size; i-- {
        for j, k := 0, i; j < size && k < size; j, k = j + 1, k + 1 {
            if k >= 0 && j >= 0 {
                holders[-i + size - 1][k + j] = inputs[j][k];
            }
        }
    }
    
    for i := 0; i < ((angle - 45) % 360) / 90; i++ {
        transposed := [][]string{}
        for j := range holders[0] {
            transposed = append(transposed, strings.Split(strings.Repeat(" ", size * 2 - 1), ""))
            for k := range holders {
                transposed[j][k] = holders[k][size * 2 - 2 - j]
            }
        }
        holders = transposed
    }
    
    for i := range holders {
        fmt.Println(strings.Join(holders[i], ""))
    }
}
