package main
import "fmt"
import "os"
import "bufio"
import "regexp"

func main() {
    scanner, width, height, count, array := bufio.NewScanner(os.Stdin), 0, 0, 0, make([]int, 0)
    output := map[bool]string{true: "#", false: "."}
    
    scanner.Scan()
    fmt.Sscan(scanner.Text(), &width, &height)
    scanner.Scan()
    fmt.Sscan(scanner.Text(), &count)
    for scanner.Scan() {
        array = append(array, len(regexp.MustCompile("#").FindAllStringIndex(scanner.Text(), -1)))
    }
    
    for i := 0; i < (count%2) * width + (count%2 - 1) * -1 * height; i++ {
        for j := 0; j < (count%2) * height + (count%2 - 1) * -1 * width; j++ {
            fmt.Print(output[(count%2) * i + (count%2 - 1) * -1 * j > width - array[(count%2) * j + (count%2 - 1) * -1 * i] - 1])
        }
        fmt.Println()
    }
}
